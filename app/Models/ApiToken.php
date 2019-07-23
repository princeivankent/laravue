<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiToken extends Model
{
    protected $table = 'ipc_portal.api_tokens'; // We're pointing into IPC_PORTAL schema @ Oracle
    protected $fillable = [
        'user_id', 
        'system_id', 
        'token', 
        'revoked', 
        'date_expired'
    ];
    const CREATED_AT = 'date_created';
    const UPDATED_AT = 'date_updated';
}
