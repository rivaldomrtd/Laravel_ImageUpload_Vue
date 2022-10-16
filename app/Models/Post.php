<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Post extends Model
{

    use HasFactory;
    protected $fillable = [
        'title',
        'description'
    ];
    public function getCreatedAtAttribute($date)
    {
    return Carbon::parse($date)->format('d-M-Y H:i');
    }


}
