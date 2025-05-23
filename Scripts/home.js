let pagecards = document.querySelectorAll(".page-card"); //Store the four page cards from the homepage
let index = 0; //Index to iterate through the page cards
let bExecute = true; //Bool to allow for delay between scrolls to allow transition effect and prevent erratic scrolling

let arrpagecards = Array.from(pagecards); //Store the nodes collected from the document into an array for easier access

function displayCard(i) {
  //Function that changes the card currently shown based on the index

  arrpagecards.forEach((el, currentindex) => {
    //Iterates through the array using the arrays indexes at each point. If an index matches the index variable, the page card is found and displayed
    el.classList.toggle("visible", i === currentindex); //Make the card visible if a match is found
  });
  let footer = document.querySelector(".page-indicator"); //Get the text in the footer displaying the page number
  if (footer !== null) {
    //a check to prevent errors, such as an error where scrolling is disabled
    footer.textContent = `Page ${i + 1} of ${arrpagecards.length}`; //Update the footer text to display what page card number the user is on
  }
}

displayCard(index); //Set the default page to Weekly Blogs when the page loads (index = 0 at this point)

let mousewheel = window.addEventListener("wheel", Scrolling); //Scroll function to navigate the page cards
let touchscreen = window.addEventListener("touchmove", Scrolling); //Allows for touchscreen use on mobile devices
function Scrolling(event) {
  //A function to set the index value
  if (bExecute === false) {
    //Need to wait for the delay to finish to scroll again
    return;
  }

  event.preventDefault(); //Prevents unexpected behaviour from the mousewheel such as one scroll causing the page card to change multiple times
  if (event.deltaY > 0) {
    //If a vertical scroll is detected, increase the index and move to next page card, else move to previous page card
    index += 1;
  } else {
    index -= 1;
  }

  if (index > arrpagecards.length - 1) {
    //A check, if the index value exceeds the length of the array, the index is reset to 0
    index = 0;
  }
  if (index < 0) {
    //If index is on first page card and user scrolls up, index goes to the last array value
    index = arrpagecards.length - 1;
  }
  bExecute = false; //Start the delay process

  displayCard(index); //Display the new page card with the updated index
  Timer(); //Start the delay
}

function Timer() {
  setTimeout(() => {
    //bExecute goes back to true after 0.5s and will allow the user to navigate to the next page card after this delay is met
    bExecute = true;
  }, 500);
}

//------Rain effect code------//
//Followed the tutorial found here: University of Derby (2012) A guide to Harvard Referencing. [Online video]. 12 July. Available at: https://www.youtube.com/watch?v=ni2Sm_j-PjU (Accessed: 23 May 2025).
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
