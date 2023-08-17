
// kilometer to meter starts
function kilometerToMeter(km) {
    let result;
    if(km < 0){
        return "sorry, you entered a negative number.";
    }
    result = km * 1000;
    return result;
}
console.log(kilometerToMeter(11.5));
// end of kilometer to meter 

// budget calculator starts
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){
    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0){
        return "Sorry, you entered a negative number.";
    }
    let result = (numberOfWatch * 50) + (numberOfPhone * 100) + (numberOfLaptop * 500);
    return result;
}
console.log(budgetCalculator(4,2,1));
// end of budget calculator

// hotel cost starts
function hotelCost(numberOfDays){
    let totalCost, firstTenDays, secondTenDays, remainingDays;
    if(numberOfDays > 20){
        firstTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        remainingDays = (numberOfDays-20) * 50;
        totalCost = firstTenDays + secondTenDays + remainingDays;
        return totalCost;
    }
    else if(numberOfDays <= 20 && numberOfDays > 10){
        firstTenDays = 10 * 100;
        remainingDays = (numberOfDays - 10) * 80;
        totalCost = firstTenDays + remainingDays;
        return totalCost;
    }
    else if(numberOfDays <= 10 && numberOfDays > 0){
        totalCost = numberOfDays * 100;
        return totalCost; 
    }
    else{
        return "Sorry, you entered a negative number.";
    }
}
console.log(hotelCost(10));
// end of hotel cost