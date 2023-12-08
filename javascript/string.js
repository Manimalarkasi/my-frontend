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
//console.log(str1.splice(3,5,"ee"));//Array.splice(start: number, deleteCount?: number | undefined): T[]
console.log(str1.slice(4,12));//lice(start?: number | undefined, end?: number | undefined): string
console.log(str1.split(""));//split(splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]
console.log(str1.substring(3,19));//substring(start: number, end?: number | undefined): string
console.log(str1.toLocaleLowerCase());//toLocaleLowerCase(locales?: string | string[] | undefined): string
console.log(str1.toLocaleUpperCase());//toLocaleUpperCase(locales?: string | string[] | undefined): string
console.log(str1.toLowerCase());//toLowerCase(): string
console.log(str1.toUpperCase());//toUpperCase(): string
console.log(str1.valueOf());//valueOf(): string
console.log(str1.concat(str2));
console.log("********************************");