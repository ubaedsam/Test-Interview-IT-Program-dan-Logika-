<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = "orders"; // menghubungkan ke dalam tabel jabatan

    public function costumers()
    {
        return $this->belongsTo(Costumer::class);
    }
}
