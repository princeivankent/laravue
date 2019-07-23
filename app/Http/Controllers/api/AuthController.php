<?php

namespace App\Http\Controllers\api;

use Carbon\Carbon;
use App\Services\Jwt;
use App\Models\ApiToken;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login(
        Request $request, 
        Jwt $jwt
    )
    {
        if (!$request->employee_number || !$request->password) {
            return response()->json([
                'message' => 'Please complete the required fields!'
            ], 422);
        }

        $query = Employee::getUser($request->employee_number, $request->password);

        if (!$query) 
            return response()->json([
                'message' => 'Your credentials are incorrect!'
            ], 401);

        // Create token for the user
        $token = ApiToken::create([
            'user_id' => $query->id,
            'system_id' => 1, // as default
            'token'       => $jwt->encode([
                'employee_id'    => $query->id,
                'employee_no'    => $query->employee_no,
                'name'           => ucwords(strtolower($query->name)),
                'created_at'     => Carbon::now()->toDateTimeString()
            ]),
            'revoked'    => 0,
            'date_expired' => Carbon::now()->addMinutes(config('auth.token_expiration'))
        ]);

        return response()->json([
            'access_token' => $token->token,
            'date_expired'   => Carbon::parse($token->date_expired)->toDateTimeString()
        ]);
    }

    public function logout (Request $request)
    {
        $query = ApiToken::query();
        $sql = $query->whereToken($request->access_token)->first();

        if (!$sql)
            return response()->json([
                'message' => 'Token doesn\'t exists!'
            ], 200);

        if (!$query->update(['revoked' => 1]))
            return response()->json([
                'message' => 'Something went wrong on the server'
            ], 500);

        return response('', 200);
    }
}
