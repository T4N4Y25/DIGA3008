let pagecards = document.querySelectorAll(".page-card");
let index = 0;
let bExecute = true;

let arrpagecards = Array.from(pagecards);

function displayCard(i) {
  arrpagecards.forEach((el, currentindex) => {
    el.classList.toggle("visible", i === currentindex);
  });
}

displayCard(index);

let mousewheel = window.addEventListener("wheel", Scrolling);
let touchscreen = window.addEventListener("touchmove", Scrolling);
function Scrolling(event) {
  if (bExecute === false) {
    return;
  }

  event.preventDefault();
  if (event.deltaY > 0) {
    index += 1;
  } else {
    index -= 1;
  }

  if (index > arrpagecards.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = arrpagecards.length - 1;
  }
  bExecute = false;
  displayCard(index);
  Timer();
}

function Timer() {
  setTimeout(() => {
    bExecute = true;
  }, 500);
}

//------Rain effect code------//

function initRainEffect() {
  const canvas = document.getElementById("rain");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const raindrops = [];
  const raindropCount = 50;
  const maxRaindropLength = 5;
  const maxSpeed = 2;

  for (let i = 0; i < raindropCount; i++) {
    raindrops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      length: Math.random() * maxRaindropLength + 10,
      speed: Math.random() * maxSpeed + 5,
      opacity: Math.random() * 0.6 + 0.2,
    });
  }

  function animateRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   // ctx.fillRect(0, 0, canvas.width, canvas.height);

    raindrops.forEach((drop) => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.strokeStyle = `rgba(174, 194, 224, ${drop.opacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      drop.y += drop.speed;

      if (drop.y > canvas.height) {
        drop.y = Math.random() * -100;
        drop.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animateRain);
  }

  animateRain();
}

initRainEffect();
