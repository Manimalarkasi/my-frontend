console.log("operators");
let x=5;
//x++;
x+=2
console.log(x)
let y=5;
//x++;
y-=2
console.log(y)
let z=5;
//x++;
z*=2
console.log(z)
let u=5;
//x++;
u/=2
console.log(u)
let v=5;
//x++;
v%=2
console.log(v)
//increament,decrement
let a=20
let b=10
console.log(a);
console.log(a++)
console.log(a)
console.log(++a)
console.log(a)
console.log(a--)
console.log(a)
console.log(--a)
console.log(a)
//comparision
console.log(a<b);
console.log(a<=b);
console.log(a>b);
console.log(a>=b);
console.log(a===b);
console.log(a!==b);
console.log('mani'<'malar');
console.log(a<"2");
console.log(true<1);
console.log(true==1);
console.log(true!=1);
console.log('1'===1)//strit equality
console.log('q'==='q');
console.log('1'==1);// loose equality
/*function ticket(age){
    if(age<=18){
        let type="adult";
    }else{
        let type="kid";
    }
}
ticket(33)*/
//conditional/ternary operator
let o=a<b ? 1:0;//condition ? true val : false val ;
console.log(o);
//logical

console.log(a>b && a>=b);//and
console.log(a<b || a>=b);// or
console.log(!(a>b));// not

//bitwise
//1 -> 00000001 -> 1
//2 -> 00000010 -> 2
//3 -> 00000011 -> 3
let linebreak="<br>"
console.log(1 | 2);//a+b
console.log(1 & 2);//a.b
console.log(1^2);
document.write("(a & b) => ");
result = (a & b);
document.write(result);
document.write(linebreak);

document.write("(a | b) => ");
result = (a | b);
document.write(result);
document.write(linebreak);

document.write("(a ^ b) => ");
result = (a ^ b);
document.write(result);
document.write(linebreak);

document.write("(~b) => ");
result = (~b);
document.write(result);
document.write(linebreak);

document.write("(a << b) => ");
result = (a << b);
document.write(result);
document.write(linebreak);

document.write("(a >> b) => ");
result = (a >> b);
document.write(result);
document.write(linebreak);


let colourr={...dd,...details}//spread operator
    console.log(colourr);
console.log("*****************************************************");
console.log("template literals");
let text=`i'm a software developer`
let text1=`hii
welcome to my world
my name is      manimalar`
let text2=`hiii
      probram
             all is well
                     all so bueatifull`
                     
console.log(text);
console.log(text1);
console.log(text2);
console.log(`the addtion is : ${c}`);
console.log(`the sum of ${a} & ${b} is ${a+b}`);
let qq="mani"
let ww="malar"
let ee=qq+ww
console.log(`the string 1 is ${qq} & string2 is ${ww} then concat string is ${ee} 
then another way is ${qq+ww}`)


