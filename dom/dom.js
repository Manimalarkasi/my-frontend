console.log(window);
window.alert("hii")
//window.conform("mani")

console.log("window.object.");

window.moveTo(500,100)
window.resizeTo(1000,500)
console.log(window);
console.log(window.innerHeight,window.innerWidth);
//window.open("https://google.com") //another window is opaned
let name=window.prompt("enter your name:")
console.log(name);
//window.print('msg')
console.log(console);
console.error(console);
console.warn(console);
console.debug(console);
console.table(console);
console.log("browser object model");
console.log("screen,location,histry,navigator");
console.log(window.screen);
console.log(screen.height);
console.log(screen.width);
console.log(window.location);
console.log(location.host);
window.setInterval(()=>window.document.title="dom",3000)
//window optional
    //setInterval(()=>location.href="https://google.com",3000)  //mostly itha tha use pannuvanga
   // setInterval(()=>location.assign("https://udemy.com"),3000)
if(location.protocol==="http:"){
    console.log("unsequered : you are browsing http:");
}
else{
    console.log("sequered : you are browsing https:");
}

console.log("hitry object");
console.log(history);

console.log(history.forward(1));
console.log(history.go(1));
console.log("navigator object");
console.log(navigator);
console.log(navigator.appVersion);
console.log(navigator.appName);
console.log(navigator.product);
console.log(navigator.cookieEnabled);

console.log("DOM");
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.dir(document.head);
console.log(document.body);
console.log(document.links);
console.log(document.forms);
console.log(document.all);//elements
console.log(document.xss);
console.log(document.cookie);
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();












