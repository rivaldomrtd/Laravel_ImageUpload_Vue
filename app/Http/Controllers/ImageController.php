<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
class ImageController extends Controller
{

    public function index()
    {
        $image = Image::latest()->paginate(1000);
        return Inertia::render('Image/Index',['images' => $image]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required'],
            'description' => ['required'],
            'file' => ['mimes:jpg,jpeg,png'],
        ]);
        $fileName = time().'.'.$request->file->extension();
        $request->file->move(public_path('uploads'), $fileName);
        Image::create([
            'title' => $request->title,
            'description' => $request->description,
            'file' => $fileName
        ]);
        return Redirect::route('images.index');
    }
    public function create()
    {
        return Inertia::render('Image/Create');
    }

    public function show(Image $image)
    {
        //
    }

    public function edit(Image $image)
    {
        //
    }

    public function update(Request $request, Image $image)
    {
        //
    }

    public function destroy(Image $image)
    {
        $image->delete();
        return Redirect::route('images.index');
    }
}
