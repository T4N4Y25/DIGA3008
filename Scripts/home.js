let pagecards = document.querySelectorAll('.page-card');
let index = 0;
let bExecute = true;

let arrpagecards = Array.from(pagecards);

function displayCard(i){
    arrpagecards.forEach((el,currentindex) => {
        el.classList.toggle("visible", i === currentindex);
    })
}

displayCard(index);

let mousewheel = window.addEventListener("wheel",Scrolling);
let touchscreen = window.addEventListener("touchmove", Scrolling);
function Scrolling(event){
    if(bExecute === false){
        return;
    }

    event.preventDefault();
    if(event.deltaY > 0){
        index+=1;
    }
    else{
        index -=1;
    }

    if(index > arrpagecards.length-1){
        index = 0;
    }
    if(index < 0){
        index = arrpagecards.length-1;
    }
    bExecute = false;
    displayCard(index);
    Timer();
}

function Timer(){
        setTimeout(() => {
        bExecute = true;
    }, 500);
}
