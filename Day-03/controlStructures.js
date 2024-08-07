//Activity-1 [If-else statements]
//Task-1 

let num=-5;
if(num>0){
    console.log(num + " Is postive Number");
    
}else if(num<0){
    console.log(num + " Is Negative Number");

}else{
    console.log("The Number is Zero");

}

//Task-2

let Age=1;
if(Age>=18){
    console.log(Age + " Is Eligible for Vote");
    
}else{
    console.log(Age + " Is  NOT Eligible for Vote");

}

//Activity-2 [Nested if else statements]
//Task-3

let Num1=100;
let Num2=200;
let Num3=30;
if(Num1>Num2){
    if(Num1>Num3){
        console.log(Num1 + " is the largest number.");
        
    }else {
        console.log(Num3 +" is the largest number.");
        
    }
}else if(Num2>Num3){
    console.log(Num2+ " is the largest number.");
}else{
    console.log(Num3+ " is the largest number.");
    
}

//Activity-3 [Switch case statements]
//Task-4

let dayNumber=5;
switch(dayNumber){
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;
    
    case 5:
        console.log("Thursday");
        break;
    
    case 6:
        console.log("Friday");
        break;
    
    case 7:
        console.log("Saturday");
        break;
}

// Task 5

let Grade="A";

switch(Grade){
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Very Good");
        break;

    case "C":
        console.log("Good");
        break;

    case "D":
        console.log("Average");
        break;
    
    case "E":
        console.log("Poor");
        break;
    
    case "F":
        console.log("Fail");
        break;
    
}

//Activity-4 [Ternary operator]
//Task-6

let abc = 4
console.log(abc%2==0?"Even Number":"Odd Number");

//Activity-5 [Combining conditions]
//Task-7

let year=2024;

if((year%4==0 && year%100!=0) ||year%400==0 ){
    console.log("Leap Year")
}
else{
    console.log(" Not Leap Year")

}