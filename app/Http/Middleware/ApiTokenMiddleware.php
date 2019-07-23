<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\ApiToken;
use Carbon\Carbon;

class ApiTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $auth_header = $request->header('Authorization');

        if (!isset($auth_header))
            return response()->json([
                'message' => 'Authorization Header is required'
            ], 404);

        $token = str_replace('Bearer ', '', implode(' ', [$auth_header]));

        $query = ApiToken::where([
            'token'   => $token,
            'revoked' => 0
        ])->first();

        if (!$query) 
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);

        if ($query->expires_at <= Carbon::now()) {
            $expiration = Carbon::parse($query->expires_at);
            $now        = Carbon::now();
            $idle_time  = $expiration->diffInMinutes($now);

            if ($idle_time >= config('auth.token_expiration')) {
                // Should return expiration notification (401 - unauthorized)
                return response()->json([
                    'message' => 'Your session state has been expired'
                ], 401);
            }
            else if ($idle_time >= config('auth.idle_expiration')) {
                // Update expiration (+token_expiration)
                $update = ApiToken::whereToken($token)
                    ->update([
                        'expires_at' => Carbon::now()->addMinutes(config('auth.token_expiration'))
                    ]);

                if (!$update) 
                    return response()->json([
                        'message' => 'Something went wrong while your token is updating.'
                    ], 500);
                
                // Remove this soon
                // return response()->json([
                //     'message' => 'your token has been updated'
                // ]);
            }
        }

        return $next($request);
    }
}
