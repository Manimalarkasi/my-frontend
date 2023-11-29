document.write("today topic is : ",str)
console.log("today topic is : ",str);
console.log("***************************************");
console.log("JS Number Methods");
var nn1=229.39999999
var nn2=45767.75379
let n2=nn2.constructor
console.log("constructor is : ",n2);
var nn3=new Number()
nn3=2345.55555
var nn4=12344e8
var nn5=23456e-5
let s="566.674443"
console.log(nn1,nn2,nn3,nn4,nn5);
console.log(nn1.toExponential(6));//toExponential(fractionDigits?: number | undefined): string
console.log(nn2.toExponential(3));
console.log(nn5.toExponential(3));
console.log(nn1.toFixed(6));//toFixed(fractionDigits?: number | undefined): string
console.log(nn2.toFixed(3));
console.log(nn5.toFixed(2));
console.log(nn1.toLocaleString());//toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined): string
console.log(nn2.toLocaleString());
console.log(nn1.toPrecision(4));//toPrecision(precision?: number | undefined): string
console.log(nn5.toPrecision(2));
console.log(nn1.toString());//toString(radix?: number | undefined): string
console.log(nn5.toString());
console.log(nn1.valueOf());//valueOf(): number
document.write(String(nn1));//String(value?: any): string

console.log(parseInt(s));
console.log(parseInt("3333.66666666666666"));
console.log(parseInt("66666 99999"));
console.log(parseInt("56 time"));
console.log(parseInt(" time 66"));
console.log(parseFloat(s));
console.log(parseFloat("22333"));
console.log(parseFloat("333 10"));
console.log(parseFloat("1223"));
console.log(parseFloat("66 year"));
console.log(parseFloat("year 66"));
console.log(Number(s));
console.log(Number("56 time"));
console.log(Number("year 66"));
console.log(Number("333.444"));

console.log("Number Object Methods");
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));
console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("years 10"));
console.log(Number.parseInt("-10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("years 10"));
console.log(Number.parseInt("10 20 30"));

console.log("JS Number properties");
console.log(Number.EPSILON);//property) NumberConstructor.EPSILON: number
console.log(Number.MAX_SAFE_INTEGER);//(property) NumberConstructor.MAX_SAFE_INTEGER: number
console.log(Number.MAX_VALUE);//(property) NumberConstructor.MAX_VALUE: number
console.log(Number.MIN_VALUE);//property) NumberConstructor.MIN_VALUE: number
console.log(Number.MIN_SAFE_INTEGER);//(property) NumberConstructor.MIN_SAFE_INTEGER: number
console.log(Number.MAX_SAFE_INTEGER);//(property) NumberConstructor.MAX_SAFE_INTEGER: number
console.log(Number.NEGATIVE_INFINITY);//(property) NumberConstructor.NEGATIVE_INFINITY: number
console.log(Number.POSITIVE_INFINITY);//(property) NumberConstructor.POSITIVE_INFINITY: number
console.log(Number.NaN);//(property) NumberConstructor.NaN: number
function showValue()
{
 var smallNumber = (-Number.MAX_VALUE) * 2
 if (smallNumber == Number.NEGATIVE_INFINITY) {
 alert("Value of smallNumber : " + smallNumber );
 }
}
console.log(showValue());// it is same as POSITIVE_INFINITY
 console.log("prototype");
function man(name,age,gender){
      this.name=name;
      this.age=age;
      this.gender=gender;
}
let man1=new man("mani",20,"male")
man.prototype.dob="05-03-2003"
console.log(man1.name);
console.log(man1.age);
console.log(man1.gender);
console.log(man1.dob);
