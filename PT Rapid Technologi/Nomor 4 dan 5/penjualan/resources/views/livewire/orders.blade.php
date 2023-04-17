<div class="container mx-auto">
    <h1 class="text-3xl text-blue-600/100 text-center pt-5 font-bold">
        Penjualan
    </h1>
    <div class="flex justify-center pt-5">
        <table class="border-separate border border-blue-600">
            <thead>
              <tr>
                <th class="border border-blue-600 p-5">Costumer_name</th>
                <th class="border border-blue-600 p-5">total_orders</th>
                <th class="border border-blue-600 p-5">total_amount_orders</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($orders as $order)
              <tr>
                {{--  <td class="border border-blue-600 text-center p-2">{{ $order->costumers->age }}</td>  --}}
                <td class="border border-blue-600 text-center p-2">{{ $order->barang }}</td>
                <td class="border border-blue-600 text-center p-2">contoh 2</td>
              </tr>
              @endforeach
            </tbody>
        </table>
    </div>
  </div>