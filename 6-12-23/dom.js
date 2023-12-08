function change(){
    let tt=document.getElementById("hchange").textContent="DOM(Document Object Model)"
   // tt=document.getElementById("hc").value
   document.getElementById("hc").innerHTML=element.innerHTML + document.getElementById("hchange") ;
}

let element=document.getElementById("head")
document.getElementById("chead").innerHTML = element.innerHTML +"DOM(Document Object Model)" ;
let p=document.getElementsByTagName("p").innerHTML="my web page"
let pa1=document.getElementsByTagName("p")
document.getElementById("pa1").innerHTML=pa1.innerHTML + p.innerHTML 

document.querySelectorAll("p.pa").innerHTML="nnnn"

// const x = document.querySelectorAll("p");
// document.getElementById("pa").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

let d=document.getElementsByClassName("pa").innerHTML=pa1.innerHTML + "my web page"
document.getElementById("d1").innerHTML=d.length + d.toString()

function hide(){
document.getElementById('hide').style.display = 'none'
}
function hiden(){
    document.getElementById('d1').hidden = true
}
function unhiden(){
document.getElementById('d1').hidden = false
}
function hid(){
document.getElementById('pa1').style.visibility = "hidden"
}
function visi(){
 document.getElementById('pa1').style.visibility = 'visible'
 }
