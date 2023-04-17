// Function menentukan apakah nilai array bilangan prima atau tidak

function angkaPrima(angka) {
    if (angka > 1) {
        for (let i = 2; i < angka; i++) {
            if (angka % i == 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false