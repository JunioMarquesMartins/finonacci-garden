var c = document.createElement('canvas'),
    ctx = c.getContext('2d'),
    w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    t = 1, num = 600, 
    s, a, b, 
    x, y, _x, _y,
    time = 1 / 60; 
document.body.appendChild(c);
var anim = function() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  //colors = ["#B373B2", "#DE53DC", "#F3C7F2", "#FD98C9"];
  var colors = ["#54971c", "#488317", "#2f6d0c", "#366030", "#6fc923"];
  for (var i = 0; i < 6; i++) {
    x = 0; 
    ctx.beginPath();
    for (var j = 0; j < num; j++) {
      x -= 4 * Math.sin(1);
      y = x * Math.sin(i + 5.0 * t + x /100)/1;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (j*2) * Math.PI / 3;
      ctx.lineWidth = .1;
      ctx.arc(w / 2- _x, h / 2 -_y, 0, 0, 2 * Math.PI);
      
    }
      ctx.strokeStyle = colors[i];
      ctx.stroke();
  }
  t += time;
  window.requestAnimationFrame(anim);
};
anim();
window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);