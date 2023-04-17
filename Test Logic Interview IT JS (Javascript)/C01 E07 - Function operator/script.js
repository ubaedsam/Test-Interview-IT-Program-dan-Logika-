// Function Operator and Print Data

// Function Operator
function calculateMultiply(num1_param, num2_param) {
    return num1_param * num2_param;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// Function Print Data
function processSentence(name_param, age_param, address_param, hobby_param) {
    console.log("Nama saya " + name_param + ", umur saya " + age_param + ", alamat saya di " + address_param + ", dan saya punya hobby yaitu " + hobby_param);
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);