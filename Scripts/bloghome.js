const blogcards = [
  {
    num: 1,
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

let blogcontainer = document.querySelector(".u-blogsnav");
let cardsperpage = 3;
let index = 0;

function DisplayBlogs(bloglist) {
  let visibleblogs = bloglist.slice(index, index + cardsperpage);
  let displayblog = visibleblogs
    .map(function (visibleblogs) {
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
    })
    .join(" ");
  blogcontainer.innerHTML = displayblog;
  
}

DisplayBlogs(blogcards);

let buttonnext = document
  .querySelector(".next-btn")
  .addEventListener("click", NextBlog);

  let buttonprev = document.querySelector(".prev-btn").addEventListener("click",PrevBlog);
function NextBlog() {
  // index+=cardsperpage;
  index += cardsperpage - 1;
  if (index > blogcards.length-1) {
    index = 0;
  }
  
  DisplayBlogs(blogcards);
  // alert("Button was clicked");
}

function PrevBlog(){
  index -= (cardsperpage);
  if(index < 0){
    let maxPages = Math.floor(blogcards.length/cardsperpage);
    index = blogcards.length-1;
  }
    if (index >= blogcards.length) {
      index = Math.max(0, blogcards.length - cardsperpage);
    }
  
  DisplayBlogs(blogcards);
}
