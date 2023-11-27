console.log("variables");
let aa=2
aa=6 //change value
let a1=aa.constructor
console.log("aa constructor is :",a1 );
var bb=4
var bb=7 //it is redeclared
let b1=aa.constructor
console.log("bb constructor is :",b1 );
var c=aa+bb
let l=aa+bb
let c1=aa.constructor
console.log("c constructor is :",c1 );
console.log("the addtion is : "+c);
function add()
{
    console.log("the addtion is : ",l);
}
console.log(add());
//let,const is local scope,it not allow to hoisting,it not be redeclare
// var is global scope , it allow to hoisting(value assing then declar vartype),it allow to redeclare

{
    let q="mani"
    let w="malar"
    let e=q+w
    var r=q+w
    console.log("the string is : ",e);
}

console.log("the string is : ",r);
//console.log("the string is : ",e);
console.log("hoisting");
t=4;
console.log(t);
var t;
//let t


console.log("******************************************************************");
console.log("datatype");
let no=45;//integer
let nam="malar";//string
let nam1='mani';
let isupper=false;//boolean
let car=null;//null
car="red";
let num=undefined;//undefined
let xxxx=123e6//Exponential Notation
let xx=123e-5
let xxx=BigInt(1112223334444555666777889990000)
const sym= Symbol('uniqueSymbol')//symbol
console.log(no,nam,nam1,isupper,car,xxxx,xx,xxx,sym);
console.log(typeof no);//number
console.log(typeof nam);//string
console.log(typeof nam1);//string
console.log(typeof isupper);//boolean
console.log(typeof car);//object
console.log(typeof xxxx);//number
console.log(typeof xx);//number
console.log(typeof xxx);//bigint
console.log(typeof sym);//symbol
console.log(typeof t);//number
console.log("object");
let details={
    person:"malar",
    age:20,
    gender:"male",
    address:"17,arthanari street,velanatham,attayampatti,salem(dt)637501",
    siblings:{
        bro:"anna",
        sis:"thangachi"
    }
}
//dot notation
console.log(details.person);
details.age=23;
console.log(details.age);
console.log(details.gender);
console.log(details.address);
console.log(details.siblings);
console.log(details.siblings.bro);
//brocket notation
console.log(details['age']);

let date=new Date()
console.log(date);
let dd=new Object();
dd.col="red";
dd.col1="green";
dd.col2="oreng";
dd.col3="yellow";
let colour={...dd,...details}
    console.log(colour);

console.log(dd.col);
console.log(colour);


//array
let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
console.log(colors.length)//(arrname.functions) 


console.log("********************************");
console.log("string methods & search");
console.log(`searchmethod
            index
            indexof
            match
            matchall
            search
            endswith
            startswith
            `);
let str1="welcome to my world"
let str2="my name is manimalar"
let numb=77
let h = new String("John");
console.log(h);
console.log(h.length);
console.log(str1.charAt(6));//charAt(pos: number): string
console.log(str1.charCodeAt(6));//charCodeAt(index: number): number
console.log(str1.codePointAt(6));//(method) String.codePointAt(pos: number): number | undefined
console.log(str1.concat(str2));//concat(...strings: string[]): string
console.log(str1.endsWith("world"))//endsWith(searchString: string, endPosition?: number | undefined): boolean
console.log(str1.endsWith("my"))
console.log(str1.startsWith("my"))
console.log(str1.startsWith("to"))
console.log(str1.includes("my"));//method) String.includes(searchString: string, position?: number | undefined): boolean
console.log(str1.lastIndexOf("to"));
console.log(str1.indexOf("my"))//(method) String.indexOf(searchString: string, position?: number | undefined): number
console.log(str1.match("me"))//match(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null
///m/,/m/g,/m/gi
console.log(str1.matchAll("me"))
console.log(str1.localeCompare());//method) String.localeCompare(that: string): number (+1 overload
console.log(str1.normalize())//normalize(form?: string | undefined): string
console.log(str1.padEnd(29,"*"));//padEnd(maxLength: number, fillString?: string | undefined): string
console.log(str1.padStart(29,"#"));//padStart(maxLength: number, fillString?: string | undefined): string
console.log(str1.repeat(5));//repeat(count: number): string
console.log(str1.replace("world","home"));//replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string
console.log(str1.search("my"));//method) String.search(regexp: string | RegExp): number (+1 overload)
console.log(str1.slice(4,12));//lice(start?: number | undefined, end?: number | undefined): string
console.log(str1.split("+"));//split(splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]
console.log(str1.substring(3,19));//substring(start: number, end?: number | undefined): string
console.log(str1.toLocaleLowerCase());//toLocaleLowerCase(locales?: string | string[] | undefined): string
console.log(str1.toLocaleUpperCase());//toLocaleUpperCase(locales?: string | string[] | undefined): string
console.log(str1.toLowerCase());//toLowerCase(): string
console.log(str1.toUpperCase());//toUpperCase(): string
console.log(str1.valueOf());//valueOf(): string

console.log("********************************");
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





