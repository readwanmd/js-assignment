//calculation of bricks

function brickCalculator(numberOfFloor) {
    var firstTenFloor = 10; //x
    var tenToTwentyFloor; //y
    var moreThenTwentyFloor; //z
    if (numberOfFloor <= 0) {
        return "Number of floor must have be greater than zero."
    } else {
        if (numberOfFloor <= 10) {
            firstTenFloor = numberOfFloor;
            return firstTenFloor * 15 * 1000;
        } else if ((numberOfFloor > 10) && (numberOfFloor <= 20)) {
            tenToTwentyFloor = numberOfFloor - firstTenFloor;
            return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000));
        } else if (numberOfFloor > 20) {
            tenToTwentyFloor = 10;
            moreThenTwentyFloor = numberOfFloor - 20;
            return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000) + (moreThenTwentyFloor * 10 * 1000));
        }
    }
}
console.log(brickCalculator(-2));
console.log(brickCalculator(5));
console.log(brickCalculator(15));
console.log(brickCalculator(25));