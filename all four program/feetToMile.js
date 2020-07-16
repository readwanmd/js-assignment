//program for calculate "feet to mile"

function feetToMile(feet) {
    if (feet <= 0) {
        return "Length can not be negative."
    } else
        return feet / 5280; // 1 mile = 5280feet
}
console.log(feetToMile(-10));
console.log(feetToMile(101010).toFixed(2));