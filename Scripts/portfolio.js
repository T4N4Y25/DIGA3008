//API
const username = "T4N4Y25"; // My GitHub Username
const repoList = document.getElementById("repo-list"); //Get the list where the repositories will be added

fetch(`https://api.github.com/users/${username}/repos`) //Uses GitHub Rest API
  .then((response) => response.json())
  .then((repos) => {
    repos.forEach((repo) => {
      //For every repository found, the repositories are added to the list
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${
        repo.name
      }</a>: ${repo.description || "Project Repository"}`; //Generate a link to the repo with a description if there is one for the repo
      repoList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching repos:", error); //If files could not be loaded, create an error message
  });

//Scrolling functionality

let Games = [
  document.querySelector('.p-GamesTitle'),
  document.querySelector(".firstGame"),
  document.querySelector(".secondGame"),
  document.querySelector(".thirdGame"),
];

let Eng = [
  document.querySelector('.p-EngTitle'),
  document.querySelector(".firstEng"),
  document.querySelector(".secondEng"),
  document.querySelector(".thirdEng"),
];

let GamesPos = [
  document.getElementById("Games"),
  document.getElementById("AirHockey"),
  document.getElementById("Inventory"),
  document.getElementById("Winter"),
];

let EngPos = [
  document.querySelector('.p-EngTitleTwo'),
  document.getElementById("Micros"),
  document.getElementById("SoftwareDev"),
  document.getElementById("ElecPrj"),
]

Games.forEach((current, i) =>{
  
  current.addEventListener("click", function(e){
    e.preventDefault();

    window.scrollTo({
      top: GamesPos[i].offsetTop,
      behavior: "smooth"
    })
  })
})

Eng.forEach((current,i) =>{
  current.addEventListener("click", () => {
    window.scrollTo({
      top: EngPos[i].offsetTop,
      behavior: "smooth"
    })
  })
})

