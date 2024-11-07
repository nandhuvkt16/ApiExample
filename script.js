// syntax for printing statement

console.log("hello im js")

//two type
//extension
//terminate

//program syntax

//variable_type variable_name = value

//variable type
//var => redeclare and reassign
//let
//const

//var => redeclare and reassign

var a=10
a=5
console.log(a);

//let => it can't redeclare but reassign

let b=10
b=5
console.log(b);

//const => it can't redeclare and reassign
const c= 10
//c=4
console.log(c);

//primitive  datatypes
//1.string - collection of values and data's within the double quotes

var str="chennai"
console.log(str);

//2.number => integer & decimal
var num =100

//3.boolean = true or false
var t = false;

//4.null
var n = null;

//5.undefined
var df= undefined

//non-primitive datatypes
//1.array -[]

const arr=["sunday",true,100,null]
console.log(arr);


//2.object-{}
//collection of key and value pairs 

const obj={
    //key:value

    name:"nandhu",
    age:10,
    address:"chennai",
    id:11,
    school:"DCS"

}
console.log(obj);


const object=[
    {
        name:"nandhu",
    age:10,
    address:"chennai",
    id:11,
    school:"DCS"
    },

    {
        name:"fff",
    age:10,
    address:"chennai",
    id:11,
    school:"DCS"
    }
]

console.log(object[1].address);

