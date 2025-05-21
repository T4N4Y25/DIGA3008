const blogcards = [
  //An array with relevant details for the blog card (the link to the blog page, the title week and the blog title)
  {
    num: 1, //Simply helps track blogs in the array
    link: "Blog1.html",
    Week: "Week 1 Blog",
    title: "Proposal for a Universal Electronic Publishing System and Archive",
  },
  {
    num: 2,
    link: "Blog2.html",
    Week: "Week 2 Blog",
    title:
      "You Say You Want a Revolution? Hypertext and the Laws of Media (1991)",
  },
  {
    num: 3,
    link: "Blog3.html",
    Week: "Week 3 Blog",
    title: "The concept of Interaction Design",
  },
  {
    num: 4,
    link: "Blog4.html",
    Week: "Week 4 Blog",
    title: "Design Section of the Website and the IxD Process",
  },
  {
    num: 7,
    link: "Blog7.html",
    Week: "Week 7 Blog",
    title: "UI and UX andlysis for Essay 1",
  },
  {
    num: 10,
    link: "Blog10.html",
    Week: "Week 10 Blog",
    title:
      "A close reading on “How Geography Shapes—and Is Shaped by—the Internet” ",
  },
];

let blogcontainer = document.querySelector(".u-blogsnav"); //Main container representing a blog card
let cardsperpage = 3; //constant variable representing the max number of blog cards on the page at a time
let index = 0; //Index used to access the blogs stored in the array

function DisplayBlogs(bloglist) {
  let visibleblogs = bloglist.slice(index, index + cardsperpage); //Cuts the array to get the blog at the current index and the subsequent two blogs
  let displayblog = visibleblogs
    .map(function (visibleblogs) {
      //Use the map function similarly to the exercises done in class to automatically add html to the blogshome.html file with the blog card info from the array
      return `            <li>
              <a class="u-blogsnav" href="${visibleblogs.link}">    
                <div class="u-blogcard">
                  <p class="p-blogweek">${visibleblogs.Week}</p>
                  <p class="p-blogtitle">
                    ${visibleblogs.title}
                  </p>
                </div>
              </a>
            </li>`;
    }) //The html structure initially used in the blogshome.html file, JavaScript allows this structure to be repeated making adding additional blog cards easier
    .join(" ");
  blogcontainer.innerHTML = displayblog; //Write to the html file
}

DisplayBlogs(blogcards); //Display 3 initial blogs when index is at 0

let buttonnext = document //Forward button from html file
  .querySelector(".next-btn")
  .addEventListener("click", NextBlog);

let buttonprev = document
  .querySelector(".prev-btn")
  .addEventListener("click", PrevBlog); //Back button from html file
function NextBlog() {
  //function to display the next three blog cards when the forward button is clicked
  // index+=cardsperpage;
  index += cardsperpage - 1; //Index is updated to the next blog card after the third one initially displayed
  if (index > blogcards.length - 1) {
    //Checks if the index exceeds the array length and resets the index back to 0 if it does
    index = 0;
  }

  DisplayBlogs(blogcards); //Display the next three blogs after index is updated
  // alert("Button was clicked");
}

function PrevBlog() {
  //function to display the previous three blog cards
  index -= cardsperpage; //Set index value to the value just before the first blog currently displayed
  if (index < 0) {
    //Check index is not a negative value
    //let maxPages = Math.floor(blogcards.length/cardsperpage); //A method I am trying so I can fix a bug where the first week blog is never showing when moving backwards
    index = blogcards.length - 1; //Cycle the index to the last blog card
  }

  DisplayBlogs(blogcards);
}
