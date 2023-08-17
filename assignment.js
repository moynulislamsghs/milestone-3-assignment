// https://github.com/moynulislamsghs/milestone-3-assignment

// kilometer to meter starts here
function kilometerToMeter(km) {
    let meter;
    if(km < 0){
        return "sorry, you entered a negative number.";
    }
    meter = km * 1000;
    return meter;
}
console.log(kilometerToMeter(11.5));
// end of kilometer to meter 

// budget calculator starts here
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){
    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0){
        return "Sorry, you entered a negative number.";
    }
    let totalBudget = (numberOfWatch * 50) + (numberOfPhone * 100) + (numberOfLaptop * 500);
    return totalBudget;
}
console.log(budgetCalculator(4,2,1));
// end of budget calculator

// hotel cost starts here
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
console.log(hotelCost(30));
// end of hotel cost

// mega friend starts here
function megaFriend(friends){
    let i,temp=0, biggestFriend;
    if(Array.isArray(friends) == true){
        for(i=0;i<friends.length;i++){
            if(friends[i].length > temp){
                temp = friends[i].length;
                biggestFriend = friends[i];
            }
        }
        return biggestFriend;
    }
    else{
        return "Please enter an array.";
    }
}
console.log(megaFriend(["ashik", "hrioy", "mustafizur", "anik"]));
// end of mega friend