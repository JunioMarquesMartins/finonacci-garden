let elCanvas = document.createElement('canvas'),
    ctx = elCanvas.getContext('2d'),
    canvasWidth = elCanvas.width = window.innerWidth,
    canvasHeight = elCanvas.height = window.innerHeight,
    timeIncrement = 1,
    speed = 5,
    rango = 4,
    strokeWidth = 1,
    colorOne = '#54971c', colorTwo = '#488317', colorTree = '#2f6d0c',
    colorFour = '#366030', colorFive = '#6fc923',
    b, x, y, _x, _y,
    time = 1 / 60;
document.body.appendChild(elCanvas);
let numRepeat = new Array(600)
  .fill(0)
  .map((_, index) => index++);

const anim = () => {
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  let colors = [colorOne, colorTwo, colorTree, colorFour, colorFive];
  colors.forEach((el, index) => {
    x = 0;
    ctx.beginPath();
    numRepeat.forEach((_, indice) => {
      x -= rango * Math.sin(1);
      y = x * Math.sin(index + `${speed}.0` * timeIncrement + x / 100) / 1;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (indice * 2) * Math.PI / 3;
      ctx.lineWidth = `.${strokeWidth}`;
      ctx.arc(canvasWidth / 2 - _x, canvasHeight / 2 - _y, 0, 0, 2 * Math.PI);
    });
    ctx.strokeStyle = colors[index];
    ctx.stroke();

  });
  timeIncrement += time;
  window.requestAnimationFrame(anim);
};
anim();
window.addEventListener('resize', function () {
  elCanvas.width = canvasWidth = window.innerWidth;
  elCanvas.height = canvasHeight = window.innerHeight;
}, false);
// Control data gui
let dataControl = {
  speed: 5,
  rango: 4,
  strokeWidth: 1,
  colorOne: '#54971c',
  colorTwo: '#ffffff',
  colorTree: '#2f6d0c',
  colorFour: '#366030',
  colorFive: '#6fc923',
};
let gui = new dat.GUI();
gui.add(dataControl, 'speed', 1, 10).onChange(function (newValue) {
  let newSpeed = parseInt(newValue, 10);
  speed = newSpeed;
});
gui.add(dataControl, 'rango', 1, 400).onChange(function (value) {
  let newRango = parseInt(value, 10);
  rango = newRango;
});
gui.add(dataControl, 'strokeWidth', 1, 9).onChange(function (value) {
  let newStroke = parseInt(value, 10);
  strokeWidth = newStroke;
});
gui.addColor(dataControl, 'colorOne').onChange(function (color) {
  colorOne = color;
});
gui.addColor(dataControl, 'colorTwo').onChange(function (color) {
  colorTwo = color;
});
gui.addColor(dataControl, 'colorTree').onChange(function (color) {
  colorTree = color;
});
gui.addColor(dataControl, 'colorFour').onChange(function (color) {
  colorFour = color;
});
gui.addColor(dataControl, 'colorFive').onChange(function (color) {
  colorFive = color;
});
