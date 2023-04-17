<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Costumer extends Model
{
    use HasFactory;

    protected $table = "costumers"; // menghubungkan ke dalam tabel employee

    public function orders()
    {
        $this->hasMany(Order::class);
    }
}
