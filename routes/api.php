<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SixteenPersonalitiesController;
use App\Http\Controllers\ChronotypeController;
use App\Http\Controllers\FriendshipController;
use App\Http\Controllers\InfoChronotypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// routes/api.php


Route::resource('sixteen_personalities', SixteenPersonalitiesController::class);
Route::apiResource('chronotype', ChronotypeController::class);
Route::resource('friendships', FriendshipController::class);
Route::apiResource('info_chronotypes', InfoChronotypeController::class);
Route::post('/sixteen_personalities', [SixteenPersonalitiesController::class, 'store']);
Route::post('/chronotypes', [ChronotypeController::class, 'store']);
Route::post('/updateProfile', [ProfileController::class, 'store']);