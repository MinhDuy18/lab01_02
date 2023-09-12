//BUỔI 01, 02: -JAVASCRIPT FUNDAMENTALS
console.log("JavaScript Fundamentals – Part 1");
//Coding Challenge #1
//1. Store Mark's and John's mass and height in variables
console.log("Coding Challenge #1");
console.log("Test data 1");
//test 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
//2. Calculate both their BMIs using the formula (you can even implement both versions)
let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
console.log("Test data 2");
//test 2
let massMark2 = 78;
let heightMark2 = 1.69;
let massJohn2 = 92;
let heightJohn2 = 1.95;
//2. Calculate both their BMIs using the formula (you can even implement both versions)
let BMIMark2 = massMark2 / heightMark2 ** 2;
let BMIJohn2 = massJohn2 / heightJohn2 ** 2;
//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(BMIMark2, BMIJohn2, markHigherBMI2);

//Coding Challenge #2
console.log("Coding Challenge #2");
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else{
    console.log(`Jhon's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

//Coding Challenge #3
console.log("challenge #3");
console.log("test data 1");
let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;

if (averageDolphins > averageKoalas) {
    console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
}else if(averageDolphins == averageKoalas){
    console.log(`Draw (${averageDolphins} vs. ${averageKoalas})`);
}
else{
    console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
}
console.log("Bonus 1")
//data bonus 1
let averageDolphins1 = (97 + 112 + 101) / 3;
let averageKoalas1 = (109 + 95 + 123) / 3;
if(averageDolphins1 > averageKoalas1 && averageDolphins1 >= 100){
    console.log(`Dolphins win (${averageDolphins1}`);
}else if(averageDolphins1 < averageKoalas1 && averageKoalas1 >= 100){
    console.log(`Koalas win (${averageKoalas1})`);
}
console.log("Bonus 2")
let averageDolphins2 = (97 + 112 + 101) / 3;
let averageKoalas2 = (109 + 95 + 106) / 3;
if(averageDolphins2 == averageKoalas2 && averageDolphins2 >= 100){
    console.log(`Draw (${averageDolphins2})`);
}

//Coding Challenge #4

console.log("Coding Challenge #4");
console.log("Bill 275");
let bill = 275;
let tip = 0;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

console.log("Bill 40");
let bill1 = 40;
let tip1 = 0;
tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);

console.log("Bill 430");
let bill2 = 430;
let tip2 = 0;
tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);

//Par2
console.log("JavaScript Fundamentals – Part 2")
//Coding Challenge #1
console.log("Coding Challenge #1")
/*
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/
console.log("Test data 1");
//Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;
//Use the function to calculate the average for both teams
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
//Create a function 'checkWinner' that takes the average score of each team
//as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
//to the console, together with the victory points, according to the rule above.
const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log("No team wins...");
    }
}
console.log("Test data 2");
let scoreDolphins1 = calcAverage(85, 54, 41);
let scoreKoalas1 = calcAverage(23, 34, 27);
console.log("Check Winner data 1")
checkWinner(scoreDolphins, scoreKoalas);
console.log("Check Winner data 2")
checkWinner(scoreDolphins1, scoreKoalas1);

//Coding Challenge #2
console.log("Coding Challenge #2");
/*
    Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

//1
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log("Test function calcTip");
console.log(calcTip(100));

//2
let bills = [125, 555, 44];
console.log("Test array bills");
console.log(bills);

//3
    let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    console.log(tips);
//4
    let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    console.log(total);

//Coding Challenge #3
console.log("Coding Challenge #3");
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
//1
let Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
}
let John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}

//2
Mark.calcBMI = function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
}

John.calcBMI = function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
}

//3
if (Mark.calcBMI() > John.calcBMI()) {
    console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})!`);
}else{
    console.log(`Jhon's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})!`);
}

//Coding Challenge #4
console.log("Coding Challenge #4");
//Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
//1
let bills_4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills_4)
//2
let tips_4 = [];
let totals_4 = [];
//3
for (let i = 0; i < bills_4.length; i++) {
    tips_4.push(calcTip(bills_4[i]));
    totals_4.push(bills_4[i] + tips_4[i]);
}

console.log(tips_4);
console.log(totals_4);

//Coding Challenge #5
/*
Coding Challenge #9
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/
console.log("Coding Challenge #5");
//1
const printForecast = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}oC in ${i + 1} days `;
    }
    console.log(str);
}
//2
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
    





 




















