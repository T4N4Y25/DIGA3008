let btnnext = document.querySelector('.next');//Store the next essay button
let btnprev = document.querySelector('.prev');//Store the previous essay button

let essayOne = document.querySelector('.e-first');//Store the section containing the first essay
let essayTwo = document.querySelector('.e-second');//Store the section containing the second essay

function Showfirst(){ //A funtion which displays the first essay and the button allowing navigation to the next essay
    essayOne.classList.toggle("visible",true); //Make the first essay display
    essayTwo.classList.toggle("visible",false); //Second essay no longer displays
    window.scrollTo({ //Scrolls to top of screen so user can read from beginning 
        top: 100,
        behaviour: "smooth",
    });

    btnnext.classList.toggle("show",true); //Make the button navigating to the second essay display
    btnprev.classList.toggle("show",false); //Button navigating to first essay no longer displays
}

function ShowSecond(){ //Same concept as Showfirst() but display the second essay and the relevant button
    essayTwo.classList.toggle("visible",true);
    essayOne.classList.toggle("visible",false);
     window.scrollTo({
        top: 100,
        behaviour: "smooth",
    });
    btnnext.classList.toggle("show",false);
    btnprev.classList.toggle("show",true);
}

Showfirst(); //Display first essay by default
btnnext.addEventListener("click",ShowSecond); //Forward arrow button displays essay 2
btnprev.addEventListener("click",Showfirst); //Backward arrow button displays essay 1