
//let t = myFunction(4, 3);
//document.getElementById("demo");

function mul(a, b) {
    return a*b
//   document.write(aa);
// console.log("the multiplication ia : ",aa)
}
mul(6,8)
document.write("the multiplication is: ",mul(3,6),"<br>")
document.write("<hr>")



function none(nom,age){//parameter
return("my name is, " + nom +"malar. my age is "+age);
}
document.write(none("mani",20));//arguments
document.write(none("pani",22))
document.write("<hr>")

function add(n1,n2){
    return (n1 +n2);
} // function invocation
//let sum= add(3,5)
//let v=sumfunction(3,6)
//document.write(v)
//let sum=sumadd(3,4)
document.write("the addition is:",add(22,45),"<br>")
document.write("the addition is:",add(333,66),"<br>")
document.write("<hr>")


function sub(n1,n2){
    return(n1-n2);
}
document.write("the subtraction is: ",sub(22,45),"<br>")
document.write("the subtraction is: ",sub(333,66),"<br>")
document.write("<hr>")

function mul(n1,n2){
    return(n1*n2);
}
document.write("the multiplication is: ",mul(22,45),"<br>")
document.write("the multiplication is: ",mul(333,66),"<br>")
document.write("<hr>")

function div(n1,n2=2){
    return n1/n2;
}
document.write("the divition is: ",div(22),"<br>")
document.write("the divition is: ",div(333),"<br>")
document.write("<hr>")


function mol(n1,n2){
    r=n1%n2;
    return r;
}
function mol(n1,n2){
    r=n1%n2;
    return r;
};
//module.mol()
//module.r;
document.write("the modules is: ",mol(22,45),"<br>")
document.write("the modules is: ",mol(4,49),"<br>")
document.write("<hr>")

//console.log(module(5,7))
function mine(){
    let nane="mani";
    let agee=54;
    //document.write("name is "+typeof name +"<br>")
    document.write(typeof nane)
    document.write("age is "+typeof agee +"<br>" )
    //console.log("welcome to my world"+ nane +"hii");
    //alert("malar");
    //return(alert("welcome to my world"+ nane +"hii"))
    document.write(alert("welcome to my world"+ nane +"hii"))
}
//mine()
document.write("<hr>")


let details={
    nom:"mani",
    age:20,
    gender:"female",
    address:"17,arthanari street,velanatham,attayampatti,salem(dt)637501",
    siblings:{bro:"anna",sis:"thangachi"},
    full:function(){
        let msg=`my name is ${this.nom}malar. my age is ${this.age}.i am a ${this.gender}.my address is ${this.address}
         and my siblings are ${this.siblings}`;
         console.log(msg);
    }
    
}
details.full();
document.write("<hr>")
let anon=Object.assign({fav:"bonda"},details);//constructor function
console.log(anon);
let anone={...details};// spread operator
console.log(anone);


/*
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.replace("Microsoft","W3Schools");
}*/
document.write("<hr>")
// **factory function
function main(na,year,proof,no){
//let man
return{
    na:na,//dinamic
    year:year, //year
    proof:proof, //proof
    no:no, //no
    //fill: function()
    fill(){
        let at=`my name is ${this.na}. my age is ${this.year}.my proof is ${this.proof} and no is ${this.no}`
        document.write(at)
    }
}
//return man
}
let malar=main("malar",20,"aadhar",9999999,"<br>")
let mani=main("mani",20,"pan","trtr345","<br>")
malar.fill()
console.log(main());
document.write("<hr>")
mani.fill()
document.write("<hr>")
document.write("**************************************************")
//2 type of func name *camelcase-myFirstOrder , *pascal -MyFirstOrder(constructor)
//**construvtor function */
function Call(na,year,proof,no){
    this.na=na,
    this.year=year,
    this.no=no,
    this.proof=proof,
    this.fill=function(){
        document.write(`my name is ${this.na}. my age is ${this.year}.my proof is ${this.proof} and no is ${this.no}`,"<br>");
    }
    return this
}
let call= new Call("malar",20,"aadhar",9999999)
call.fill()
let call2= new Call("mani",20,"pan","trtr345")
call2.fill()    


//default constructors:
console.log(call2.constructor)
console.log(mani.constructor)

let good=new String("gowtham")
let card=new String("banu")
let mom=new Number(88)
let isalive=new Boolean("true")
console.log(good,card,mom,isalive);

console.log(Call.name);
console.log(Call.length);
console.log(Call.apply({},["mani",20,"pan","trtr345"]));//{}  -> empty object
console.log(Call.call({},"malar",20,"aadhar",9999999)); // bekind of new functions
console.log(Call.constructor);
let call4=new Function('na',`
this.na=na,
    this.fill=function(){
        console.log(my )
    }`)////name is ${this.na} many new irukkarathala confusion aagum so datas athigam use panna error kattum
        console.log(call4);


let g=[7.8,8,6,4,3,"serial={float:7.8}"]

console.log(g.serial);


