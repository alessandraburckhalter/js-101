//Task: Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on: good -> 20%, fair -> 15%, bad -> 10%

let tip = 0;

function tipAmount(billAmount, levelOfService) {
    if (levelOfService === "good") {
        tip = billAmount * .20;
        return tip;
    }
    else if (levelOfService === "fair") {
        tip = billAmount * .15;
        return tip;
    }
    else if (levelOfService === "bad") {
        tip = billAmount * .10;
        return tip;
    }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));

//Task: Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function totalAmount(billAmount, levelOfService) {
    return tipAmount(billAmount, levelOfService) + billAmount;
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

//Task: Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

function splitAmount(billAmount, levelOfService, numberOfPeople) {
    return totalAmount(billAmount, levelOfService) / numberOfPeople;
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));