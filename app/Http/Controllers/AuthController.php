<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return response([
                "user" => Auth::user(),
            ]);
        }

        return response([
            'error' => 'The provided credentials do not match our records.',
        ], 401);
    }

    public function logout(Request $request){
        Auth::logout();
 
        $request->session()->invalidate();
 
        $request->session()->regenerateToken();
    }

    public function register(Request $request){
        $credentials = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::create([
            "name" => $credentials['name'],
            "email" => $credentials['email'],
            "password" => Hash::make($credentials['password']),
        ]);

        Auth::login($user);

        $request->session()->regenerate();
 
        return response([
            "user" => Auth::user(),
        ]);
    }
}
