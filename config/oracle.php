<?php

return [
    'oracle' => [
        'driver'       => 'oracle',
        'host'         => env('DB_ORA_HOST', ''),
        'port'         => env('DB_ORA_PORT', ''),
        'database'     => env('DB_ORA_DATABASE', ''),
        'service_name' => env('DB_ORA_SERVICE_NAME', ''),
        'username'     => env('DB_ORA_USERNAME', ''),
        'password'     => env('DB_ORA_PASSWORD', ''),
        'charset'      => '',
        'prefix'       => '',
    ]
];
