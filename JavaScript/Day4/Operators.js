/*
JavaScript Operators
1- AArithmetic Operators
+ - * / %
var a = 10;
var b = 4;
a+b : 14
a-b : 6
a*b : 40
a/b : 2.5
parseInt(a/b) : 2
a%b : 2 (Remainder)

2- Relational Operators (Boolean Answer)
< > <= >= == != ===
var a = 10;
var b = 4;
a<b : false
a>b : true
a<=b : false
a>=b : true
a==b : false
a!=b : true

var a = 10;
var b = '10';
a == b : true (It will match only value)
a === b : false (It will match value and data type)

3- Conditional Operator
Syntax : (condition) ? TrueStatement : FalseStatement;
var a = 10>5 ? 100 : 200;
console.log(a);
            Output : 100
var a = 10<5 ? 100 : 200;
console.log(a);
            Output : 200
var a = 100;
var b = 20;
a > b ? console.log(a) : console.log(b);

4- Logical Operator 
 && (AND) , || (OR) , ! (NOT) 
    (Condition) && (Condition) 
        If both conditions are true, than Output:true otherwise:false
        console.log( 1<5 || 10>5 );     true
    (Condition) || (Condition) 
        If both conditions are false, than Output:false otherwise:true
        console.log( 1>5 || 10<5 );   false
    ! (Condition) 
        It generate reverse answer, if condition is true answer will be false
        console.log( !10>5 );    false
    
    Examples:-
        if both side are values :-
In all Programming Languages all the values are true beside zero.
    (Zero is false)

    console.log( 10 && 5 );
        Output:- 5 (always last value will be answer, if there is no 0)
    console.log( 0 && 5 );
            Output : 0    (0 in every case if any value is 0)
    
    console.log( 10 ||  5 );
        Output: 10
        (always first value will be answer, if there is no 0)
    console.log( 0 || 5 );
        Output: 5
        (answer will be another value besides 0)

    Single sign operator
        console.log(7 | 8 ); Output: 15
        console.log( 5 & 9 ); Output: 1

5- Assignment Operator =
    a = 10;  "a is assign to 10"
    a+=3;       =>   a = a+3;
    a-=5;       =>   a = a-5;

6- Increment/Decrement Operator
        ++ , --
    a = 10;
    a = a+1;
    a++;  =>   a=a+1;
    a--;     =>    a=a-1;
*/