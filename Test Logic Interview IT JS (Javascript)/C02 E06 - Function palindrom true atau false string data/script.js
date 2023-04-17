// Functtion palindrom true atau false

function palindrome(kata) {
    let len = kata.length;
    let leftSide = kata.slice(0, Math.floor(len / 2));
    let rightSide = kata.slice(Math.ceil(len / 2), len).split('').reverse().join('');

    if (leftSide == rightSide) return true;
    return false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false