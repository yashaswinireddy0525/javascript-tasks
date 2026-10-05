//_________________if Statement______________________
// 1.Check Positive Number
let num=15;
if(num>0){
    console.log(num,"is positive Number");
}

// 2.Check Even Number
let s=16;
if (s%2==0){
    console.log(s,"is a even number");
}

// 3.Check Voting Eligibility
let age=22;
if (age>=18){
    console.log("Eligible to Vote");
}

// 4.Check Passing Marks
let marks=65;
if(marks>=40){
    console.log("Passed");
}

// 5.Check Divisibility by 5 and 11
let n1=55;
if(n1%5==0 && n1%11==0){
    console.log(n1,"is divisible by both 5 and 11");
}

// 6.Check Valid Triangle
let a=60;
let b=60;
let c=60;
if (a+b+c==180){
    console.log("valid triangle");
}


// ____________________if else_______________________
// 1.Even or Odd
let n=17
if (n%2==0){
    console.log(n,"is even");
}else{
    console.log(n,"is odd");
}

// 2.Check Bus Pass
let hasPass=true;
if (hasPass==true){
    console.log("You can enter the bus");
}else{
    console.log("Bus pass required");
}

// 3.Check Internet Connection
let connected=false;
if (connected==true){
    console.log("Internet is Connected");
}else{
    console.log("No Internet Connection");
}

// 4.Check Movie Ticket Availability
let tickets=5;
if (tickets>0){
    console.log("Tickets are available");
}
else{
    console.log("Tickets are sold out");
}

// 5.Check Bank Balance
let balance=5000;
let withdrawal=3000;
if(withdrawal<=balance){
    console.log("Withdrawal successful");
}else{
    console.log("Insufficient balance");
}

// 6.Check Exam Eligibility
let attendance=83;
let assignments=8;
if(attendance>=75 && assignments>=5){
    console.log("Eligible for exam");
}else{
    console.log("Not eligible for exam");
}


// ______________if else if________________________
// 1.Traffic Signal
let signal="yellow";
if(signal=="red"){
    console.log("Stop");
}else if(signal=="yellow"){
    console.log("get ready");
}else if(signal=="green"){
    console.log("Go");
}else{
    console.log("Invalid signal");
}

// 2.Time of the Day
let hour=15;
if(hour<12){
    console.log("Good Morning");
}else if(hour<17){
    console.log("Good Afternoon");
}else if(hour<21){
    console.log("Good Evening");
}else{
    console.log("Good Night");
}


// 3. Mobile Battery Status
let battery=45;
if(battery>=80){
    console.log("Battery is High");
}else if(battery>=50){
    console.log("Battery is Medium");
}else if(battery>=20){
    console.log("Battery is Low");
}else{
    console.log("Connect charger immediately")
}

// 4.Delivery Charge
let distance=18;
if (distance<=5){
    console.log("Delivery charge=20rs");
}else if(distance<=10){
    console.log("Delivery charge=40rs");
}else if(distance<=20){
    console.log("Delivery charge=60rs")
}else{
    console.log("Delivery charge=80rs")
}

// 5. Internet Data Usage
let data=7;
if (data<=2){
    console.log("very low usage");
}else if(data<=5){
    console.log("Normal Usage");
}else if(data<=10){
    console.log("High Usage");
}else{
    console.log("very high usage");
}

//6. Hotel Room Category
let budget=6500;
if(budget<2000){
    console.log("standard Room");
}else if(budget<5000){
    console.log("Deluxe Room");
}else if(budget<8000){
    console.log("Premium Room");
}else{
    console.log("Luxury Suite");
}