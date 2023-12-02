console.log("array.map()");
let colors=[45,56,67,78]
colors[4]=79;
console.log(colors);
document.write(colors)
let index=0
let map=colors.map((value,index,array)=>{
    
while(index<colors.length)
{
    console.log(value%2==0);
    index++
}
console.log(index,value,array);
})

let map1=colors.map((value,index,array)=>{
    console.log(index,value,array);
    })
    console.log(map1);


console.log("filter()");
let filter=colors.filter((value, index, array)=>{
    return value%2==0;
})
console.log(filter);

console.log("reduce()");
let reduce=colors.reduce((previousValue, currentValue, currentIndex, array)=>
{
    return previousValue+currentValue
})
console.log(reduce);

let student=[
    
    {id:11590,name:"malar",sal:300},
    {id:11592,name:"menaga",sal:400},
    {id:11594,name:"hari",sal:600},
    {id:11593,name:"sruthi",sal:500},
    {id:11591,name:"mani",sal:200},
    
]
let reduce1=student.reduce((previousValue, currentValue, currentIndex, array)=>
{
    return previousValue+currentValue.sal
},0)//reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number
console.log(reduce1);

console.log("sort()");
let sort=colors.sort()
console.log(sort);

let sort1=student.sort((a,b)=>{
    if(a.id<b.id) return -1
    if(a.id>b.id) return 1
    if(a.id===b.id) return 0
})
console.log(sort1);


console.log("functions");
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

document.write("arow function","<br>");
let func= (nom,age)=>{//parameter
    return("my name is, " + nom +"malar. my age is "+age);
    }
// document.write(none("mani",20));//arguments
// document.write(none("pani",22))
document.write(func("mani",20))
document.write(func("pani",22))

console.log("shuffle an array");
let array=[1,2,3,4,5,6,7]
// Function to shuffle the array content
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    //return array.sort(() => Math.random() - 0.5);
    return array;
}

// Function to show the result
function show() {
    var arr = [1, 2, 3, 4, 5, 6, 7]
    var arr1 = shuffleArray(arr)

    document.write("After shuffling: ", arr1)
}
console.log(show());
show();


function shuffleArray1(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}
let a = [1,2,3,4,5];
console.log("Array before Shuffling", a);

console.log("Shuffling array");
shuffleArray1(a);

console.log("Array after Shuffling", a);

console.log("nestede function");
let result;
function add_two(a,b) {
   result = a+b;
}
function add_three(c) {
   add_two(2,5);
   result =result+c;
   return result;
}
let answer = add_three(8);
console.log(answer);


console.log("clouser");

function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();
 
console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());