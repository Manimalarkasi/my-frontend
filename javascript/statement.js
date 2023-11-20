
//if statement
var a = 20; 
if( a > 18 ){ 
document.write("Qualifies for driving","<br>",);
 } 
 document.write("<hr>")
 //if else statement
 var age = 15;
 if( age > 18 ){
 document.write("your eligible for vote","<br>",);
 }
else{
 document.write("your eligible not for vote","<br>",);
 }
 document.write("<hr>")
//else if
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

//switch

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
document.write("<hr>")


//while
var i=1;
while(i<20){
    if(i %2 == 0){
        document.write("even no "+i,"<br>",)
    }
    i++
}
document.write("<hr>")

//do while

let s=1
let t=9
do{
   document.write(s +"*" + t + "="+ s*t,"<br>")
   s++
}
while(s<=16)
document.write("<hr>")
//for
for(i=0;i<=20;i++){
    if(i%2!==0){

        document.write("odd no " +i,"<br>")
    }
}
document.write("<hr>")


