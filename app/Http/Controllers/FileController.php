<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use App\Models\File;

class FileController extends Controller

{

    public function index()
    {
        $files = File::latest()->get();
        return Inertia::render('FileUpload', compact('files'));
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
        File::create([
            'title' => $request->title,
            'description' => $request->description,
            'name' => $fileName
        ]);
        return redirect()->route('file.upload');
    }
}
