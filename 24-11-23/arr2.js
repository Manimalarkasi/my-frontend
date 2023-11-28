console.log("array methods");
console.log("add ele");
console.log(`unshift
             push
             splice`);
console.log("dei ele");
console.log(`shift
             pop
             splice`);
console.log("finding an ele");
console.log(`indexof
             lastindexof
             includes(value)
             find((pram)=>return)
             findindex((pram)=>return)`);
console.log("empty arr");
console.log(`colors=[] //1
              colors.length=0 //2
             colors.splice(0,colors.length)//3
while (colors.length) {    //4
    colors.pop()
}
console.log(colors);`);
console.log("combining &extracting arr");
console.log(`concat
          slice`);
console.log("spread operator [...arr/obj name");
console.log("itrating ele");
console.log(`for..of
             for..in
             foreach()`);
console.log("joinng&split");
console.log(`join(seperatot)
             split(seperatot)`);
console.log("sorting an arr");
console.log(`sort()
             reverce()
             sort(()=>logic)`);
console.log("testing an arr");
console.log(`every() ->//every value is satisfy the logic it return true
             some()-> any one or 2 values statify the logic it return true
             itreturn boolean value`);
console.log(`filter arr
              filter(()=>{})`);















let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
document.write(colors)








let numbers=new Array()//Array(arrayLength?: number | undefined): any[]
numbers[0]="one"
numbers[1]="two"
numbers[2]="three"
numbers[3]="four"
numbers[4]="five"
numbers[5]="six"



console.log("****************","<br>");
console.log("empty arr","<br>");
console.log(colors);
//colors=[] //1
// colors.length=0 //2
//colors.splice(0,colors.length)//3
while (colors.length) {
    colors.pop()
}
console.log(colors);
let conc=colors.concat(numbers)
console.log(conc);
console.log(conc.slice(2,6))



let student=[
    {id:11591,name:"mani",},
    {id:11590,name:"malar"},
    {id:11592,name:"menaga"},
    {id:11593,name:"sruthi"},
    {id:11594,name:"hari"}
]
let s1=student.sort()
console.log(s1);

let s2=student.sort((a,b)=>{
    if(a.id<b.id) return -1
    if(a.id>b.id) return 1
    if(a.id==b.id) return 0
})
console.log(s2);

let s3=student.sort((a,b)=>{
    if(a.name<b.name) return -1
    if(a.name>b.name) return 1
    if(a.name==b.name) return 0
})
console.log(s3);

for(let i of student){
    console.log(i);
}
for(let i in student){
    console.log(i);
}
for(let i in student){
    console.log(student[i]);
}
console.log(student);
student.forEach((element,index,student) => { //callbackfn(value: { id: number; name: string; }, index: number, array: { id: number; name: string; }[]): void
    console.log(index,element);
});

student.every((value,index,array)=>{
    console.log("values:",value);
    console.log("index:",index);
    console.log("array:",array);
})//predicate(value: { id: number; name: string; }, index: number, array: { id: number; name: string; }[]): value is { id: number; name: string; }

let s4=student.every((value,index,array)=>{
    return value.id>=5
})
console.log(s4);//every value is satisfy the logic it return true

let s5=student.some((value,index,array)=>{
    return value.id>=2
})
console.log(s5);//any one or 2 values statify the logic it return true

let s6=student.filter((value,index,array)=>{
    return value.id<=11592
})
console.log(s6)
// let arr=[222,668];
//  function apply(a,b){
//     return a+b;
//  }
// apply.function name(params) {
    
// }apply(arr);
// document.write()

