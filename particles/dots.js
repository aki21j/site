let anim;
let canvas, ctx, w, h;

function startParticles(){
  // Get canvas and set up context
  canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  
  ctx = canvas.getContext('2d');
  
  // Set canvas size to window size
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  // Color palette
  const colors = [
    'rgba(255, 99, 71, 0.5)',   // Red
    'rgba(255, 215, 0, 0.5)',   // Yellow/Gold
    'rgba(50, 205, 50, 0.5)',   // Green
    'rgba(255, 255, 255, 0.5)'  // White
  ];
  
  // Create particles with random colors
  const dots=Array.from({length:20}).map(()=>({
    x:Math.random()*w,
    y:Math.random()*h,
    r:Math.random()*1.5+0.5,
    vx:(Math.random()-0.5)*0.3,
    vy:(Math.random()-0.5)*0.3,
    color: colors[Math.floor(Math.random()*colors.length)]
  }));
  
  function draw(){
    ctx.fillStyle='rgba(15,23,36,0.12)';
    ctx.fillRect(0,0,w,h);
    for(const d of dots){
      d.x+=d.vx;
      d.y+=d.vy;
      if(d.x<0)d.x=w;
      if(d.x>w)d.x=0;
      if(d.y<0)d.y=h;
      if(d.y>h)d.y=0;
      ctx.beginPath();
      ctx.fillStyle=d.color;
      ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
      ctx.fill();
    }
    anim=requestAnimationFrame(draw);
  }
  draw();
}