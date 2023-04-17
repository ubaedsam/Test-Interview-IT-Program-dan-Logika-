// Perhitungan data deret aritmatika array

var reduceFindMaximum = arr => {
    let newArr = arr.reduce((currentSum, currentNum) => {
        console.log(currentSum);
        return currentSum + currentNum;
    }, 0);
    return newArr;
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9s

// Hasil
// 0
// 5
// 6
// 13
// 19
// 28