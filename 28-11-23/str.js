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
console.log(str1.constructor);
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
//console.log(str1.splice(3,5,"ee"));//Array.splice(start: number, deleteCount?: number | undefined): T[]
console.log(str1.slice(4,12));//lice(start?: number | undefined, end?: number | undefined): string
console.log(str1.split("+"));//split(splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]
console.log(str1.substring(3,19));//substring(start: number, end?: number | undefined): string
console.log(str1.toLocaleLowerCase());//toLocaleLowerCase(locales?: string | string[] | undefined): string
console.log(str1.toLocaleUpperCase());//toLocaleUpperCase(locales?: string | string[] | undefined): string
console.log(str1.toLowerCase());//toLowerCase(): string
console.log(str1.toUpperCase());//toUpperCase(): string
console.log(str1.valueOf());//valueOf(): string
console.log(str1.concat(str2));
console.log(str1.replace("to","was"));
console.log("*************************************");
console.log("chaining method");
let n1="manimalar"
let n2=n1.charAt(3).toUpperCase().concat(str1,str2)
console.log(n2);
let n3=n1.charAt(3).toUpperCase().concat(str1,str2).charCodeAt()
console.log(n3);
console.log(n1.charCodeAt("i"));
console.log(n2.charCodeAt("I"));
console.log("************************");
console.log("if statement");
var age = 20; 
if( age > 18 ){ 
document.write("Qualifies for driving","<br>");
 }
 document.write("<hr>")
 var age = 15;
 if( age > 18 ){
 document.write("Qualifies for driving","<br>");
 }
else{
 document.write("Does not qualify for driving","<br>");
 }
document.write("<hr>")



 var book = "maths";
 if( book == "history" ){
 document.write("History Book","<br>");
 }
else if( book == "maths" ){
 document.write("Maths Book","<br>"); 
}
else if( book == "economics" ){ 
    document.write("Economics Book","<br>");
 }
else{
 document.write("Unknown Book","<br>");
 } 
 document.write("<hr>")


 let u
let y
function statement1(u,y){
if (u==y){
    document.write(u+" same no "+ y , "<br>",);
}
else if(u<y){
    document.write(u+" is lessthen "+y, "<br>",);
}
else if(u>y){
    document.write(u+" is greter then "+y, "<br>",);
}
else{
    document.write("unknown no","</br>",);
}}
console.log(statement1(200,50));
document.write("<hr>")



function mycheck() {
    let g = document.getElementById("GFG").checked;
    document.getElementById("sudo").innerHTML = g;
} 
function myGeeks() {
    let g = document.getElementById("GF").checked = true;
}
function Geeks() {
    let w = document.getElementById("GFG").checked = false;
}
document.write("<hr>")
document.write("switch","<br>")
function statement2(){
    let bg="o-";
    switch(bg){
        case 'o+':
            document.write("a kind heart","<br>",);
            break;
        case 'o-':
            document.write("a kindless heart","<br>",)
            break;
        case 'a+':
            document.write("a leader person","<br>",)
            break;
        case 'a-':
            document.write("a bold person","<br>",)
            break;
        case 'b-':
                document.write("a bold&kind person","<br>",)
                break;
        case 'b+':
            document.write("a imagin person","<br>",)
            break;
    }}
    console.log(statement2());
    document.write("<hr>")

console.log("********************************");
console.log("logical operator");
let a=20
let b=10
    console.log(a>b && a>=b);//and
console.log(a<b || a>=b);// or
console.log(!(a>b));// not

console.log("********************************");
document.write("while loop");
var i=1;
while(i<20){
    if(i %2 == 0){
        document.write("even no "+i,"<br>",)
    }
    i++
}
document.write("<hr>")