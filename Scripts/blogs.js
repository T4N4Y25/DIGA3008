const progressbar = [9,18,27,36,45,55,65,75,85,95,100]; //Different percentage width for each blogs progress bar
const blogIndexMap = { //Due to the blog names not being sequential an array is made to help indexing
  "Blog1.html": 0,
  "Blog2.html": 1,
  "Blog3.html": 2,
  "Blog4.html": 3,
  "Blog7.html": 4,
  "Blog8.html": 5,
  "Blog9.html": 6,
  "Blog10.html": 7,
  "Blog11.html": 8,
  "Blog12.html": 9,
  "Blog13.html": 10,
};
let pbclass = document.querySelector('.week-progress-bar'); //Get th progress bar container

let page = window.location.pathname.split("/").pop(); // Get the the blog name according to the page eg.../Blog13.html will return Blog13.html
let index = blogIndexMap[page] ?? 0; //Use the page name to get the correspodning index to use in progressbar

function UpdatePB(){ //Function to dynamically update the progress bar
    let progress = progressbar[index]; //Store the indexed value to get a max value for the bar to reach
    let increment = progress/10; //Determines the rate at which the progress bar updates
    let current = 0; //variable that updates accordingly until the max value is reached

    if(index === 0){ //A check to ensure current does not get an incorrect value
        current = 0;
    }
    else{
        current = progressbar[index-1]; //current starts at the previous index value so the progress bar grows from there to the next value
    }

    let iterate = setInterval(animatedeffect,10); //setInterval helps create an animated transition (from exercise 3 of the class exercises)
   function animatedeffect(){
    if(current < progress){  //current grows accordingly via the increment value until it reaches the max value-progress
        current += increment;
        pbclass.style.width = `${current}%`; //Adds the style and width to the HTML
    }
    else{
        current = progress;
         pbclass.style.width = `${current}%`; 
        clearInterval(iterate); //Stop the setInterval method when the max value is reached
    }
   }

}
/*This was an alternative method to get the correct index mapped via buttons but this method does not work if the user starts at a blog that isn't Blog1
function Inc(){
    index += 1;
    UpdatePB();
    localStorage.setItem('index', index);
}

function Dec(){
    index -= 1;
    UpdatePB();
    localStorage.setItem('index', index);
}

let backbtn = document.querySelector('.u-previousblog');
if(backbtn !== null && backbtn !== undefined){
    backbtn.addEventListener("click",Dec);
}

let nextbtn = document.querySelector('.u-nextblog');
if(nextbtn !== null && nextbtn !== undefined){
    nextbtn.addEventListener("click",Inc);
} */
UpdatePB();