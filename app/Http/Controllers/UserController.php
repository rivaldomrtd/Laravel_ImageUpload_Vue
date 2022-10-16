<?php

namespace App\Http\Controllers;
use Illuminate\Http\Client\Request;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
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

    public function edit(User $user)
    {
        return Inertia::render('Profile', [
            'user' => [
                'id' => $user->id,
                'name' => $user->title,
                'username' => $user->description,
                'email' => $user->description
            ]
        ]);
    }

    public function update(User $user)
    {

        $data = Request::validate([
            'name' => 'required',
            'username' => 'required'|'alpha_num'|'unique:users,username',
            'email' => 'required|email|unique:users'
        ]);
        $data->update($data);
        return Redirect::route('users.index');
    }
}
