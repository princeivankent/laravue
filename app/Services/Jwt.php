<?php

namespace App\Services;

use Firebase\JWT\JWT as Token;

class Jwt
{
    private static $signature = 'Prince';
    private static $algorithm = 'HS256';
    public static function encode($payload) { return Token::encode($payload, self::$signature); }
    public static function decode($jwt) { return Token::decode($jwt, self::$signature, [self::$algorithm]); }

    /**
     * -----------------------------------
     * Get User details from Encoded JWT
     * -----------------------------------
     * @param string $request
     * @return object User Data
     */
    public static function user($request)
    {
        return self::decode(str_replace('Bearer ', '', implode(' ', [$request->header('Authorization')])));
    }
}