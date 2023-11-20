// Create a Map
let mind=new Map([ 
["name","mani"],
["age",20],
["no",66],
["key","val"]])
document.write(mind,"<br>")
//set method
mind.set('no5',77)
//get method
document.write(mind.get("name"),"<br>")
document.write(mind.get("key"),"<br>")
document.write(mind.get("no"),"<br>")
document.write(mind.get("no5"),"<br>")
document.write("<hr>")

let box=new Map();
// add element to the map
//set method
box.set('num1',23);
box.set('num2',"malar");
box.set('no3',"mani");
box.set('num3','66');
document.write(box.get("num1"),"<br>")
document.write(box.get("num2"),"<br>")
document.write(box.get("num3"),"<br>")
document.write(box.get("no3"),"<br>")
document.write("<hr>")

//has method  check the element in the map
document.write(box.has("no3"),"<br>")//true
document.write(box.has("no4"),"<br>")
document.write("<hr>")

//size of map
document.write(box.size,"<br>")
document.write(mind.size,"<br>")
//document.write(box.,"<br>")
document.write("<hr>")

//


document.write(box.delete("no3"),"<br>")
document.write(box.size,"<br>")
document.write("<hr>")

let text=" ";
box.forEach (function(value, key) {
    text += key + ' = ' + value + "<br>"
  })
document.write(text,"<br>")
document.write(box.size,"<br>")
document.write("<hr>")


let tet = "";
for (const x of box.entries()) {
  tet += x + "<br>";
}
document.write(tet,"<br>")
document.write(box.size)
//document.write(box.
//document.write(box.
document.write("<hr>")

document.write(box.clear)
document.write(box.size)
document.write("<hr>")
document.write("*************************************","<br>")
let numbers=new Set(['a','e','e','r','s']);//array values
document.write(numbers.size,"<br>")
document.write("<hr>")

document.write(numbers.has('a'),"<br>")
document.write("<hr>")

numbers.add('k')
document.write(numbers.size,"<br>")
document.write("<hr>")

document.write(numbers.keys('e'),"<br>")
document.write("<hr>")

numbers.delete('r')
document.write(numbers.size,"<br>")
document.write("<hr>")


let txt = "";
numbers.forEach (function(value) {
  txt += value+"<br>";
})
document.write(txt,"<br>")
document.write(numbers.values())
document.write("<hr>")


let tt = "";
for (const y of numbers.values()) {
  tt += y + "<br>";
}
document.write(tt,"<br>")
//document.write




