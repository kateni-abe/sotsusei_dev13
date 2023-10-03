<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        
        
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Mypage', [
        'user' => Auth::user()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');







// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware(['auth'])->group(function () {
//     Route::resource('profiles', ProfileController::class);

//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
// });

Route::get('/', function () {
    return Inertia::render('Top'); // resources/js/Pages/Top.jsx
});

Route::get('/introduction', function () {
    return Inertia::render('Introduction'); // resources/js/Pages/Introduction.jsx
})->name('introduction');


Route::get('/profile-input', function () {
    return Inertia::render('ProfileInput');  
})->name('profileInput');

Route::get('/top', function () {
    return Inertia::render('Top'); // これはあなたのTopページのコンポーネント名になります。
})->name('top');


Route::get('/registration-complete', function () {
    return Inertia::render('Registration_Complete');
})->name('registration-complete');


// もし Mypage.jsx へのルートも必要であれば、以下のように追加
Route::get('/mypage', function () {
    return inertia('Mypage');
})->name('mypage');


Route::get('/send_card', function () {
    return Inertia::render('Send_card'); 
})->name('Send_card');


Route::get('/edit_mycard', function () {
    return Inertia::render('EditMycard'); // resources/js/Pages/EditMycard.jsx
})->name('edit_mycard');


Route::get('/friend_index', function () {
    // ここで友だちの情報を取得してページに渡します
    $friendships = [];  // この変数は実際の友だちのデータで置き換える必要があります
    return Inertia::render('Friend_index', [
        'friendships' => $friendships
    ]);
})->name('Friend_index');

Route::get('/friendscard_view/{userId}', function ($userId) {
    // ここで指定されたIDの友だちの情報を取得してページに渡します
    return Inertia::render('Friendscard_view', [
        'userId' => $userId
    ]);
})->name('Friendscard_view');



Route::get('/comparison_introduction', function () {
    return Inertia::render('Comparison_introduction', [
        'friendName' => $friendName
    ]);
})->name('Comparison_introduction');

Route::get('/comparison', function () {
    return Inertia::render('Comparison');
})->name('Comparison');

Route::get('/edit_mycard', function () {
    return Inertia::render('EditMycard');
})->name('edit_mycard');

// マイカードを表示
Route::get('/view_mycard', function () {
    return Inertia::render('ViewMycard');
})->name('view_mycard');



require __DIR__.'/auth.php';