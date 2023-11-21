
function click(){
    var tt=document.getElementById("bye")
console.log(tt.textContent);
tt.textContent="hii";
}


//Create an object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//Display some data from the object:
document.write("<hr>")
//document.write
document.write(person.firstName + " is " + person.age + " years old.","<br>");
document.write(alert('mani'),"<br>")
document.write(8+6,"<br>")
var a=7
if(a>0)
document.write( a+"is a number","<br>")

//console.log();
console.log(alert('malar'))//use window.alert("hii")
console.log(8+6,"<br>")
var a=7
if(a>0)
console.log( a+"is a number")

var s="mani"
var t="malar"
var u=s+t
console.log(alert(u));

//semicolons:
var g,h,p;
g=3;
h=5;
p=g+h
function sum(){
console.log("the sum is : "+p);

}
sum()

var a = 2; // Bit presentation 10
var b = 3; // Bit presentation 11
var linebreak = "<br />";

document.write("(a & b) => ");
result = (a & b);
document.write(result);
document.write(linebreak);

document.write("(a | b) => ");
result = (a | b);
document.write(result);
document.write(linebreak);

document.write("(a ^ b) => ");
result = (a ^ b);
document.write(result);
document.write(linebreak);

document.write("(~b) => ");
result = (~b);
document.write(result);
document.write(linebreak);

document.write("(a << b) => ");
result = (a << b);
document.write(result);
document.write(linebreak);

document.write("(a >> b) => ");
result = (a >> b);
document.write(result);
document.write(linebreak)


