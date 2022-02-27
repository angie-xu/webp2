let canvas;

let music;
let fft;
let cc;

function preload() {
  music = loadSound('Tobu & Itro - Sunburst [NCS Release].mp3')
}

function toggle() {
  if (music.isPlaying()) {
    music.pause(); 
    noLoop();
  } else {
    music.play();
    loop();
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  
   cc = [color('#B3FCFC'), color('#9AD7D9'), color('#B6ECF0'), color('#46CCDB'), color('#00D9FA'), color('#2AB9FF'),color('#FFFFFF')];
  
  let bg = color(250, 242, 220, 10);
  let fg = color(227, 227, 227);

  button = createButton('✦');
  button.style('background-color', bg);
  button.style('color', fg);
  button.style('border', bg);
  button.style('font-size', '80px');

  button.mousePressed(toggle);
  button.position((windowWidth)-200, (600/8)-15);
  music.pause();
  
    // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(music);
  
}

function draw() {
  background(234, 250, 234, 10);
  
  noStroke();
  noFill();
  splat();
  
  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  stroke(255);
  strokeWeight(0);
  
  let diam = map(rms, 0, 0.3, 10, 200);
  
  //changes color of center circle when mouse moves
  r = map(mouseX, 0, width, 127, 255);
  b = map(mouseX, 0, width, 255, 167);
  fill(r,167,b);
  

     // Draw an ellipse with size based on volume
  ellipse(mouseX, mouseY, diam, diam);
  
}

function splat() {
  splatX = random(width);
  splatY = random(height);
  splatS = random(1,10)
  
  fill(random(cc));
  ellipse(splatX, splatY, splatS, splatS);
  frameRate(10);
}