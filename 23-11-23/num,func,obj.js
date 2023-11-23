
var str=`     JS Number Methods, properties
            JS Functions,function invocation,return
                JS Objects,object properties
                 Accessing obj properties
`
document.write("today topic is : ",str)
console.log("today topic is : ",str);
console.log("***************************************");
console.log("JS Number Methods");
var nn1=229.39999999
var nn2=45767.75379
let n2=nn2.constructor
console.log("constructor is : ",n2);
var nn3=new Number()
nn3=2345.55555
var nn4=12344e8
var nn5=23456e-5
let s="566.674443"
console.log(nn1,nn2,nn3,nn4,nn5);
console.log(nn1.toExponential(6));//toExponential(fractionDigits?: number | undefined): string
console.log(nn2.toExponential(3));
console.log(nn5.toExponential(3));
console.log(nn1.toFixed(6));//toFixed(fractionDigits?: number | undefined): string
console.log(nn2.toFixed(3));
console.log(nn5.toFixed(2));
console.log(nn1.toLocaleString());//toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined): string
console.log(nn2.toLocaleString());
console.log(nn1.toPrecision(4));//toPrecision(precision?: number | undefined): string
console.log(nn5.toPrecision(2));
console.log(nn1.toString());//toString(radix?: number | undefined): string
console.log(nn5.toString());
console.log(nn1.valueOf());//valueOf(): number
document.write(String(nn1));//String(value?: any): string

console.log(parseInt(s));
console.log(parseInt("3333.66666666666666"));
console.log(parseInt("66666 99999"));
console.log(parseInt("56 time"));
console.log(parseInt(" time 66"));
console.log(parseFloat(s));
console.log(parseFloat("22333"));
console.log(parseFloat("333 10"));
console.log(parseFloat("1223"));
console.log(parseFloat("66 year"));
console.log(parseFloat("year 66"));
console.log(Number(s));
console.log(Number("56 time"));
console.log(Number("year 66"));
console.log(Number("333.444"));

console.log("Number Object Methods");
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("years 10"));
console.log(Number.parseInt("-10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("years 10"));
console.log(Number.parseInt("10 20 30"));

console.log("JS Number properties");
console.log(Number.EPSILON);//property) NumberConstructor.EPSILON: number
console.log(Number.MAX_SAFE_INTEGER);//(property) NumberConstructor.MAX_SAFE_INTEGER: number
console.log(Number.MAX_VALUE);//(property) NumberConstructor.MAX_VALUE: number
console.log(Number.MIN_VALUE);//property) NumberConstructor.MIN_VALUE: number
console.log(Number.MIN_SAFE_INTEGER);//(property) NumberConstructor.MIN_SAFE_INTEGER: number
console.log(Number.MAX_SAFE_INTEGER);//(property) NumberConstructor.MAX_SAFE_INTEGER: number
console.log(Number.NEGATIVE_INFINITY);//(property) NumberConstructor.NEGATIVE_INFINITY: number
console.log(Number.POSITIVE_INFINITY);//(property) NumberConstructor.POSITIVE_INFINITY: number
console.log(Number.NaN);//(property) NumberConstructor.NaN: number
function showValue()
{
 var smallNumber = (-Number.MAX_VALUE) * 2
 if (smallNumber == Number.NEGATIVE_INFINITY) {
 alert("Value of smallNumber : " + smallNumber );
 }
}
console.log(showValue());// it is same as POSITIVE_INFINITY
 console.log("prototype");
function man(name,age,gender){
      this.name=name;
      this.age=age;
      this.gender=gender;
}
let man1=new man("mani",20,"male")
man.prototype.dob="05-03-2003"
console.log(man1.name);
console.log(man1.age);
console.log(man1.gender);
console.log(man1.dob);


console.log("******************************************");
document.write("<hr>")//function la return use panna output la undefine nu varathu but document.write nu kodutha undefine nu varum 
document.write("function call","<br>");
function mine(){
    let nane="mani";
    let agee=54;
    //document.write("name is "+typeof name +"<br>")
    document.write(typeof nane)
    document.write("age is "+typeof agee +"<br>" )
    document.write("welcome to my world"+ nane +"hii");
    alert("malar");
}
mine()
document.write("<hr>")
document.write("function parameter","<br>");
function mul(a, b) {
    return a * b;
  }
  mul(6,8)
  document.write("the multiplication is: ",mul(3,6),"<br>")
  document.write("<hr>")
  function sub(n1,n2){
    return(n1-n2);
}

document.write("the subtraction is: ",sub(22,45),"<br>")
document.write("the subtraction is: ",sub(333,66),"<br>")
document.write("<hr>")

document.write("function return","<br>");
function none(nom,age){//parameter
    return("my name is, " + nom +"malar. my age is "+age);
    }
document.write(none("mani",20));//arguments
document.write(none("pani",22))

document.write("<hr>")
function mol(n1,n2){
    r=n1%n2;
    return r;
}
document.write("the modules is: ",mol(22,45),"<br>")
document.write("the modules is: ",mol(4,49),"<br>")
document.write("<hr>")

document.write("function constructor","<br>","<br>");
var add=new Function("a","b","return a*b")//Function(...args: string[]): Function
var addition=add(2,3)
document.write(addition);
document.write("<hr>")

document.write("function literals","<br>")
var func=function func1(title,author){
    title="honour"
    author="manimalar"
    return(`${title} means ${author} it is a title of my book`)
}
document.write(func())//function la parameter value kudutha this key word theva illa
//but parameter value func la kodukkalana this key word kodukkanum
var func2=func()
 document.write(func2)
 document.write("**************************************","<br>")
 document.write("<hr>")
 document.write("object","<br>");
document.write("object costructor","<br>")
const person = new Object();//caps o
person.firstName = "John";
person.lastName = "Doe";
person.agee = 50;
person.eyeColor = "blue";
document.write(person.firstName + " is " + person.agee + " years old.")
document.write(person['firstName'] + " is " + person['agee'] + " years old.")
document.write("<hr>")

document.write("accesing object properties","<br>")
let details={
    person:"malar",
    age:20,
    gender:"male",
    language:"en",//get ku value kodukkanum,set ku value kodukka vendam
    // get lang(){
    //     return this.language;
    // }
    // set lang(lang) {
    //     this.language = lang;// 
    //   }
    address:"17,arthanari street,velanatham,attayampatti,salem(dt)637501",
    today:new Date(),
    siblings:{
        bro:"anna",
        sis:"thangachi"
    }
}
//dot notation
details.lang = "en";// Set a property using set:
document.write(details.person,"<br>");
details.age=23;//value change
details.favno=34//add
document.write(details.age,"<br>");
document.write(details.lang,"<br>");
document.write(details.today,"<br>");
document.write(details.gender,"<br>");
document.write(details.address,"<br>");
document.write(details.siblings.sis,"<br>");
document.write(details.siblings.bro,"<br>");
document.write(details.favno,"<br>");
//procet notation
delete details.age//delete
details.favno=34
document.write(details['age'],"<br>");
document.write("<hr>")
document.write("Display object properties:","<br>")
document.write("Displaying the Object in a Loop","<br>")
let txt = "";
for (let x in details) {
  txt += details[x] + " "+"<br>";
};
document.write(txt)
document.write("<hr>")
document.write("Using Object.values()","<br>")
document.write(Object.values(details))//values(o: { [s: string]: string | number | { bro: string; sis: string; }; } | ArrayLike<string | number | { bro: string; sis: string; }>): (string | number | { bro: string; sis: string; })[]
document.write("<hr>")
document.write("Using JSON.stringify()","<br>")
document.write(JSON.stringify(details))
document.write("<hr>")


document.write("Defining Methods for an Object","<br>")
let detailss={
    nom:"mani",
    agea:20,
    gendere:"female",
    addresss:"17,arthanari street,velanatham,attayampatti,salem(dt)637501",
    siblingss:"anna,thangachi",
    full:function(){
        let msg=`my name is ${this.nom}malar. my age is ${this.agea}.i am a ${this.gendere}.my address is ${this.addresss}
         and my siblings are ${this.siblingss}`;
         document.write(msg,"<br>");
    }
    
}
detailss.full();//objname.methodname
document.write("<br>")
document.write("Adding a Method to an Object ,","<br>")
document.write("Using Built-In Methods .","<br>")
detailss.no=function(){
    return ("my age is "+ this.agea).toUpperCase();
}
document.write(detailss.no())
document.write("<hr>")
document.write("***********************************************","<br>")
document.write("bind()","<br>")
let dell={
    nom:"gowtham",
    agea:23,
    gendere:"male",
    addresss:"17,arthanari street,velanatham,attayampatti,salem(dt)637501",
    siblingss:"bro,sis"
}
let dall=detailss.full.bind(dell)
document.write(dall())
//document.write(detailss.full.bind(dell))//varathu





