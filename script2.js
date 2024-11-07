console.log(100)

//variable_type variable_name=value;

var a ="javascript"
console.log(a)

//var

var a=10 //redeclare 
 a=5 //reassign
console.log(a);

let bd=30 // can't redeclare
bd=20; // can reassign
 console.log(bd);

 const c=40  //it can't redclare
  //c =30 //cant reassign
 console.log(c);

 var ch= null
 console.log(ch);
 
 
 //operators:

 //arithmetic operator
//+add, -sub, *multiply, /div, %modulus, **exponent,++increment , -- decrement 

var num=2
var num2=5

console.log(num+num2)

console.log(num-num2)

console.log(num/num2)

console.log(num%num2)

console.log(num**num2)

var assn =10
assn+=5
assn-=5
assn*=5
assn/=5
console.log(assn);

num++
num--



 //logical operator

//&&  => and
//|| => or
// ! => not

var a=10
var v=10
console.log(a!=v);



//assignment operator


//------comparison operator----------------

//lessthan < , >greater than, <= lessthanorequal, >=greaterthanorequal

var a=10;
var b=21
console.log(a<b);
console.log(a>=b);



//-----strict operator------

//loose equality == check the value it will not consider the datatype

var le= 10
var lee="10" // compare the value only that the datatype
console.log(le==lee);
//js is case sensivity

//strict equality ===
//check both the values and  the datatypes

var sq=10
var sq2="10"
console.log(sq==sq2);

//----------ternary operator------------

//syntax :

//(condition)? " value_true : value_false "

let age = 12

let limit = (age>=18 && age<=70)? "he is eligible to vote " : "he is not  eligible to vote"

console.log(limit);


var hgt =150


var eg=(hgt>=160 && hgt<=190)? "he is eligible to ride " : "he is not  eligible to ride"

console.log(eg);
