// Untuk memisahkan bilangan genap dan ganjil

let nilai_ganjil = [];
let nilai_genap = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        nilai_genap = [...nilai_genap, i];
    } else {
        nilai_ganjil = [...nilai_ganjil, i];
    }
}

// console.log({ nilai_genap, nilai_ganjil });

// Untuk mencari bilangan prima

nilai_prima = [];

for (let i = 1; i <= 100; i++) {
    let bilangan = 0;
    for (let a = 1; a <= i; a++) {
        if (i % a == 0) {
            bilangan = bilangan + 1
        }
    }

    if (bilangan == 2) {
        nilai_prima = [...nilai_prima, i];
    }
}

// console.log(nilai_prima);

// Untuk mencari nilai angka fibonnaci

let nilai_fibonacci = [];
let nilai1 = 0;
let nilai2 = 1;

for (let i = 1; i <= 15; i++) {
    if (i === 0 || i === 1) {
        nilai_fibonacci = [...nilai_fibonacci, i];
    } else {
        let total = nilai1 + nilai2;
        nilai_fibonacci = [...nilai_fibonacci, total];
        nilai1 = nilai2;
        nilai2 = total;
    }
}

// console.log(nilai_fibonacci);

// Menghitung total tabungan selama 1 tahun

let uangUbaed = 750000;
let hasil = "";

for (let i = 1; i <= 12; i++) {
    let bunga = 0;
    let sisih = 0;
    if (i > 1) {
        bunga = uangUbaed * 6 / 100;
        if (uangUbaed + bunga > 800000) {
            sisih = 800000 * 3 / 100;
        } else {
            sisih = (uangUbaed + bunga) * 3 / 100;
        }
    }

    hasil += `Tabungan Awal : ${uangUbaed.toFixed(2)} \n Bunga : ${bunga.toFixed(2)} \n Sisih : ${sisih.toFixed(2)} \n Uang Bulan ${i} : ${((uangUbaed+bunga)-sisih).toFixed(2)} \n--------\n`;
    uangUbaed = (uangUbaed + bunga) - sisih;
}

// console.log(hasil);

// Untuk menampilkan angka secara tunggal dan total angka setelah di tunggalkan
// Untuk menampilkan total dari masing-masing angka

const nilaiArray = [1, 4, 5, 3, 2, 5, 3, 4, 8, 5, 4, 3, 6, 0, 4, 3, 2, 1, 5, 9, 9, 4, 3, 1, 3, 0, 2, 2, 4, 6, 2, 4, 7, 4];
let nilaiArrayHasil = []; // Hasilnya dalam bentuk array
let nilaiArrayCount = ""; // Hasilnya dalam bentuk angka/string

// Untuk menampilkan angka secara tunggal dan total angka setelah di tunggalkan
// for (let i = 0; i < nilaiArray.length; i++) {
//     let ketemu = false;

//     for (let a = 0; a < nilaiArrayHasil.length; a++) {
//         if (nilaiArray[i] == nilaiArrayHasil[a]) {
//             ketemu = true;
//         }
//     }

//     if (!ketemu) {
//         nilaiArrayHasil = [...nilaiArrayHasil, nilaiArray[i]];
//     }
// }

// Untuk menampilkan total dari masing-masing angka
for (let i = 0; i < nilaiArray.length; i++) {
    let ketemu = false;

    for (let a = 0; a < nilaiArrayHasil.length; a++) {
        if (nilaiArray[i] == nilaiArrayHasil[a]) {
            ketemu = true;
        }
    }

    if (!ketemu) {
        nilaiArrayHasil = [...nilaiArrayHasil, nilaiArray[i]];

        let totalKetemu = 0;
        for (let e = 0; e < nilaiArray.length; e++) {
            if (nilaiArray[i] == nilaiArray[e]) {
                totalKetemu = totalKetemu + 1;
            }
        }

        nilaiArrayCount += `Nilai ${nilaiArray[i]} sebanyak ${totalKetemu}\n`;
    }
}

console.log(nilaiArrayHasil); // Untuk menampilkan angka secara tunggal dan total angka setelah di tunggalkan
console.log(nilaiArrayHasil.length); // untuk menghitung panjang nilai dari nilai array
console.log(nilaiArrayCount); // Untuk menampilkan total dari masing-masing angka