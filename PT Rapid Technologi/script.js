// Nomor 1

// const number = [1, 2, 3, 4, 5]; // Data Array
// const rotate = 3; // Jumlah Putaran

// Proses perputaran step by step
// function arrayRotation(arr, numberOfShifts) {
//     for (let i = 0; i < numberOfShifts; i++) {
//         arr.unshift(arr.pop());
//         console.log(`step ${i + 1}:`, arr);
//     }
// }

// Menjalankan function arrayRotation untuk melakukan rotasi data array
// sebanyak 3 kali
// console.log(arrayRotation(number, rotate));

// Nomor 2 (Mengubah Angka Array Menjadi Tulisan)

// var s = new Array();
// s[1] = "1";
// s[2] = "2";
// s[3] = "OK";
// s[4] = "YES";
// s[5] = "5";
// s[6] = "OK";
// s[7] = "7";
// s[8] = "YES";
// s[9] = "OK";
// s[10] = "10";
// s[11] = "11";
// s[12] = "OKYES";
// s[13] = "13";
// s[14] = "14";
// s[15] = "OK";
// for (var i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }


// PT Quintal

// Nomor 1 (Menjumlahkan angka pada array)

const arrayInteger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arrayInteger.reduce((angkaArray, value) => {
    return angkaArray + value;
}, 0);

console.log(sum);

// Nomor 2 (Mencari angka yang berada di index array ke berapa)
// const arrayInteger = ['10', '23', '45', '92', '101', '102', '103', '10001'];

// let index;

// for (let idx = 0; idx < arrayInteger.length; idx++) {
//     if (arrayInteger[idx] === '102') {
//         index = idx;
//         break;
//     }
// }

// console.log(index);

// Nomor 3 ( Menjumlahkan Angka Yang Sama )
// var arrayInteger = [5, 100, 12, 4, 5, 2, 12, 13];
// var count = {};

// for (var i = 0; i < arrayInteger.length; i++) {
//     var num = arrayInteger[i];

//     count[num] = count[num] ? count[num] + 1 : 1;
// }

// console.log(count);