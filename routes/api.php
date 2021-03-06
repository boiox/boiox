<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
$api = app('Dingo\Api\Routing\Router');
$api->version('v1',function ($api){
    $api->group(['namespace' => 'App\Http\Controllers\Api'],function ($api) {
        $api->get('/login','Auth\LoginController@login');
        $api->get('/get_authorized_url','Auth\LoginController@getOpenAuthorizeUrl');
        $api->get('/index/ad','V1\IndexController@ad');
        $api->get('/index/icon','V1\IndexController@icon');
   });
});
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
