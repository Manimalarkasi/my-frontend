document.write("while","<br>");
var i=1;
while(i<20){
    if(i %2 == 0){
        document.write("even no "+i,"<br>",)
    }
    i++
}
document.write("<hr>")

//do while
document.write("do..while","<br>")
let s=1
let t=9
do{
   document.write(s +"*" + t + "="+ s*t,"<br>")
   s++
}
while(s<=16)
document.write("<hr>")
//for
document.write("for","<br>")

for(i=0;i<=20;i++){
    document.write(i +"*"+6+"="+i*6,"<br>")
}
document.write("<hr>")
for(i=0;i<=20;i++){
    if(i%2!==0){

        document.write("odd no " +i,"<br>")
    }
}
document.write("<hr>")
document.write("break,continue","<br>")
var y = 1;
 document.write("Entering the loop");
 while (y < 20) {
 /* if (y == 10){
    continue; // breaks out of loop completely
    } */
     if (y ==15 ){
        break; // breaks out of loop completely
        } 
 y = y + 1;
 document.write( y + " ");
 } 
document.write("Exiting the loop!");
document.write("<hr>")

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
    document.write(a+"*"+b+"="+a*b,"<br>" )
    while(b<=10){
        document.write(a+"*"+b+"="+a*b,"<br>")
        b++
        
    }
    
    a++
    
} 
document.write("<hr>")
for(a=1;a<=10;a++){
    for(b=1;b<=10;b++){
        document.write(a+"*"+b+"="+a*b,"<br>" )
    }
    document.write(a+"*"+b+"="+a*b,"<br>" )
}
document.write("<hr>")

document.write("format currency","<br>")
function formatCurrency(amount) {
    return new Intl.NumberFormat(navigator.language, { style: 'currency', currency: 'USD' }).format(amount);
  }
let amount = 123456.78;
let formattedCurrency = formatCurrency(amount);
document.write(formattedCurrency); // Output: $123,456.78


/* function formatCurrencyy(amountt) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }
  
  // Example usage
  let amountt = 123456.78;
  let formattedCurrencyy = formatCurrency(amountt);
  console.log(formattedCurrencyy); // Output: $123,456.78 */

