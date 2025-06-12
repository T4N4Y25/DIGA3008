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
      }</a>: ${repo.description || " "}`; //Generate a link to the repo with a description if there is one for the repo
      repoList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching repos:", error); //If files could not be loaded, create an error message
  });
