
// console.log("*****************************************");
// console.log("modules");

// import c,{fillgas as fill,repair} from './mod.js'
// let car1=new c()
// car1.drive()
// fillgas()

let all=new Object()
all.emp1="ani"
all.emp2="malar"
all.na="mani"
all.emp3="mani"
//all.emp4="menaga"
all.emp5="hari"
all.emp6="shruthi"
all.date=new Date();
//all.today=date.getDay()

// all.year=date.getFullYear()
// all.time=date.getfullTime
all.All= function(){
 return(`${this.emp1},${this.emp2},${this.emp3},${this.emp4},${this.emp5},${this.emp6},${this.emp2}`);
}//add method in object
//console.log(all.date);
console.log(all.emp3); // dot notation
console.log(all["emp2"]); //proket notaion
console.log(all.All()); //call method
all.emp4="menaga";
console.log(all.date);
console.log(all.date.getFullYear());
console.log(all.date.getDay());
console.log(all);
console.log(all.length);
console.log(all.toString());
console.log(all.propertyIsEnumerable("emp1"));//propertyIsEnumerable(v: PropertyKey): boolean
console.log(all.constructor());//property) Object.constructor: Function
console.log(all.hasOwnProperty("emp5"));//hasOwnProperty(v: PropertyKey): boolean
console.log(all.isPrototypeOf("na"));//isPrototypeOf(v: Object): boolean
delete all.emp2
console.log(all);
function data(emp,id,dob,age){
   return{ 
    emp,
    id,
    dob,
    age,
    data(){
        console.log(`the employee name is ${emp} my id is ${id} my data of birth is ${dob} my age is ${age}`);
    }}
}
console.log(data.constructor());
console.log(data.constructor);
console.log(data("mani",11591,5_03_2003,20));
console.log(data("malar",11591,532003,20));
// all.forEach(element => {
//      console.log(element);
// });
//all.hasOwnProperty(emp3)//hasOwnProperty(v: PropertyKey): boolean
//all.isPrototypeOf()//sPrototypeOf(v: Object): boolean
let man={
    na:"mani",
    appa:"kasi",
    amma:"maheshwari",
    siblings:{
        anna:"gowtham",
        pappa:"banu"
    },
    thatha:"grandpa",
    language:" ",
    datee:new Date(),
    get tata(){
        return this.thatha;
     },
    set lang(lang) {
            this.language = lang;// 
          },

    Man: function(){
        
            return (`my name is "${this.na}". 
           my father nam is "${this.appa}", 
           my mother name is "${this.amma}"
           my brother name is "${this.siblings.anna}" 
           my sister name is "${this.siblings.pappa}" `);
    }
}
man.language="tn"
console.log(man.thatha);
console.log(man.datee);
console.log(man);
console.log(man.Man());
man.name=function(){
    return(`my name is "${this.na}".`).concat("my language is :",this.language);//
}
console.log(man.name());
man.parants=function(){
     console.log(`my name is "${this.na}". 
    my father nam is "${this.appa}", 
    my mother name is "${this.amma}"`);

}
console.log(man.parants());

console.log(Object.values(man));//
console.log(JSON.stringify(man));//

console.log("********************************************");
console.log("class");
// class Car{
//     constructor(name,age){
//         this.name,
//         this.age
//         console.log (`${name},${age}`);
//     }
// }
// let car1=new Car("mani",20)
// let car2=new Car("malar",20)
// car1.constructor
// console.log(car1.name);
console.log("class is a template of properties and methods");

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  const myCar = new Car("Ford", 2014);
  console.log("My car is " + myCar.age() + " years old.");
  class emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

}
const emp1 = new emp("Geek1", "25 years");
const emp2 = new emp("Geeks2", "32 years");
console.log(emp1.name + " : " + emp1.age);
console.log(emp2.name + " : " + emp2.age);


class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    login(){
        return(`hi ${this.name}
        you are logged in`);
    }
    logout(){
        return(`hi ${this.name}
        you are logged out`);
    }
}
let user1=new User("mani",20)
let user2=new User("malar",22)
console.log(user1.login());
console.log(user2.logout());

console.log("*******************************");
console.log("callback");
// oru func ku innoru func name  ye parameter ah thararathu
// tha callback function
function hii(name){
    console.log("hii",name);
}
// function hello(name){
//     let haeding=document.querySelector('h1')
//     haeding.innerHTML='hello'+name
// }
function great(callback){
    console.log(callback);
    callback("mani")
}
great(hii)
//great(hello)
great(name=>{
    let haeding=document.querySelector('h1')
    haeding.innerHTML='hello'+name
})
console.log("***********************");
console.log("static");
console.log("common variables/methods for class accessed with class name");
class User1{
    static numOfUsers=0; 
    constructor(name,age){
        //instance
        this.name=name;
        this.age=age;
        User1.numOfUsers++;
    }
    login(){
        return(`hi ${this.name}
        you are logged in`);
    }
    logout(){
        return(`hi ${this.name}
        you are logged out`);
    }
    static disTotalUsers(){
        console.log("total num of users in class: "+User1.numOfUsers++);

    }
}
let user11=new User1("mani",20)
let user22=new User1("malar",22)
console.log(user11.login());
console.log(user22.logout());
User1.disTotalUsers()


console.log("*****************************");
console.log("inheritance");
console.log("aquring propertics of a base class");
//base class,parent class, super class
class User2{
    static numOfUsers=0; 
    constructor(name,age){
        //instance
        this.name=name;
        this.age=age;
        User1.numOfUsers++;
    }
    login(){
        return(`hi ${this.name}
        you are logged in`);
    }
    logout(){
        return(`hi ${this.name}
        you are logged out`);
    }
    static disTotalUsers(){
        console.log("total num of users in class: "+User1.numOfUsers++);

    }
}
let user111=new User2("mani",20)
let user222=new User2("malar",22)
console.log(user111.login());
console.log(user222.logout());
User2.disTotalUsers()
// derived class, child class,sub class
class PaidUser extends User2{
    constructor(name,age){
        //instance
        // this.name=name;
        // this.age=age;
        super(name,age)
        this.storage=100
    }
    msg(){
        console.log("yoy have 100 gb free data");
        return this // it isimportant to acces method chainning
    }
    //overriding
    login(){
        console.log("tq for yr support")
        return this //c// it isimportant to acces method chainning
    }
}
let puser1=new PaidUser("menaga",22)
console.log(puser1.login());
console.log(puser1.msg());
console.log("***************************************");
console.log("method chainning");
puser1.login().msg()

console.log("********************************************");
console.log("prototype");
//prototype la method kodutha easy ya irukkum 
function Client(name,age){
    this.name=name
    this.age=age
}
Client.prototype.login=function(){
    console.log("hi",this.name);
    console.log("u r logged in");
}
let client1=new Client("anitha",22)
client1.login()

console.log("***********************************************");
console.log("get & set");
//value ah get panna
// value ah mathi vera val set panna
class Temperature{
    constructor(temp){ //get,set use panna private variable use pannanum
        this._temp=temp //private variable
    }
    get temp(){ //var name,func name ore mari irukka kudathu 
        return `${this._temp} deg cesius`

    }
    set temp(temp){ //val set pannarathukku munnadi val correct ah nu check panni set pannanum
        if(temp>100)
        temp=100
    this._temp=temp
    }
}
let temp1=new Temperature(23)
//temp1._temp=150 //private var velia ippadi use panna kudathu
temp1.temp=150
console.log(temp1.temp);      








