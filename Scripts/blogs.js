const progressbar = [9,18,27,36,45,55,34,64,73,82,91,100];
const blogIndexMap = {
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
let pbclass = document.querySelector('.week-progress-bar');

let page = window.location.pathname.split("/").pop(); // Get "BlogX.html"
let index = blogIndexMap[page] ?? 0; 

function UpdatePB(){
    let progress = progressbar[index];
    let increment = progress/10;
    let current = 0;

    if(index === 0){
        current = 0;
    }
    else{
        current = progressbar[index-1];
    }
   // pbclass.style.width = `${progress}%`; 
    let iterate = setInterval(animatedeffect,10);
   function animatedeffect(){
    if(current < progress){
        current += increment;
        pbclass.style.width = `${current}%`; 
    }
    else{
        current = progress;
         pbclass.style.width = `${current}%`; 
        clearInterval(iterate);
    }
   }

}
/*
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