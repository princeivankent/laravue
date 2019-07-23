<?php

Route::group(['middleware' => ['api_token']], function () {
    // Guarded by api_token middleware
    Route::get('v1/user', function () {
        return response()->json('Okay!');
    });
});

Route::post('v1/login', 'api\AuthController@login');
Route::post('v1/logout', 'api\AuthController@logout');