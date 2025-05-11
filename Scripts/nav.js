let navList = document.querySelector(".u-navbarlist"); //class for the navigation links in the navbar

let logoimage = document
  .querySelector(".logo")
  .addEventListener("click", displayLinks); //When the corresponding image is clicked the links are displayer or hidden

function displayLinks() {
  navList.classList.toggle("hide"); //A hide class in the styles.css file moves the links in and out of view using transition
  //alert("logo clicked");           for debugging
}
