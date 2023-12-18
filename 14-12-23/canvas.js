const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");
ctx.beginPath()
ctx.shadowColor = "red";
ctx.shadowOffsetY = 25;
ctx.shadowBlur = 10;
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
//result.innerText = ctx.isPointInStroke(0,0);
//ctx.traslate(10,10)
 //ctx.clip();

const hi = document.getElementById("hi");
const tx = hi.getContext("2d");
tx.font = "48px serif";
tx.fillText("Hi!", 250, 50);
tx.direction = "rtl";
tx.fillText("Hi!", 300, 130);
tx.translate(110, 30);
tx.setTransform(1, 0.8, 0.5, 1, 0, 0);
tx.lineTo(100,50)
// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//       ctx.fillStyle = `rgb(
//           ${Math.floor(255 - 42.5 * i)},
//           ${Math.floor(255 - 42.5 * j)},
//           0)`;
//       ctx.fillRect(j * 25, i * 25, 25, 25);
//     }
//   }

// // Get the stream
// const stream = canvasElt.captureStream(25); // 25 FPS

// // Do things to the stream
// // E.g. Send it to another computer using an RTCPeerConnection
// //      pc is an RTCPeerConnection created elsewhere
// stream.getTracks().forEach((track) => pc.addTrack(track, stream));

const house = document.getElementById("my-house");
const how = house.getContext("2d");
// Set line width
how.lineWidth = 10;

// Wall
how.strokeRect(75, 140, 150, 110);

// Door
how.fillRect(130, 190, 40, 60);

// Roof
how.beginPath();
how.moveTo(50, 140);
how.lineTo(150, 60);
how.lineTo(250, 140);
how.closePath();
how.stroke();
how.translate(500,100)

const ca = document.getElementById("ca");
const c = ca.getContext("2d");

// Moved square
c.translate(110, 30);
c.fillStyle = "red";
c.fillRect(10, 10, 80, 80);

// Reset current transformation matrix to the identity matrix
c.setTransform(1, 0, 0, 1, 0, 0);

// Unmoved square
c.fillStyle = "gray";
c.fillRect(10, 10, 80, 80);

const vas = document.getElementById("vas");
const x = vas.getContext("2d");
x.shadowColor = "red";
x.shadowOffsetY = 15;
x.shadowBlur = 10;
x.fillStyle="blue"
x.transform(1, 0.2, 0.8, 1, 0, 0);
x.fillRect(100, 10, 100, 100);


let my=document.getElementById("my")
let m=my.getContext("2d")
m.beginPath()
m.shadowColor = "green";
m.shadowOffsetY = 15;
m.shadowOffsetX = 15;
m.shadowBlur = 10;
m.fillStyle="yellow";
m.fillRect(0,0,50,69)

const s = document.getElementById("s");
const n = s.getContext("2d");

n.moveTo(90, 130);
n.lineTo(90, 25);
n.lineTo(150, 80);
n.lineTo(205, 25);
n.lineTo(210, 130);
n.lineWidth = 15;
n.stroke();

let line=document.getElementById("line")
let li=line.getContext("2d")
li.beginPath()
li.lineTo(20, 13)
li.setLineDash([5, 15]);
li.scale(2, 2);
li.setTransform(2, 0.8, -0.5, 1, 40, 10)
li.fillStyle="red"
//li.lineTo(500,500)
li.stroke()
li.rotate(50)
li.fillRect(40,50,90,70)
//li.scrollPathIntoView();

//li.fillStyle="blue"
li.beginPath()
li.fill()
//li.lineTo(20, 13)
li.roundRect(100,100,80,50,4)
// li.stroke()
// li.beginPath()
li.arc(100,300,60,50,60)
li.stroke()

li.beginPath()
li.fill()
li.quadraticCurveTo(230, 30, 50, 100);
li.stroke()
