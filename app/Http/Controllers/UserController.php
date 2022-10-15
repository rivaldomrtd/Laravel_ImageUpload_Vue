<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;
class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }



    public function show(Request $request)
    {
        return Inertia::render('Profile', [
            'user' => $request->user()
        ]);
    }

    public function edit(User $id)
    {
        $user = User::find($id);
        return Inertia::render('Profile', [
            'users' => $user,
        ]);
    }

    public function update(User $user)
    {
        $this->validate(request(), [
            'name' => 'required',
            'username' => 'required'|'alpha_num'|'unique:users,username',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed'
        ]);

        $user->name = request('name');
        $user->email = request('username');
        $user->email = request('email');
        $user->password = bcrypt(request('password'));

        $user->save();
        return back();
    }
}
