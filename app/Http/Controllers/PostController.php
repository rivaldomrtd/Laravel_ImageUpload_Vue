<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
class PostController extends Controller
{

    public function index()
    {
        $posts = Post::latest()->paginate(1000);
        return Inertia::render('Post/Index', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('Post/Create');
    }

    public function store(Request $request)
    {
        Post::create(
            Request::validate([
                'title' => ['required', 'max:90'],
                'description' => ['required'],
            ])
        );
        return Redirect::route('posts.index');
    }


    public function edit(Post $post)
    {
        return Inertia::render('Post/Edit', [
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description
            ]
        ]);
    }


    public function update(Request $request, Post $post)
    {
        $data = Request::validate([
            'title' => ['required', 'max:90'],
            'description' => ['required'],
        ]);
        $post->update($data);
        return Redirect::route('posts.index');
    }


    public function destroy(Post $post)
    {
        $post->delete();

        return Redirect::route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {

    }
}
