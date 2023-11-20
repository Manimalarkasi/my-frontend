let nane="mani";
console.log("welcome to my world"+ nane +"hii");
alert("malar");
// variable (var,let,const)
var name="mani"
console.log("my name is, " + name +"malar");
let nom="mani"
document.write("my name is, " + nom +"malar");
let color="red";
color="yellow";
console.log(color);
const color1="red";
console.log(color1);
let n1=23,n2=45,n3=54;
console.log(n1,n2,n3);
/* rules
1. no js key words 
2.should not start in numbrs
3. no space , no-
4. its case sensitive
5. cse meaning full name
*/
//data types(primitive,referance)
/*1. string
2. int
3. boolean
4. undefined
5.null

1. object
2. array
3.function*/
let no=45;//integer
let nam="malar";//string
let isupper=false;//boolean
let car=null;//null
//car="red";
let num=undefined;//undefined
console.log(no,nam,isupper,car);
//object
let details={
    person:"malar",
    age:20,
    gender:"male",
    address:"17,arthanari street,velanatham,attayampatti,salem(dt)637501",
    siblings:{
        bro:"anna",
        sis:"thangachi"
    }
}
//dot notation
console.log(details.person);
details.age=23;
console.log(details.age);
console.log(details.gender);
console.log(details.address);
console.log(details.siblings);
console.log(details.siblings.bro);
//procet notation
console.log(details['age']);
//array
let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
console.log(colors.length)//(arrname.functions) 
