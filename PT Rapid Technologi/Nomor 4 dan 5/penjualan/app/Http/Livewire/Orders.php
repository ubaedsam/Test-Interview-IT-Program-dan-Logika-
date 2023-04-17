<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Order;

class Orders extends Component
{
    public function render()
    {
        $orders = Order::all();
        return view('livewire.orders',['orders'=>$orders])->layout('layouts.app');
    }
}
