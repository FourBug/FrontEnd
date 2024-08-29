/*
Conditional Statements : if, if_else, Nested if_else Done on Day4
Switch Statements:- switch,break,default,case

switch(key){
case 1:
    statements;
    break;
case 2:
    statements;
    break;
.
.
.
case N:
    statements;
    break;
default: 
    statements;
}

Example:--
var a = 6;
switch(a){
    case 1: 
        console.log("Sunday!");
        break;
    case 2: 
        console.log("Monday!");
        break;
    case 3: 
        console.log("Tuesday!");
        break;
    case 4: 
        console.log("Wednesday!");
        break;
    case 5: 
        console.log("Thrusday!");
        break;
    case 6: 
        console.log("Friday!");
        break;
    case 7: 
        console.log("Saturday!");
        break;
    default:
        console.log("No More Days Available!");
}

One More Example:--

var a = 10;
var b = 20;
var c;
var operator = '%';
switch(operator){
    case '-':
        c=a-b;
        break;
    case '+':
        c=a+b;
        break;
    case '*':
        c=a*b;
        break;
    case '/':
        c=a/b;
        break;
    default:
        c="Wrong Operator!";
}
console.log(c);

*/
/*
Looping:-   for, while, do_while
for
    for(intitialization;condition;increment/decrement)
        {
        statements;
    }
        Example:-
            for(let a = 1; a <= 10; a=a+1)
                console.log(a);
        One More Example:--
            var num = 17;
            for(let a = 1; a <= 10; a=a+1)
                console.log(a*num);

while
    intialization;
    while(condition)
    {
        statements;
        increment/decrement;
    }
    Example:--
        var a = 1;
        while(a<=10){
            console.log(a);
            a=a+1;
        }
    One More Example:--
        var num = 5;
        var a = 1;
        while(a<=10){
            console.log(a*num);
            a=a+1;
        }

do_while
    intialization
    do{
        statements;
        increment/decrement;
    }
    while(condition);
    Example:--\
    var a = 1;
    do{
        console.log(a);
        a=a+1;
    }while(a<=10);

One More Example:--
var num = 6;
var a = 1;
do{
    console.log(a*num);
    a=a+1;
}while(a<=10);

do_while will work for atleast one if the condition is completely wrong
var a = 1;
do{
    console.log("Hello");
    a=a+1;
}while(a>10);
    Output: Hello
*/

/*
WAP to print counting from 1 to 100;
WAP to print all even numbers form 1 to 100.
WAP to print table of a number.
    Syntax: 5 * 1 = 5
            5 * 2 = 10
WAP to print all odd numbers from 1 to 100.
*/