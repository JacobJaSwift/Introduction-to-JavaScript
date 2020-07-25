/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;

if (votingAge === 18) {   
    console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let changeThis = 5;

let dependingThis = 6;

if (dependingThis === 6) {
    changeThis = 6;
}

console.log(changeThis);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let yTwoK = "1999";

let yTwoKInt = parseInt(yTwoK);

console.log(yTwoKInt);





//Task d: Write a function to multiply a*b 

function simpleMultiply(a,b) {
    return a * b;
}

console.log(simpleMultiply(1,4));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(a) {
    return a * 7;
}

console.log(dogYears(26));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight, age) {
    if(age >= 1 && weight < 5) {
        return 5 / 100 * weight + "Pounds";
    }else if (age >= 1 && weight < 10) {
        return 4 / 100 * weight + "Pounds";
    }else if (age >= 1 && weight <= 15) {
        return 3 / 100 * weight + "Pounds";
    }else if (age >= 1 && weight <= 15) {
        return 2 / 100 * weight + "Pounds";
    } else if (age < .5) {
        return 10 / 100 * weight + "Pounds";
    } else if (age < .8) {
        return 5 / 100 * weight + "Pounds";
    } else if (age < .12) {
        return 4 / 100 * weight + "Pounds";
    }
}

console.log(dogFeeder(15, 1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperSissors(choice) {
    let player2 = Math.random(3);
    player2 = Math.floor(Math.random() * 4);
    player2Choice = "";
    if(player2 === 1) {
        player2Choice = "rock";
    } else if(player2 === 2) {
        player2Choice = "sissors";
    } else if(player2 === 3) {
        player2Choice = "paper";
    }

    

    if(choice === "paper" && player2Choice === "rock") {
        return "you win";
    } else if (choice === "paper" && player2Choice === "sissors") {
        return "you lose";
    } else if (choice === "rock" && player2Choice === "paper") {
        return "you lose";
    } else if (choice === "rock" && player2Choice === "sissors") {
        return "you win";
    } else if (choice === "sissors" && player2Choice === "paper") {
        return "you win";
    } else if (choice === "sissors" && player2Choice === "rock") {
        return "you lose";
    } else {
        return "draw";
    }
    
}

console.log(rockPaperSissors("paper"));



  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(a) {
    return a/1.609;
}


console.log(kmToMiles(1));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCM(a) {
    return a * 0.0328084;
}




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(a) {
    let counter = 0;
    while (a > counter) {
        counter ++;
        bottlesLeft = a - counter;
        console.log( counter + " bottles of soda " + counter + " bottles of beer take one down pass it around " + bottlesLeft + " bottles of soda on the wall");
    }
}

console.log(annoyingSong(50));




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalculator(mark) {
    if(mark < 60) {
        return "F";
    } else if(mark < 70) {
        return "D";
    } else if(mark < 80) {
        return "C";
    } else if(mark < 90) {
        return "B";
    } else if(mark < 100) {
        return "A";
    }
}

console.log(gradeCalculator(60));
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





