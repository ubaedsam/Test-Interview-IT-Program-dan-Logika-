// Penggunaan If Dan Else (Pengecualian)

//Contoh input 1
// var nama = 'Mikael';
// var peran = '';

//Contoh input 2
// var nama = 'Nina';
// var peran = 'Ksatria';

//Contoh input 3
// var nama = 'Danu';
// var peran = 'Tabib';

//Contoh input 4
var nama = 'Zero';
var peran = 'Penyihir';

if (peran === 'Ksatria') {
    var tugas = "kamu dapat menyerang dengan senjatamu!";
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", " + tugas);
} else if (peran === 'Tabib') {
    var tugas = "kamu akan membantu temanmu yang terluka."
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", " + tugas);
} else if (peran === 'Penyihir') {
    var tugas = "ciptakan keajaiban yang membantu kemenanganmu!";
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo " + peran + " " + nama + ", " + tugas);
} else {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}