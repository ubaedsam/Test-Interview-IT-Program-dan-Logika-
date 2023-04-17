<div class="container mx-auto">
    <h1 class="text-3xl text-blue-600/100 text-center pt-5 font-bold">
        Costumers
    </h1>
    <div class="flex justify-center pt-5">
        <table class="border-separate border border-blue-600">
            <thead>
              <tr>
                <th class="border border-blue-600 p-5">Costumer_name</th>
                <th class="border border-blue-600 p-5">Age</th>
                <th class="border border-blue-600 p-5">Country_name</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($costumers as $costumer)
              <tr>
                <td class="border border-blue-600 text-center p-2">{{ $costumer->first_name }} {{ $costumer->last_name }}</td>
                <td class="border border-blue-600 text-center p-2">{{ $costumer->age }}</td>
                <td class="border border-blue-600 text-center p-2">
                    @if ($costumer->country == 'USA')
                    United Stated
                    @elseif($costumer->country == 'UK')
                    United Kingdom
                    @elseif($costumer->country == 'UAE')
                    United Arab Emirates
                    @endif
                </td>
              </tr>
              @endforeach
            </tbody>
        </table>
    </div>
  </div>