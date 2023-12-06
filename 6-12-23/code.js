import * as c from './async.js'
let car1=new c()
car1.drive()



















console.log("promise");
// function tatkalBook(){

// }
//Promise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): Promise<any>
let tatkalBook=new Promise((resolve,reject)=>{
    let bookingSuccess=false
    if(bookingSuccess)
        resolve(333)
    else
        reject()
})
//PromiseLike.then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined,
// onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): PromiseLike<TResult1 | TResult2>
tatkalBook.then((amt)=>console.log(`thanks for bookking transfer Rs:${amt}`))
.catch(()=>{console.log(`try next time`)})

console.log("promise la 2 call back() irukku 1.resolve(true) 2.reject(false)");
console.log("ithukku code->success na resolve na obj.then()method ,failure na reject na .catch()method la arrow func use pannanum");
console.log("resolve na then() func , reject na catch func");
console.log("the promise object represent the enentual completion (or failure of an asynchronous operation)");

// function tosscoin(){
//     return new Promise((resolve,reject)=>{
//     //1-head 0 tail
//     let rand=Math.floor(Math.random()*2)
//     if(rand==0)
//     resolve()
//     else
//     reject()
// })
// }

// tosscoin().then(()=>console.log("congrats"))
// .catch(()=>console.log("sorry you lost"))

//console.log("then kulla innoru promise() kodukka mudiyum ,athukk pathila func's um use pannalam athu correct ah irukkathu atha func hell un solluvanga");


let reach1=new Promise((resolve,reject)=>{
    let reached=1
    if(reached)
    setTimeout(resolve,3000,"1 i'm reached")
    else
     reject("i'm not reached")
})
let reach2=new Promise((resolve,reject)=>{
    let reached=1
    if(reached)
    setTimeout(resolve,4000,"2 i'm reached")
    else
     reject("i'm not reached")
})
let reach3=new Promise((resolve,reject)=>{
    let reached=1
    if(reached)
    setTimeout(resolve,5000," 3 i'm reached")
    else
     reject("i'm not reached")
})
let reach4=new Promise((resolve,reject)=>{
    let reached=1
    if(reached)
    setTimeout(resolve,1000,"4 i'm reached")
    else
     reject("i'm not reached")
})
let reach5=new Promise((resolve,reject)=>{
    let reached=1
    if(reached)
    setTimeout(resolve,2000,"5 i'm reached")
    else
     reject("i'm not reached")
})
//all(values: readonly unknown[] | []): Promise<[] | unknown[]>
//PromiseConstructor.all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>
//PromiseConstructor.all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>
// Promise.all([reach1,reach2,reach3,reach4,reach5])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))

// Promise.allSettled([reach1,reach2])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))

console.log("async - always return a promise");
console.log("async awiat");
async function statuss(){
    try{
    console.log("hiii");
    result=await reach1
    console.log(result);
    console.log("bye");
    }
    catch(e){
        console.log(e);
    }
}
statuss()