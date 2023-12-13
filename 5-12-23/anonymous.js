console.log("anonymous");
console.log("it don't have a any func name");
let a="mani"
let b="malar";
(function(){
    console.log(`my first name is ${a}. my last name is ${b}`);
})
();
let control=function(){
    console.log(`my first name is ${a}. my last name is ${b} 
    i will used tha variable name then i call var name in function`);
}
control();
((val)=>{
    console.log(`now,i will use the ${val} funvtion. it is ES6 version`);
})
("arrow");

console.log("******************************");
console.log("error handiling");
let num1
try{
    num1=prompt("enter a number")
    if(num1==="")
    throw "con't be empty"
     if(isNaN(num1))
     throw "enter a valid number"
    console.log(num1*3);
}
catch(e){
    console.log(e);
}
finally{
      console.log("finish");
}


   
console.log("URI (Uniform Resource Identifier) Error");
try {
    decodeURI("%%%");
  }
  catch(err) {
    console.log(err.name); 
    console.log(err.message);
  }

  console.log("Type Error");
  let num = 1;
  try {
    num.toUpperCase();
  }
  catch(err) {
    console.log(err.name);
    console.log(err.message); 
  }

  console.log("Syntax Error");
  try {
    eval("alert('Hello)");
  }
  catch(err) {
    console.log(err.name); 
    console.log(err.message);
  }

console.log("Reference Error");
let x = 5;
try {
  x = y + 1;
}
catch(err) {
  console.log(err.name); 
  console.log(err.message);
}

console.log("Range Error");

let numb = 1;
try {
  numb.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name); 
  console.log(err.message);
}

try {
    throw new Error('Yeah... Sorry');
}
catch (e) {
    console.log(e);
}

try {
    dadalert("Welcome Fellow Geek!");
}
catch (err) {
    console.log(err);
}

// try {
//     // Code to run
//     [break;]
//    } catch ( e ) {
//     // Code to run if an exception occurs
//     [break;]
//    }[ finally {
//     // Code that is always executed regardless of 
//     // an exception occurring
//    }]


console.log("**************************************************************");
console.log("set time out");
setTimeout(() => {
    console.log(`happy`);
}, 5000);

setTimeout(() => {
    console.log(`
    birth day`);
}, 6000);

let m=3,n=5;
let addition=setTimeout(add,3000,m,n) //setTimeout(handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]): number
function add(){
    console.log(`${m} + ${n} = ${m+n}`);
}

setTimeout(() => {
  document.write(`happy`);
}, 5000);

setTimeout(() => {
  document.write(`
  birth day`);
}, 6000);



let int1=setInterval(()=>{
  document.write("hii","<br>"),3000})
setInterval(()=>console.log("hii"),3000)
let interval=setInterval(()=>console.log("hello"),3000)

clearTimeout(addition)
clearInterval(interval)
clearInterval(int1)

console.log("*******************************************************");
console.log("JavaScript Date objects");
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days=["sunday","monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let d=new Date()
console.log(d);
console.log("Date Get Methods:");
console.log("year:" ,d.getFullYear());
console.log( "date:",d.getDate());
console.log("day:",days[d.getDay()]);
console.log("hours:",d.getHours());
console.log("milli seconds:",d.getMilliseconds());
console.log("minits:",d.getMinutes());
console.log("month:",months[d.getMonth()]);
console.log("seconds:",d.getSeconds());
console.log("time:",d.getTime());
console.log("TimezoneOffset:",d.getTimezoneOffset());
console.log("UTCDate:",d.getUTCDate());
console.log("UTCDay:",days[d.getUTCDay()]);
console.log("UTCFullYear:",d.getUTCFullYear());
console.log("UTCHours:",d.getUTCHours());
console.log("UTCMilliseconds:",d.getUTCMilliseconds());
console.log("UTCMinutes:",d.getUTCMinutes());
console.log("UTCMonth:",d.getUTCMonth());
console.log("UTCSeconds:",d.getUTCSeconds());

console.log("Displaying Dates");
console.log("toDateString:",d.toDateString());
console.log("toISOString:",d.toISOString());
console.log("toLocaleDateString:",d.toLocaleDateString());
console.log("toJSON:",d.toJSON());
console.log("toLocaleString:",d.toLocaleString());
console.log("valueOf:",d.valueOf());
console.log("toUTCString:",d.toUTCString());
console.log("toTimeString:",d.toTimeString());
console.log("toString:",d.toString());


console.log("new Date(date string)");
let d1=new Date("October 13, 2014 11:13:00")
console.log(d1);

console.log("Set Date Methods");
console.log(d1.setDate(15));
console.log(d1.setFullYear(2024));
console.log(d1.setHours(24));
// console.log(d1.setMilliseconds(30));
// console.log(d1.setMinutes(30));
// console.log(d1.setMonth(2));
// console.log(d1.setSeconds(22));
console.log(d1.setTime(11));
console.log("new Date(year, month, ...)");
console.log("5 numbers specify year, month, day, hour, and minute:");
let d3=new Date(2018, 11, 24, 10, 33, 30, 0)
console.log(d3);
let d4=new Date("2021-03-25")
console.log(d4.getFullYear);
let d5=new Date(2018, 11, 24, 10, 33)
console.log(d5);
let d6=new Date(2018, 11, 24, 10)
console.log(d6);
let d7=new Date(2018, 11, 24)
console.log(d7);
let d8=new Date(2018, 11)
console.log(d8);

console.log("One and two digit years will be interpreted as 19xx:");
let d9=new Date(99, 11, 24)
console.log(d9);
let d10=new Date(9, 11, 24)
console.log(d10);

console.log("new Date(milliseconds) creates a new date object as milliseconds plus zero time:");
let d11=new Date(100000000000)
console.log(d11);
let d12=new Date(86400000)
console.log(d12);

let d13=new Date(24 * 60 * 60 * 1000)
console.log(d13);



console.log("****************************");
console.log("console.time()");
console.time();
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd();

console.time("test1");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd("test1");

console.time("for loop");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd("for loop");

let i = 0;
console.time("while loop");
while (i < 5) {
  console.log(i);
  i++;
}
console.timeEnd("while loop");

console.table(["Audi", "Volvo", "Ford"]);

//The Promise object represents the
// eventual completion (or failure)
// of an asynchronous operation )

function tatkalBook(){
  return new Promise((resolve,reject) => {
      let bookingSuccess = 0
      if (bookingSuccess)
          resolve(850)
      else   
          reject() 
  })
}

tatkalBook().then((amt)=>console.log(`Thanks buddy! I have trasferred Rs.${amt}`))
.catch(()=>console.log("Thanks for trying! I will book a bus"))


function tossCoin(){
  return new Promise((resolve,reject)=>{
      //0-head(success) 1 -tail(failure)
      const rand = Math.floor(Math.random()*2)
      if(rand==0)
          resolve()
      else
          reject()
  })
}

tossCoin()
.then(()=>console.log("Congrats!Its head!You won"))
.catch(()=>console.log("Sorry!You lost!Its"))


let reachA = new Promise((resolve,reject)=>{
  const reached = false
  if(reached)
      setTimeout(resolve,3000,"Vidya reached")
  else
      reject("Vidya not reached")
})

let reachB = new Promise((resolve,reject)=>{
  const reached = true
  if(reached)
      setTimeout(resolve,1000,"Ramya reached")
  else
      reject("Ramya not reached")
})

let reachC = new Promise((resolve,reject)=>{
  const reached = true
  if(reached)
      setTimeout(resolve,2000,"Latha reached")
  else
      reject("Latha not reached")
})

Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//promise - pending,resolved,rejected (settled)
Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.any([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.race([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//async - always returns a promise
async function fn(){
  return 'hello'
}

console.log(fn())

fn().then((msg)=>console.log(msg))

async function asyncstatus(){
  try{
      console.log('hi..')
      res = await reachA
      console.log(res)
      console.log('bye')
  }
  catch(err){
      console.log(err)
  }
}

asyncstatus()






