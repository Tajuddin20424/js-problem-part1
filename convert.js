// 12 inch 1 fit


function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

// ignore this one
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch';
    return result;
}

const tajuddinHeight = inchToFeet(75);
// console.log(tajuddinHeight);
const tajuddinHeight2 = inchToFeet2(75);
// console.log(tajuddinHeight2);


function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const result = mileToKilometer(300);
// console.log(result);


function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
    
}
const result2 = kiloMeterToMiles(5000);
console.log(result2);