console.log("object:");
document.write("object:")
function employee(){
let name=prompt("enter your name:")
console.log(name);
let eID=prompt("enter your employee ID:")
console.log(eID);
let email=prompt("enter your mail id:")
console.log(email);
let area=prompt("where are you live in:")
console.log(area);

let man={
    na:name,
    emp_ID:eID,
    mail:email,
    place:area,
    details(){
       return ` hii!, my name is ${this.na}.my employee ID is ${this.emp_ID}. my mail ID is ${this.mail}. i'm live in ${this.place}` 
    }
};
console.log(man.details());
}



i=0;
while(i<5){
    console.log(employee());
    i++;
}



