

//stataments
//if else
var age = 20;
if( age > 18 ){
 document.write("<b>Qualifies for driving</b>");
}

let a=10
let b=100
if(a==b)
console.log(1);
else
console.log(0);
let hrs= new Date();
console.log(hrs);
let time=hrs.getTime();
//let time=new date().gettime();
//else if
if(time>=0 && time<=12){
    console.log("morning");
}
    else if(time>12 && time<16){
        console.log("noon");
    }
    else{
        console.log("night");
    }

    //switch
    let constant='r';
    switch(constant){
        case 'a':
            console.log("vowel");
            break;
        case 'e':
            console.log("vowel");
            break;
        case 'i':
            console.log("vowel");
            break;
        case 'u':
            console.log("vowel");
            break;
        default:
            console.log("consotant");
            break;
        
    }
    let alphet="e";
    switch(alphet){
        case 'a':
        case 'e':
        case 'i':
        case 'u':
            console.log("vowel");
            break;
        default:
            console.log("consotant");
            break; 
    }
    let mark=97;
    switch(true){
        case (mark>=90):
            console.log("aultra pass");
            break;
        case (mark>=30):
            console.log("pass");
            break;
        case (mark<30):
            console.log("fail");
            break;
    }
    let amount=6000;
    switch(true){
        case (amount>10000 && amount<60000):
            console.log("bye apple mobile");
            break;
        case (amount>=10000):
            console.log("bye android mobile");
            break;
        case (amount>5000 && amount<9000):
            console.log("you con't afford mobile phone now");
            break;
    }

    //for
    for(let i=0;i<=5;i++){
        console.log("number" ,i);
    }
    for(let i=0;i<=5;i++){
        if(i%2!==0){
            console.log("odd number" ,i);
        }
        
    }
    for(let i=10;i>=1;i--){
        if(i%2==0){
            console.log("even number" ,i);
        }
    }
    let t=4
    let n=20
    for(i=1;i<=n;i++)
   {
       console.log(i+'*'+t+'='+i*t); 
   }

   //while
   let x = 10;
   while(x>=1){
    if(x%2==0){
        console.log("even number" ,x);
    }
    x--;
}

//do-while
let y = 10;
   do{
    if(y%2!==0){
        document.write("odd number" ,y);
    }
    y--;
}while(y>=1);

//for-in
let details={
    age:20,
    gender:"male",
    address:"17,arthanari street,velanatham,attayampatti,salem(dt)637501",
    siblings:{
        bro:"anna",
        sis:"thangachi"
    }
    /*kill: function(){
        let msg=`my name is ${this.nom}malar. my age is ${this.age}.i am a ${this.gender}.my address is ${this.address}
         and my siblings are ${this.siblings}`;
         document.write(msg);
    }*/
   
}
//details.kill();
/*for(let key/varname in objname){
    console.lo("key:",key)
    console.lo("key:",objname[key])
}*/
for(let key in details){
    console.log("key:",key);
    console.log("key:",details[key]);
    console.log(key+":",details[key]);
}
let colors=[45,56,67,78]
for(let index in colors){
    console.log(colors[index]);
    console.log(index); 
}
for(let color of colors){
    console.log("color"+colors);
    console.log(color); 
}
let nom="mani"
console.log("my name is, " + nom +"malar");
console.log(`my name is ${nom} malar`);//ajanta method

 
//greeting();
    

