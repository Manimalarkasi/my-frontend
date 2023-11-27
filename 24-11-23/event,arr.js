console.log("events");

function sayHello() 
{ 
 //document.write ("Hello there!");
 var tt=document.getElementById("bye")//
console.log(tt.textContent="hiii");
//tt.textContent="hii";
}

// select input tag
//select h2 tag
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
function update(){
    result.textContent=inputbox.value
}

//select h2 tag
var add=document.getElementById("add")
function reapet(){
    // add.textContent="hello" it's 1 time only  printed
    var creat=document.createElement("h3")
    creat.textContent="hello"
    add.append(creat)
}
var color=document.getElementById("color")
function changecolor(){
    color.style.backgroundcolor="red"
}

var date=document.getElementById("date")
function date(){
    date=Date()
}

// function over() {
//     document.write ("Mouse Over");
//    }
//    function out() {
//     document.write ("Mouse Out");
//    }
console.log("***********************************","</br>");
console.log("array");
let m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25
console.log("creat array");
let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
document.write(color)
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
colors[2]=70;
console.log(colors[2]);

console.log(colors.length)
m73=function myFunction() {
    for (let i = colors.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = colors[i];
      colors[i] = colors[j];
      colors[j] = k;
    }
    console.log( colors);
  }
  console.log(m73());
m72=colors.sort(function(){return 0.5 - Math.random()});
console.log(m72);
function book(title, author){
    this.title = title; 
    this.author = author;
   }
   var myBook = new book("Perl", "Mohtashim");
   book.prototype.price = null;
   myBook.price = 100;
   document.write("Book title is : " + myBook.title + "<br>");
   document.write("Book author is : " + myBook.author + "<br>");
   document.write("Book price is : " + myBook.price + "<br>");
     
console.log("constructor array");
let numbers=new Array()//Array(arrayLength?: number | undefined): any[]
numbers[0]="one"
numbers[1]="two"
numbers[2]="three"
numbers[3]="four"
numbers[4]="five"
numbers[5]="six"
function isBigEnough(element, index, array) {
    return (element >= 10);
   }
   console.log("sort");
   let m7=numbers.sort()//ort(compareFn?: ((a: any, b: any) => number) | undefined): any[]
console.log(m7);
let m71=numbers.sort(function(a, b){return a - b});//Numerically
console.log(m71);

console.log("reverse");
m13=numbers.reverse()//reverse(): any[]
console.log(m13);

console.log(("array constructor"));
let aa=numbers.constructor
console.log(aa);

console.log("length");
console.log(numbers.length);
console.log(numbers[0]);

console.log("concat");
let conc=colors.concat(numbers)
console.log(conc);

console.log("join");
m1=numbers.join("-")
console.log(m1);

console.log("copywith");
console.log(numbers.copyWithin(4,1,5))//copyWithin(target: number, start: number, end?: number | undefined): any[]

console.log("entairs");
console.log(numbers.entries());//entries(): IterableIterator<[number, any]>
//console.log(numbers.every(element, index, array));//every(predicate: (value: any, index: number, array: any[]) => value is any, thisArg?: any): this is any[]

//console.log(numbers.filter(isBigEnough()));//filter(predicate: (value: any, index: number, array: any[]) => value is any, thisArg?: any): any[]
//console.log(numbers.find("one"));//find(predicate: (value: any, index: number, obj: any[]) => value is any, thisArg?: any): any
//console.log(numbers.findIndex());//findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number

console.log("slice it creat nee arr specify start to end ele index");//exract method
m12=numbers.slice(2,6)//slice(start?: number | undefined, end?: number | undefined): any[]
console.log(m12);


console.log("values");
let m2=numbers.values()
console.log(m2);

console.log("unshift");
let m3=numbers.unshift("ggggg")
console.log(m3);//unshift(...items: any[]): number

console.log("splice -> new arr -start,del ele, values");
let m6=numbers.splice(1,3,"kkkkkk","ooooo")//(method) Array<any>.splice(start: number, deleteCount: number, ...items: any[]): any[] (+1 overload)
console.log(m6);

console.log("to string");
let m4=numbers.toString()
console.log(m4);

console.log("toLocaleString");
let m5=numbers.toLocaleString()
console.log(m5);//toLocaleString(): string

console.log(numbers);

// console.log("splice -> new arr -start,del ele, values");
// let m6=numbers.splice(1,0,"kkkkkk","ooooo")//(method) Array<any>.splice(start: number, deleteCount: number, ...items: any[]): any[] (+1 overload)
// console.log(m6);//splice(start: number, deleteCount?: number | undefined): any[]



// numbers.length - 1
// console.log(numbers);

console.log("pop -> del last ele");
let m8=numbers.pop()//pop(): any//remove last element);
console.log(m8)

console.log("shift -> del 1st ele");
m9=numbers.shift()//shift(): any//remove first element);
console.log(m9)

console.log("unshift -> add 1st ele");
 m10=numbers.unshift("ddddd","kkkkkk") //unshift(...items: any[]): number//// add 1st element);
console.log(m10)

console.log("push-> add last element");
m11=numbers.push("jjjjjj","mmmmmm")//push(...items: any[]): number
console.log(m11);

// numbers.some()//some(predicate: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean
// console.log(numbers);




// m14=numbers.reduceRight()//reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any
// console.log(m14);

// m15=numbers.reduce()//reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any
// console.log(m15);

// m16=numbers.map()
// console.log(m16);

console.log("indexof");
console.log(numbers);
m18=numbers.indexOf("three")
console.log(m18);// -1 mmeans not in arr

console.log("last indexof");
m17=numbers.lastIndexOf("one")//lastIndexOf(searchElement: any, fromIndex?: number | undefined): number
console.log(m17);

console.log("flat");
m19=numbers.flat()//
console.log(m19);

console.log("includes it check the ele in arr");
m21=numbers.includes("one")
console.log(m21);


 m20=numbers.fill("&",3)
console.log(m20);//fill(value: any, start?: number | undefined, end?: number | undefined): any[]


console.log("***************************","<br>");
console.log("find","<br>");
let order=[
    {id:1, item:"phone", quantity:3, price:50000},
    {id:2, item:"apple", quantity:3, price:50},
    {id:4, item:"tea", quantity:8, price:50}
]
let test=order.find(function(order){//callback method
    return (order.price===50) 

})// variable name kodukkalana varathu
console.log(test);

let test1=order.findIndex(function(order){
   return (order.price==50);
})
console.log(test1);

let test3=order.find((order) =>  order.id===4)
console.log(test3);//value mathi pota undefine nu varum

// console.log("****************","<br>");
// console.log("empty arr","<br>");
// console.log(colors);
// //colors=[] //1
// // colors.length=0 //2
// colors.splice(0,colors.length)//3
//
// console.log(colors);





























