let pagecards = document.querySelectorAll('.page-card');
let index = 0;

let arrpagecards = Array.from(pagecards);

function displayCard(i){
    arrpagecards.forEach((el,currentindex) => {
        el.classList.toggle("visible", i === currentindex);
    })
}

displayCard(index);

let mousewheel = window.addEventListener("wheel",Scrolling);

function Scrolling(event){
    event.preventDefault();
    if(event.deltaY > 0){
        index+=1;
    }
    else{
        index -=1;
    }

    if(index < 0){
        index = 0;
    }

    if(index > arrpagecards.length-1){
        index = arrpagecards.length-1;
    }
    displayCard(index);
}
