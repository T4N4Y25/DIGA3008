let btnnext = document.querySelector('.next');//Store the next essay button
let btnprev = document.querySelector('.prev');//Store the previous essay button

let essays = [document.querySelector('.e-first'), document.querySelector('.e-second'), document.querySelector('.e-third') ]; //Create an array with all the essays to iterate through using an index
let index = 0; //Controls which essay is displayed

function essayDisplay(){ //Displays the essay item from the essay array depending on the index
essays.forEach((current, i) =>{
    if(i !== index){
        current.classList.toggle("visible", false); //If essay item's index does not match the index value, hide the essay; else display the essay
    }
    else{
        current.classList.toggle("visible",true);
    }

} )

window.scrollTo({ //Scroll to top of screen when viewing a new essay
    top: 100,
    behavior: "smooth"
})

if(index > 0){
    btnprev.classList.toggle("show",true); //If index is at zero i.e the first essay, hide the previous essay button
}
else{
    btnprev.classList.toggle("show",false);
}

if(index < essays.length-1){ //If index is at 2 i.e the last essay (reflection essay), hide the next essay button
    btnnext.classList.toggle("show",true);
}
else{
    btnnext.classList.toggle("show",false);
}
}

function displayNext(){ //Increments the index and hence displays the next essay
    if(index < essays.length-1){ //Check to ensure index is within bounds
        index++;
        essayDisplay();
    }
}

function displayPrev(){ //Decrement the index and hence display the previous essay
    if(index > 0){ 
        index--;
        essayDisplay();
    }
}

btnnext.addEventListener("click", displayNext); 
btnprev.addEventListener("click",displayPrev);

essayDisplay(); //Show the first essay as index is currently set at 0 when page loads



