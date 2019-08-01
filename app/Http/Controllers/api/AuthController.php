<?php

namespace App\Http\Controllers\api;

use Carbon\Carbon;
use App\Services\Jwt;
use App\Models\ApiToken;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request, Jwt $jwt)
    {
        $employee_number = $request->employee_number;
        $password = $request->password;
        $user = '';

        if (!$employee_number || !$password )
            return response()->json(['message' => 'Please complete the required fields!'], 422);

        // Perform like a monster here...
        if (Hash::needsRehash($password))
            $user = Employee::getUser($employee_number, $password);
        else {
            $user = Employee::getUserWithoutPassword($employee_number);
            if (!Hash::check($user->password, $password)) $user = '';
        }

        if (!$user) 
            return response()->json([
                'message' => 'Your credentials are incorrect!'
            ], 401);

        // Create token for the user
        $token = ApiToken::create([
            'user_id' => $user->id,
            'system_id' => 1, // as default
            'token'       => $jwt->encode([
                'employee_id'    => $user->id,
                'employee_no'    => $user->employee_no,
                'name'           => ucwords(strtolower($user->name)),
                'created_at'     => Carbon::now()->toDateTimeString()
            ]),
            'revoked'    => 0,
            'date_expired' => Carbon::now()->addMinutes(config('auth.token_expiration'))
        ]);

        return response()->json([
            'access_token' => $token->token,
            'date_expired' => Carbon::parse($token->date_expired)->toDateTimeString()
        ]);
    }

    public function logout (Request $request)
    {
        $user = ApiToken::query();
        $sql = $user->whereToken($request->access_token)->first();

        if (!$sql)
            return response()->json([
                'message' => 'Token doesn\'t exists!'
            ], 200);

        if (!$user->update(['revoked' => 1]))
            return response()->json([
                'message' => 'Something went wrong on the server'
            ], 500);

        return response('', 200);
    }
}
