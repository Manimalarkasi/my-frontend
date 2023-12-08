
document.write("if statement")
var v = 20; 
if( v> 18 ){ 
document.write("Qualifies for driving","<br>",);
 } 
 document.write("<hr>")


 document.write("if else statement")
 var age = 15;
 if( age > 18 ){
 document.write("your eligible for vote","<br>",);
 }
else{
 document.write("your eligible not for vote","<br>",);
 }
 document.write("<hr>")


document.write("else if")
let u
let y
function statement1(u,y){
if (u==y){
    document.write(u+" same no "+ y , "<br>",);
}
else if(u<y){
    document.write(u+" is lessthen "+y, "<br>",);
}
else if(u>y){
    document.write(u+" is greter then "+y, "<br>",);
}
else{
    document.write("unknown no","</br>",);
}}
console.log(statement1(200,50));
document.write("<hr>")

document.write("switch")
function statement2(){
let bg="o-";
switch(bg){
    case 'o+':
        document.write("a kind heart","<br>",);
        break;
    case 'o-':
        document.write("a kindless heart","<br>",)
        break;
    case 'a+':
        document.write("a leader person","<br>",)
        break;
    case 'a-':
        document.write("a bold person","<br>",)
        break;
    case 'b-':
            document.write("a bold&kind person","<br>",)
            break;
    case 'b+':
        document.write("a imagin person","<br>",)
        break;
}}
console.log(statement2());
document.write(statement2());
document.write("<hr>")


document.write("while")
var i=1;
while(i<20){
    if(i %2 == 0){
        document.write("even no "+i,"<br>",)
    }
    i++
}
document.write("<hr>")

document.write("do while")

let s=1
let t=9
do{
   document.write(s +"*" + t + "="+ s*t,"<br>")
   s++
}
while(s<=16)
document.write("<hr>")


document.write("for")
for(i=0;i<=20;i++){
    document.write(i +"*"+t+"="+i*t,"<br>")
}
document.write("<hr>")


for(i=0;i<=20;i++){
    if(i%2!==0){

        document.write("odd no " +i,"<br>")
    }
}
document.write("<hr>")

// document.write("break,continue","<br>")
// var x = 1;
//  document.write("Entering the loop");
//  while (x < 20) {
 
//  if (x == 10){
//     continue; // breaks out of loop completely
//     }
//     /* if (x ==15 ){
//         break; // breaks out of loop completely
//         } */
//  x = x + 1;
//  document.write( x + " ");
//  } 
// document.write("Exiting the loop!","<br>");
// document.write("<hr>")


document.write("nested loop")
for (var i = 0; i < 5; i++) { 
    document.write( 
      "the number is : " + i + "<br />"); 
    document.write("<br />") 

    for (var j = 0; j < 5; j++) { 
        // Break from the inner loop 
        if (j == 3) break;  

        document.write( 
          "the time is  : " + j + " <br />"); 
    } 
   // Break from the outer loop 
    if (i == 3) break; 
} 

let a=1
let b=1
while(a<=10){
    document.write(a+"*"+1+"="+a*1,"<br>" )
    while(b<=10){
        document.write(a+"*"+b+"="+a*b,"<br>")
        b++
        
    }
    
    a++
    
} 
document.write("<hr>")
for(let a=1;a<=16;a++){
    for(let b=1;b<=16;b++){
        document.write(a+"*"+b+"="+a*b,"<br>" )
    }
    document.write(a+"*"+b+"="+a*b,"<br>" )
    document.write("<br>")
}

document.write("<hr>")
let m,n
for(let m=1;m<16;m++){
    for(let n=1;n<16;n++){
        document.write(m+"*"+n+"="+m*n,"<br>" )
    }
    document.write(n+"*"+m+"="+m*n,"<br>" )
    document.write("<br>")
}


document.write("<hr>")
for(let i=1;i<=15;i++){
    for(j=1;j<=15;j++){
        document.write(i+"*"+j+"="+i*j,"<br>")
    }
    document.write(i+"*"+j+"="+i*j,"<br>")
    document.write("<br>")
}