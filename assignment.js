//program for calculate "feet to mile"

console.log("feet to mile calculation");

function feetToMile(feet) {
    if (feet <= 0) {
        return "Length can not be negative."
    } else
        return feet / 5280; // 1 mile = 5280feet
}
console.log(feetToMile(-10));
console.log(feetToMile(101010).toFixed(2));


// calculate the amount of wood to make chair,table & bed.
// we have given,
//         for chair amount of wood needed: 1 unit
//         for table amount of wood needed: 3 unit
//         for bed amount of wood needed: 5 unit

console.log("Wood requirment calculation");

function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {
    if ((numberOfChair < 0) || (numberOfTable < 0) || (numberOfBed < 0)) {
        return "Number of chair, table or bed can not be negative."
    } else
        return (numberOfChair + (numberOfTable * 3) + (numberOfBed * 5))
}
console.log(woodCalculator(1, -5, 2));
console.log(woodCalculator(14, 5, 12));


//calculation of bricks
// we have given,
//         for first 10 floor, amount of bricks needed: 15*1000 unit per floor
//         for 10 to 20 floor, amount of bricks needed: 12*1000 unit per floor
//         for more than 20 floor amount of bricks needed: 10*1000 unit per floor

console.log("Calculation of bricks");

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


// tiny friend name in array
console.log("tiny friend name in array")

function tinyFriend(friends) {
    let shortLength = Infinity;
    let shortest = "";

    if (friends.length > 0) {
        for (let i = 0; i < friends.length; i++) {
            if (typeof friends[i] === 'string' && friends[i].length < shortLength) {
                shortest = friends[i];
                shortLength = friends[i].length;
            }
        }
    }
    return shortest;
}
var friendName = ["salman", "sayam", "fahim", "rana", "shafe", "rajib", "enu", "riad"];

var tinyFriendName = tinyFriend(friendName);
console.log(tinyFriendName);