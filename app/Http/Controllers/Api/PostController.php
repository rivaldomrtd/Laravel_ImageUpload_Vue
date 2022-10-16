<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->paginate(1000);
        return new ApiResource(true, 'List Artikel', $posts);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'max:90'],
            'description' => ['required'],
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $post=Post::create([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return new ApiResource(true, 'Artikel Berhasil Ditambahkan!', $post);
    }

    public function update(Request $request, Post $post)
    {


        $validator = Validator::make($request->all(), [
            'title' => ['required', 'max:90'],
            'description' => ['required'],
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $post->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return new ApiResource(true, 'Artikel Berhasil Diubah!', $post);
    }


    public function destroy(Post $post)
    {
        $post->delete();
        return new ApiResource(true, 'Artikel Berhasil Dihapus!', null);
    }

    public function show(Post $post)
    {
        return new ApiResource(true, 'Artikel Ditemukan!', $post);
    }
}
