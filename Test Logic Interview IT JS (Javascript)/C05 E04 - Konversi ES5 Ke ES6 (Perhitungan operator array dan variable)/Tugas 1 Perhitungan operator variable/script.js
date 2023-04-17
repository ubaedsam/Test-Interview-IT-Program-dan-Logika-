// Perhitungan operator variable

var phi = 3.14;
var power = 2;
var radius = 0;
var calculateArea = function(radius) {
    return phi * Math.pow(radius, power);
}

radius = 21;
var area21 = calculateArea(radius);

radius = 7;
var area7 = calculateArea(radius);

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// Hasil
// area with 21 radius: 1384.74, and area with 7 radius: 153.86