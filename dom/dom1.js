//document.getElementById("doc")=document.write(document)
myDoc=document
var myDoc
document.write("html code vanum na log ,otherwise method & property venum na dir (directory)","<br>")
console.log(myDoc);
console.log(myDoc.body);
console.dir(myDoc.body);
console.log(myDoc.head);
console.dir(myDoc.head);
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
document.writeln(man.full())
document.getElementById("full").innerHTML=man.full()

man.na="malar"
man.place="kalipatty"
let naa=man.na
document.writeln(man.full())
console.log(naa);
//print to document
//document.body.innerHTML=`<h1>${naa}</h1>`;

console.log("html reference");
console.log(document);
console.log(document.documentElement);
console.log(document.documentElement.lang);
console.log(document.head);
console.log(document.body);
//find the node type
console.log(document.head.constructor.name);
console.log(document.body.constructor.name);
//find above where is come
console.log(document.body instanceof EventTarget);//true 1 
console.log(document.body instanceof Node);//true   2  node inside the eventtarget
console.log(document.body instanceof Element);//true   3 element inside the node
console.log(document.body instanceof HTMLElement);//true   4  htmlelement inside the element
console.log(document.head instanceof HTMLElement); //true   4
console.log(document.body instanceof HTMLHeadElement); // false body is not inside the dody

//find which node or what type fo node
console.log(document.body.nodeType);
console.log(document.body.nodeName);


console.log(document.body.children[1].children[1]);

console.log(`how to select dom elements
       1. getelementbyid()
       2. getelementsbyclassname()
       3. getelementsbytagname()
       4. finding elements by css selectors
       5. queryselector and queryselectorall()`);

console.log(" 1. getelementbyid()");
document.write(document.getElementById("ta").innerHTML);
document.write(document.getElementById("ta").innerText);//printing
document.getElementById("ta").innerText="i will change"; //modify
let name=document.getElementById("name");
let sbt=document.getElementById("nbt");
let ipn=document.getElementById("ipn");
sbt.addEventListener("click",()=>{
    //document.write(name.value);
    ipn.innerText=name.value
})











































