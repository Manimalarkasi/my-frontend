

console.log("arithmetic expression");
let num1,num2,num3,num4
num1=10
num2=20
num3=30
num4=50
let add=num1+num2+num3+num4
console.log("the addition is :",add);
let sub=num1-num2-num3-num4
console.log("the subtraction is :",sub);
let div=num4/num2
console.log("the divition is :",div);
let mul=num1*num2*num3
console.log("the multiplication is:",mul);
let mol=num4%3
let mol1=num3%3
let mol2=num2%3
let mol3=num1%3
console.log("the modules is :",mol,mol1,mol2,mol3);
 let power=num1**2
 console.log("the power is : ",power);


 console.log("+ or = :",num1+=5);
 console.log("- or = :",num1-=3);
 console.log("/ or = :",num1/=2);
 console.log("* or = :",num1*=2);
 console.log("** or = :",num1**=2);
 console.log("% or = :",num1%=3);

 let exp=num1+(num2*num4)/num3-num1
 console.log("te expression is: ",exp);

//  console.log("***************************","<br>");
//  console.log("user input");
//  let name=window.prompt("my name is : ")
//  console.log("my name is : ",name);
//  let age=window.prompt("my age is : ")
//  console.log("my age is : ",age);
//  let no=prompt("my fav no is:")
//  console.log("my fav no is:",no);

let Uname;
document.getElementById("button").onclick=function(){
    Uname=document.getElementById("name").value;    
    console.log("my name is :",Uname);
    document.getElementById("lable").innerHTML="hello" + Uname
}

console.log("*******************************************");
console.log("type conversion");
console.log(Number("3.14") ) 
console.log(Number(Math.PI) ) 
console.log(Number("    ")) 
console.log(Number("")) 
console.log(Number("99 88") ) 
console.log(Number("John") )
console.log(Number(false))   
console.log(Number(true))

console.log(String(false) ); 
console.log(String(true));
console.log(false.toString());   // returns "false"
console.log(true.toString()); 

d = new Date();
console.log(Number(d)); 
console.log(d)

console.log(d.getTime()); 
console.log(String(Date()));
console.log(Date().toString());
//console.log(Date.getDate());
//let s=Date.getDate()
//console.log(s);
//console.log("Mon Nov 27 2023 21:45:56 GMT+0530 (India Standard Time)");
//
console.log("***********************************");
console.log("math properties");
let num=[3,4,7,9,22,55,77,9,0,3]
x=2265.655
console.log(Math.LN10);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log("math methods");
console.log("abs - absolute");
console.log(Math.abs(x));//abs(x: number): number
console.log(Math.abs(-1));
console.log(Math.abs(null));
console.log(Math.abs(20));
console.log(Math.abs("string"));
console.log("acos -arccosine ");
console.log(Math.acos("string"));
console.log(Math.acos(2));
console.log(Math.acos(null));
console.log(Math.acos(-1));
console.log(Math.acos(x));
console.log("asin -arcsine");
console.log(Math.asin(-1));
console.log(Math.asin(null));
console.log(Math.asin(30));
console.log(Math.asin(1));
console.log(Math.asin("string"));
console.log("atan -arctangent");
console.log(Math.atan(-1));
console.log(Math.atan(.5));
console.log(Math.atan(30));
console.log( Math.atan("string"));
console.log("atan2");
console.log(Math.atan2 ( 30,45 ));
console.log(Math.atan2(90,15));
console.log(Math.atan2(15,90));
console.log( Math.atan2(0, -0));
console.log(Math.atan2(+Infinity, -Infinity));
console.log("ceil");
console.log(Math.ceil(45.95));
console.log(Math.ceil(45.20));
console.log(Math.ceil(-45.95));
console.log(Math.ceil(-45.20));
console.log("cos");
console.log( Math.cos(90));
console.log(Math.cos(30));
console.log(Math.cos(-1));
console.log(Math.cos(2*Math.PI));
console.log("exp");
console.log(Math.exp(1));
console.log(Math.exp(30));
console.log(Math.exp(-1));
console.log(Math.exp(.5));
console.log("floor");
console.log( Math.floor(10.3));
console.log(Math.floor(30.9));
console.log(Math.floor(-2.9));
console.log(Math.floor(-2.2));
console.log("log");
console.log(Math.log(10));
console.log(Math.log(22));
console.log(Math.log(111));
console.log(Math.log(33));
console.log("max");
console.log(Math.max(10, 20, -1, 100));
console.log(Math.max(num));
console.log(Math.max(-1, -3, -40));
console.log(Math.max(100));
console.log("min");
console.log( Math.min(10, 20, -1, 100));
console.log(Math.min(-1, -3, -40));
console.log(Math.min(0, -1));
console.log(Math.min(num));
console.log("power");
console.log(Math.pow(7, 2));
console.log(Math.pow(-7, 2));
console.log(Math.pow(4, 2));
console.log(Math.pow(0, 12));
console.log("random");
console.log(Math.random());
console.log(Math.random(1,2,3,44,55,77,999,88,66));
console.log("round");
console.log(Math.round(20.8));
console.log(Math.round(20.1));
console.log(Math.round(-20.8));
console.log(Math.round(-20.2));
console.log("sin");
console.log(Math.sin( 0.5 ));
console.log(Math.sin( 0 ));
console.log(Math.sin( 1));
console.log(Math.sin( 90));
console.log(Math.sin(30));
console.log(Math.sin(Math.PI/2));
console.log(Math.sin(Math.PI/6));
console.log(Math.sin(Math.PI/8));
console.log(Math.sin(Math.PI/4));
console.log("sqrt");
console.log(Math.sqrt( 0.5 ));
console.log(Math.sqrt(4 ));
console.log(Math.sqrt( 19));
console.log(Math.sqrt( 100));
console.log("tan");
console.log(Math.tan(Math.PI/4 ));
console.log(Math.tan( 30))
console.log(Math.tan( 0 ))
console.log(Math.tan( 90))
console.log(Math.tan( 45))
console.log(Math.tan(1))
// console.log("tosource");
// console.log(Math.toSource ( Math));
console.log("trunc");
console.log(Math.trunc(13.37));
console.log(Math.trunc(42.84));
console.log(Math.trunc(0.123));
console.log(Math.trunc(-0.123));
console.log("tanh");
console.log(Math.tanh(-1));
console.log(Math.tanh(0));
console.log(Math.tanh(Infinity));
console.log(Math.tanh(1));
console.log("sinh");
console.log(Math.sinh(0));
console.log(Math.sinh(1));
console.log(Math.sinh(-1));
console.log(Math.sinh(2));

console.log("**************************************");
console.log("hypotenuse calculator");
let a,b,c;
// a=window.prompt("enter side a:")
// console.log(Number(a));
// b=window.prompt("enter side b:")
// console.log(Number(b));
// c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
// console.log("side c: ",Number(c));
document.getElementById("submit").onclick=function(){
    a=document.getElementById("abox").value
     a=Number(a)
     b=document.getElementById("bbox").value
     b=Number(b)
    c=Math.sqrt(Math.pow(a,2 ) + Math.pow(b , 2))
     document.getElementById("clabel").innerHTML="side c: "+c;
}
console.log("************************************");
console.log("counter program");
let count=0;
document.getElementById("decreasebtn").onclick=function(){
    count-=1;
document.getElementById("countlabel").innerHTML=count;

}
document.getElementById("resetbtn").onclick=function(){
    count=0;
document.getElementById("countlabel").innerHTML=count;

    
}
document.getElementById("increasebtn").onclick=function(){
    count+=1;
document.getElementById("countlabel").innerHTML=count;

}










