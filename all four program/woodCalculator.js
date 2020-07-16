// calculate the amount of wood to make chair,table & bed.

function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {
    if ((numberOfChair < 0) || (numberOfTable < 0) || (numberOfBed < 0)) {
        return "Number of chair, table or bed can not be negative."
    } else
        return (numberOfChair + (numberOfTable * 3) + (numberOfBed * 5))
}
console.log(woodCalculator(1, -5, 2));
console.log(woodCalculator(14, 5, 12));