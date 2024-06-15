console.log("here");

/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93 */
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
console.log(ages[0] - ages[ages.length - 1]);

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(20);//add to array
console.log(ages[0] - ages[ages.length - 1]);

//Use a loop to iterate through the array and calculate the average age.
var agesSum = 0
for(var i = 0; i < ages.length; i++){//scaling loop
    agesSum = agesSum + ages[i];
}console.log(agesSum / ages.length);

 /*Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
*/
var lettersSum = 0;
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for(var i = 0; i < names.length; i++){
    lettersSum += names[i].length //+= for efficiency
}console.log(lettersSum / names.length);
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
var namesConcat = names[0];
for(var i = 1; i < names.length; i++){
    namesConcat = namesConcat.concat(' ', names[i]);//compounding onto the previous version of namesConcat
}console.log(namesConcat);

//How do you access the last element of any array?
console.log("The last element of an array is accessed as follows: " + names[names.length - 1]);
//How do you access the first element of any array?
console.log("The first element is accessed by doing: " + names[0]);

/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.*/
let nameLengths = [];
nameLengths.length = names.length;//only this many needed
for(var i = 0; i < names.length; i++){ 
    nameLengths[i] = names[i].length;
}console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
var nameLengthsSum = 0;
for(var i = 0; i < names.length; i++){
    nameLengthsSum += nameLengths[i];
}console.log(nameLengthsSum);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatN(word, n){
    var out = word //initialize
    for(var i = 1; i < n; i++){//init was first itteration so start at i = 1
        out = out.concat(word);
    }
    return(out);
}
var word = "Hello";
console.log(concatN(word, 10));

//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
nameConstruct = (first, last) => first.concat(' ', last); //arrow function
console.log(nameConstruct("Ivan", 'Beekley'));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumOver100(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return(sum > 100);
}
const tempArray = [5, 11, 18 , 20, 21, 66]; //over 100
const tempArrayTwo = [1, 4 , 18]; //this one isnt
console.log(sumOver100(tempArray)); //two array to show functionality
console.log(sumOver100(tempArrayTwo));

//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return(sum / arr.length); //formula for average
}
console.log(avArray(tempArray));
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function avCompare(arr1, arr2){
    var sum1 = 0;
    for(var i = 0; i < arr1.length; i++){ //duplicate arrays since they are the same functionality
        sum1 += arr1[i];
    }
    var arr1Average = sum1 / arr1.length;

    var sum2 = 0;
    for(var i = 0; i < arr2.length; i++){
        sum2 += arr2[i];
    }
    var arr2Average = sum2 /arr2.length;
    return(arr1Average > arr2Average);
}
console.log(avCompare(tempArray, tempArrayTwo)); //reusing same arrays of numbers

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true){
        if(moneyInPocket > 10.50){
            return(true);
        }
    }return(false);
}
console.log(willBuyDrink(true, 100)); //three test cases
console.log(willBuyDrink(false, 100));
console.log(willBuyDrink(true, 10));
//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//This function calculates the MPG of a trip using the cars odometer
//The mileage is calculated using the difference of the cars mileage between gas station visits.
//is the tank was full the gas used for the trip the the amount filled up
mpg = (odoPre, odoNow, fillVolume) => (odoNow - odoPre)/fillVolume; //arrow funtion

console.log(mpg(19464, 19592, 10.2));//10.2 gallons used 


