//document.getElementById("doc")=document.write(document)
myDoc=document
var myDoc
//html code vanum na log ,otherwise method & property venum na dir (directory)
console.log(myDoc);
console.log(myDoc.body);
console.dir(myDoc.body);
console.dir(myDoc.body.childNodes);
console.dir(myDoc.body.children);
console.log(myDoc.body.childNodes);
console.log(myDoc.body.children);
console.log(myDoc.body.children[0].innerHTML="document object model for my");
document.body.children[2].innerHTML="document object model for my";
console.log(window.find("object"));

//dinamically get name,place
let nama=window.prompt("enter your name:","mani")
let plase=prompt("enter your place:")
let man={
    na:nama,
    age:20,
    place:plase,//key : property
    full(){
return `hii! my name is ${this.na}. my age is ${this.age} i'm live in ${this.place}`
    }
}
document.getElementById("full").innerHTML=man.full()

man.na="malar"
man.place="kalipatty"
let naa=man.na
document.writeln(man.full())
console.log(naa);
//print to document
//document.body.innerHTML=`<h1>${naa}</h1>`;




















































