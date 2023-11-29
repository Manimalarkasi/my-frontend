
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
document.write("bind()","<br>")//same as call,apply
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
