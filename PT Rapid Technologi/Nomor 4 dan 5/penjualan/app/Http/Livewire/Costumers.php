<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Costumer;

class Costumers extends Component
{
    public function render()
    {
        $costumers = Costumer::where('age','<',32)->orderBy('age','DESC')->get();
        return view('livewire.costumers',['costumers'=>$costumers])->layout('layouts.app');
    }
}
