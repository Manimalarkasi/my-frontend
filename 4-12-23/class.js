class Counrty{
    constructor(name,country){
        this.name=name
        this.country=country
    }
    full(){
        console.log(`my name is ${this.name} my country is ${this.country}`);
    }

}
let mani=new Counrty("mani","ind")
let malar=new Counrty("malar","ind")
mani.full()
malar.full()
class Parent{
    constructor(surname){
        this.surname=surname;
    }
    parmeth(){
        console.log("i'm parent");
    }
}
//child inherit the parent using "extends"
class Child extends Parent{
    chilmeth(){
        console.log("i'm child");
    }
}
//create child object
let c=new Child("malar")
//the constructor arg is passed to parent
console.log(c.surname);
c.chilmeth()
c.parmeth()
console.log("class-> class is a template of properties and methods");
console.log("static-> common variables & methods for class accessed with classname");
console.log("inheritance->aquiring properties of a base class");
class Math{
    static totimes=0
    constructor(a,b){
        this.a=a
        this.b=b
        Math.totimes++
    }
    static totalsum(){
        console.log(`total no of sums is : ${Math.totimes++} `);
    }
    add(){
        console.log(`the addition is : ${this.a+this.b}`);
        return this
    }
    sub(){
        console.log(`the subtraction is : ${this.a-this.b}`);
        return this
    }
    mul(){
        console.log(`the multiplication is : ${this.a*this.b}`);
        return this
    }
    div(){
        console.log(`the divition is : ${this.a/this.b}`);
        return this
    }
    mol(){
        console.log(`the modules is : ${this.a%this.b}`);
        return this
    }
    exp(){
        console.log(`the exponantial is : ${this.a+this.b}`);
        return this
    }
    sqr(){
        console.log(`the square is : ${this.a^2}`);
        return this
    }
    qube(){
        console.log(`the qube is : ${this.a^3}`);
        return this
    }
    
}
let num=new Math(2,5)
num.add().sub().div().mul().mol().exp().sqr().qube()
console.log("<br>");
let num1=new Math(5,7)
num1.add().sub().div().mul().mol().exp().sqr().qube()
console.log(Math.totimes++);
Math.totalsum()

class Premath extends Math{
    constructor(a,b,c){
        super(a,b);
        this.c=c
    }
    
    expression(){
        console.log(`the expression is : ${this.a+this.b/this.c^2}`);
        return this
    }

}console.log("<br>");
let num3=new Premath(2,"y",5)
num3.expression().add().div()


arg(num3)
arg1(num3,"mani")
function arg(val){
    console.log(val.a);
    console.log(val.b);
    console.log(val.c);
}
function arg1(val,name){
    console.log(val.a);
    console.log(val.b);
    console.log(val.c);
    console.log(name);
}

console.log("get & set");
class Temperature{
    constructor(temp){
        this._temp = temp
    }
    get temp(){
        return `${this._temp} deg celcius`
    }
    set temp(temp){
        if(temp>100)
            temp = 100
        this._temp = temp
    }
}

let temp1 = new Temperature(25)

temp1.temp = 150
console.log(temp1.temp)





console.log("array of objects");
let student=[
    {id:11591,name:"mani",age:20},
    {id:11590,name:"malar",age:20},
    {id:11592,name:"menaga",age:21},
    {id:11593,name:"sruthi",age:23},
    {id:11594,name:"hari",age:22},
]
console.log(student);
console.log(student[2]);
student.entries();
student.every((value,ind,arr)=>{
    console.log(value,ind,arr);
})

let n=student.filter((val,ind,arr)=>{
    return(val.id==11593);
})
console.log(n);

let n1=student.find((val,ind,arr)=>{
    return val.age==22
})
console.log(n1);

let n2=student.findIndex((val,ind,arr)=>{
    return val.name=="mani"
})
console.log(n2);

let n3=student.forEach((val,ind,arr)=>{
    console.log(ind,val,arr);
})

let n4=student.includes((val)=>{
    return val.id==11593
})
console.log(n4);

let n5=student.reverse()
console.log(n5);

let n6=student.values()
console.log(n6);
























