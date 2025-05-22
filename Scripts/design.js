let linkList = document.querySelectorAll(".QuickLinkList a"); //store all the side panel links

let arrLinks = Array.from(linkList); //convert the links to an array for easier manipulation

let arrSections = [
  //An array storing names matching the data attribute of the links and the relevant section related to those links
  { name: "DesignIxD", section: document.querySelector(".DesignIxD") }, //For example the data attribute here is called DesignIxD and the section that displays when this link is clicked is also DesignIxD
  {
    name: "StyleProcess",
    section: document.querySelector(".StyleProcess"),
  },
  {
    name: "StyleGuide",
    section: document.querySelector(".StyleGuide"),
  },
  {
    name: "WireframeSection",
    section: document.querySelector(".WireframeSection"),
  },
  {
    name: "References",
    section: document.querySelector(".References"),
  },
];

SetColour(arrLinks); //Set all the colours of the link to it's 'unselected' colour
Initialize(); //Set the default section to IxD process when the page initially loads

arrLinks.forEach((link) => {
  //Iterate through the array with all the links
  let linkName = ""; //a variable to store the data attribute of the selected link
  link.addEventListener("click", function (e) {
    //Perfroms the subsequent code when the link is clicked, the e in the function declaration is to disable the auto-scrolling I initially had in HTML
    SetColour(arrLinks); //reset all the links to 'unselected' colour

    link.classList.toggle("highlight", true); //Make only the selected link the selected colour
    e.preventDefault(); //Prevents the auto-scrolling functionality I initially had in HTML
    window.scrollTo({
      //When a link is clicked, the page auto-scrolls to the top so the user can read from the beginning of each section
      top: 100,
      behavior: "smooth",
    });
    linkName = link.dataset.filter; //variable stores the data attribute of the clicked link
    arrSections.forEach((elem) => {
      //a nested loop to now iterate the array with all the sections and compare them with the stored data attribute
      if (linkName === "") {
        //Incase of errors
        return;
      }
      if (elem.name === linkName) {
        //Compare the elements name property with the data attribute of the clicked link
        // alert(elem.name);
        elem.section.classList.toggle("visible", true); //If a match is found that section is displayed
      } else {
        elem.section.classList.toggle("visible", false); //If the element does not match the section is not visible
      }
    });
  });
});

function SetColour(arr) {
  //Function to set the colour of the links to their default colour
  arr.forEach((colour) => {
    colour.classList.toggle("highlight", false);
  });
}

function Initialize() {
  //Function to set the default section shown when the page loads
  arrSections.forEach((val) => {
    val.section.classList.toggle("visible", false); //Make every other section not visible
  });

  arrSections[0].section.classList.toggle("visible", true); //Make ony the first section true
  arrLinks[0].classList.toggle("highlight", true); //Set the 'selected' colour for the corresponding link
}
