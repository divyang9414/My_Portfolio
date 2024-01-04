
var canvas = document.getElementById('myCanvas');
var b = canvas.getContext('2d');
window.devicePixelRatio=166;

var w = 99.9;
var h = 97;
canvas.style.width = w + "%";
canvas.style.height = h + "vh";

const dpr = window.devicePixelRatio;
myCanvas.width = w * dpr;
myCanvas.height = h * dpr;

// BOXES
b.scale(dpr/10, dpr/10); //adjust this!
b.fillRect(100, 100, 200, 200);
b.globalCompositeOperation='destination-over';
// b.globalAlpha = 0.6;
b.fillStyle = "blue";
b.fillRect(200, 200, 200, 200);
b.globalCompositeOperation='destination-over';
// b.globalAlpha = 0.2;
b.fillStyle = "red";
b.fillRect(300, 300, 200, 200);

//LINES
b.beginPath();
b.moveTo(100, 300 );
b.lineTo(00, 500);
b.stroke();


console.log(canvas);