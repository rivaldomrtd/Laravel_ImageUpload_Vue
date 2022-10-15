<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;

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
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//images
Route::get('file-upload', [FileController::class, 'index'])->name('file.upload');
Route::post('file-upload', [FileController::class, 'store'])->name('file.upload.store');

//profile
//Route::get('user/profile', [UserController::class, 'show'])->name('profile');
Route::get('user/edit', [UserController::class, 'edit'])->name('profile');
Route::get('user/profile-update', [UserController::class, 'update'])->name('profile.update');

require __DIR__.'/auth.php';
