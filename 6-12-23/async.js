console.log("async - always return a promise . ithu la promise  use psnnalam");
console.log(" promise la rosolve na normal function pothum ana reject na try&catch block thevai");
console.log("await is must be in async function");
console.log("async awiat");
async function fn(){
    return "hii"
}
console.log(fn());
fn().then((msg)=>console.log(msg))

let reach1=new Promise((resolve,reject)=>{
        let reached=0
        if(reached)
        setTimeout(resolve,3000,"1 i'm reached")
        else
         reject("i'm not reached")
    })

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

console.log("**********************************8");
console.log("module");
class Car{
    drive(){
        console.log("driving");

    }
}
function fillgas(){
    console.log("filling gas");

}
function rapair(){
    console.log("repairing");
}
// export default Car
// export {fillgas,rapair}







