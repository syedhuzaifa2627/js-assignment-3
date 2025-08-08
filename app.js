// Chapter 9

// Question 1

//var city = prompt("Enter your city name:")
//if (city === "Karachi") {
//    alert("Welcome to city of lights")
//}

// Question 2

//var gender = prompt("Enter your gender:")
//var message = "";

//if (gender === "male") {
//    message = "Good Morning Sir"
//}
//if (gender === "female") {
//    message = "Good Morning Ma’am"
//}

//alert(message);

// Question 3

//let color = prompt("Enter the color of the traffic signal:");
//let rules = ""

//if (color === "red") {
//    rules = "Must Stop"
//}
//if (color === "yellow") {
//    rules = "Ready to move"
//}
//if (color === "green") {
//    rules = "Move now"
//}

//document.writeln("<table border='1' cellpadding='5'>")
//document.writeln("<tr><th>Signal Color</th><th>Message</th></tr>")
//document.writeln("<tr><td>" + color + "</td><td>" + rules + "</td></tr>")
//document.writeln("</table>")

// Question 4

//var fuel = prompt("Enter remaining fuel in your car:")

//if (fuel < 0.25) {
//    alert("Please refill the fuel in your car")
//}

// Question 5
//a

//var a = 4
//if(++a === 5){
//    alert("The given condition of variable a is true.")
//}

//b

//var b = 82
//if(b++ === 83){
//    alert("The given condition of variable b is true.")
//}

//c

// var c = 12
// if (c++ === 13){
// alert("condition 1 is true")
// }
// if (c === 13){
// alert("condition 2 is true")
// }
// if (++c < 14){
// alert("condition 3 is true")
// }
// if(c === 14){
// alert("condition 4 is true")
// }

//d

//var materialCost = 20000
//var laborCost = 2000
//var totalCost = materialCost + laborCost

//if (totalCost === laborCost + materialCost){
//alert("The cost equals")
//}

//e

//if (true){
//alert("True")
//}
//if (false){
//alert("False")
//}

//f

//if("car" < "cat"){
//alert("car is smaller than cat");
//}

// Question 6

//var marksForSub1 = Number(prompt("Enter your marks in Subject 1:"))
//var marksForSub2 = Number(prompt("Enter your marks in Subject 2:"))
//var marksForSub3 = Number(prompt("Enter your marks in Subject 3:"))

//const totalMarks =Number(prompt("Enter Total Marks"))

//let obtainedMarks = marksForSub1 + marksForSub2 + marksForSub3
//let percentage = ( obtainedMarks / totalMarks ) *100

//let grade = ""
//let remarks = ""

//if(percentage > 80){
   // grade = "A-one"
   // remarks = "Excellent"
//}
//else if(percentage > 70){
    //grade ="A"
    //remarks = "Good"
//}
//else if(percentage > 60){
    //grade = "B"
    //remarks = "You need to improve"
//}
// else if(percentage < 50){
   // grade = "Fail"
   // remarks = "Sorry"
//}

//document.writeln("<h3>Marks Sheet</h3>")
//document.writeln("Total Marks: " + totalMarks + "<br>")
//document.writeln("Marks Obtained: " + obtainedMarks + "<br>")
//document.writeln("Percentage: " + percentage + "%<br>")
//document.writeln("Grade: " + grade + "<br>")
//document.writeln("Remarks: " + remarks + "<br>")

// Question 7

//var secretNumber = 8

//var userMindGuess = prompt("Guess a number between 1 to 10")

//if(userMindGuess == secretNumber){
    //alert("Bingo! Accurate Answer")
//}
//if(userMindGuess + 1){
    //alert("Close enough to the correct answer")
//}

// Question 8

//var number = prompt("Enter a number:")

//if (number % 3 == 0) {
   // alert("The number is divisible by 3")
//}
//else(
    //alert("The number is not divisible by 3")
//)

// Question 9

//const newNumber = prompt("Enter a number:")

//if (newNumber % 2 == 0) {
//    alert("The number is even")
//}
//if (newNumber % 2 != 0) {
//    alert("The number is odd")
//}

// Question 10

//let temperature = prompt("Enter your outside temperature")

//if(temperature > 40){
    //alert("It is too hot outside.")
//}
//else if(temperature > 30){
    //alert("The Weather today is Normal.")
//}
//else if(temperature > 20){
    //alert("Today’s Weather is cool.")
//}
//else if(temperature > 10){
    //alert("OMG! Today’s weather is so Cool.")
//}

// Question 11

let firstNumber = Number(prompt("Enter First Number"))
let secondNumber = Number(prompt("Enter Second Number"))
let operation = prompt("Enter a mathematical operation (+, -, *, /, %)")
let result = ""

if(operation === "+"){
    result = firstNumber + secondNumber
}
else if(operation === "-"){
    result = firstNumber - secondNumber
}
else if(operation === "*"){
    result = firstNumber * secondNumber
}
else if(operation === "/"){
    result = firstNumber / secondNumber
}
else if(operation === "%"){
    result = firstNumber % secondNumber
}
alert("Result:" + " " +result)