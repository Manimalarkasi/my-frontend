let a="my name is mani"
let b="my professional is web developer"
let c=45
console.log(`searchmethod
            index
            indexof
            match
            matchall
            `);
document.write(`the string a is:  ${a} `,"<br>")
document.write(`the string b is:  ${b} `,"<br>")
document.write(a.length,"<br>")
document.write(a.slice(8),"<br>");
document.write(a.slice(-15),"<br>");
document.write(a.slice(-15,-5),"<br>");
document.write(a.slice(11,15),"<br>");
document.write("<hr>")
document.write(a.substring(8),"<br>");
document.write(a.substring(-15),"<br>");
document.write(a.substring(-15,5),"<br>");
document.write(a.substring(11,15),"<br>");
document.write("<hr>")
let bb=b.replace("web developer","frontend developer")
document.write(`the string b is:  ${bb} `,"<br>")
let bc=b.replace(/my/i,"i m")
document.write(`the string b is:  ${bc} `,"<br>")
let b2=bc.replace(/is/g,"was")
document.write(`the string b is:  ${b2} `,"<br>")
document.write(a.replace("mani","malar"),"<br>");
document.write(a.replace("name","nom"),"<br>");
document.write("<hr>")
document.write(a.toUpperCase(),"<br>")
document.write(a.toLowerCase(),"<br>")
let bu=b.toUpperCase()
let bl=b.toLowerCase()
document.write(bu,"<br>")
document.write(bl,"<br>")
document.write("<hr>")
//document.write(bu,"<br>")
let g="lorem lorem lorem lorem lorem lorem"
//document.write(g.padStart(6,"0"),"<br>");
//document.write(g.padEnd(4,"0"),"<br>");
//document.write(g.padEnd(5,"*"),"<br>");
document.write(a.split("+"),"<br>");
document.write(a.charCodeAt(0),"<br>");
document.write(a.charCodeAt(5),"<br>")
document.write(a.charCodeAt(8),"<br>")
document.write(a.charCodeAt(12),"<br>")
document.write(a.charCodeAt(9),"<br>")
document.write(a.charCodeAt(15),"<br>")
document.write("<hr>")
document.write(a.charAt(0),"<br>");
document.write(a.charAt(5),"<br>")
document.write(a.charAt(8),"<br>")
document.write(a.charAt(12),"<br>")
document.write(a.charAt(9),"<br>")
document.write(a.charAt(15),"<br>")
document.write("<hr>")
let d="56"
document.write(d,"<br>")
document.write(typeof d ,"<br>")
//let df=perseint(d)
//document.write(dd,"<br>")
//document.write(typeof df,"<br>")
document.write("<hr>")
let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
console.log(colors.length)
console.log("<hr>")
const cars = new Array("Saab", "Volvo", "BMW");
cars[2]="jjj"
cars[5]="iiii"
cars.push("Lemon")
console.log("<hr>")

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[4]);
console.log(cars);
console.log(cars.toString())
console.log("<hr>")

let c1=cars[0]//access 1st element
console.log(c1);
console.log("<hr>")

let c0 = cars[cars.length - 1];
console.log(c0);// access last element
console.log("<hr>")

cars.pop()//remove last element
console.log(cars);
console.log("<hr>")

cars.shift()//remove first element
console.log(cars);
console.log("<hr>")

cars.unshift("eeee") // add 1st element
console.log(cars);
console.log("<hr>")

delete cars[2] //delete a index element
console.log(cars);
console.log("<hr>")

let f=cars.slice(4,6)// to print start index to ed=nding index element
console.log(f);
console.log(cars);
console.log("<hr>")

var fruits = ["apple", "banana", "orange", "mango"];//to print start index to ed=nding index element
var citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits)
console.log("<hr>")

cars.splice(2,3,"red","yellow","atti")
console.log(cars);
console.log("<hr>")

var numbers = [1, 2, 3];
numbers.forEach(function (number) {
  console.log(number*2); // Output: 1, 2, 3
});
console.log("<hr>")

var numbers = [1, 2, 3];
var doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6]
console.log("<hr>")

var joinedString = cars.join("-");//join the values
console.log(joinedString); // Output: "1-5-3"
console.log("<hr>")

var index = cars.indexOf("red");//find the element index value
console.log(index); // Output: 1
console.log("<hr>")

numbers.forEach(function (cars) {
  console.log(cars*2); // Output: 1, 5, 3
});
console.log("<hr>")


console.log(numbers.fill("*",10));
//let total=cars.concat(colors)
//console.log(total);
//cars.sort()
//console.log(cars);
//total.reverse()
//console.log(total);

