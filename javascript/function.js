document.write("<hr>")//function la return use panna output la undefine nu varathu but document.write nu kodutha undefine nu varum 
document.write("function call","<br>");
function mine(){
    let nane="mani";
    let agee=54;
    //document.write("name is "+typeof name +"<br>")
    document.write(typeof nane)
    document.write("age is "+typeof agee +"<br>" )
    document.write("welcome to my world"+ nane +"hii");
    alert("malar");
}
mine()
document.write("<hr>")
document.write("function parameter","<br>");
function mul(a, b) {
    return a * b;
  }
  mul(6,8)
  document.write("the multiplication is: ",mul(3,6),"<br>")
  document.write("<hr>")
  function sub(n1,n2){
    return(n1-n2);
}

document.write("the subtraction is: ",sub(22,45),"<br>")
document.write("the subtraction is: ",sub(333,66),"<br>")
document.write("<hr>")

document.write("function return","<br>");
function none(nom,age){//parameter
    return("my name is, " + nom +"malar. my age is "+age);
    }
document.write(none("mani",20));//arguments
document.write(none("pani",22))

document.write("<hr>")
function mol(n1,n2){
    r=n1%n2;
    return r;
}
document.write("the modules is: ",mol(22,45),"<br>")
document.write("the modules is: ",mol(4,49),"<br>")
document.write("<hr>")

document.write("function constructor","<br>","<br>");
var add=new Function("a","b","return a*b")//Function(...args: string[]): Function
var addition=add(2,3)
document.write(addition);
document.write("<hr>")

document.write("function literals","<br>")
var func=function func1(title,author){
    title="honour"
    author="manimalar"
    return(`${title} means ${author} it is a title of my book`)
}
document.write(func())//function la parameter value kudutha this key word theva illa
//but parameter value func la kodukkalana this key word kodukkanum
var func2=func()
 document.write(func2)