const header = document.querySelector(".header");
const headerHeight = header.offsetHeight; // 요소의 총 높이
const categories = document.querySelector("categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");

console.log(headerHeight);

// console.log(headerHeight); // 70
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    // console.log("window.scrollY가 headerHeight보다 큽니다.");
    header.classList.add("header--dark");
  } else {
    // console.log("window.scrollY가 headerHeight보다 작습니다.");
    header.classList.remove("header--dark");
  }
});
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

arrowUp.addEventListener("click", () => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navbarMenu = document.querySelector(".header__menu");

const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  //   console.log(filter);
  //   console.log(e.target);

  if (filter == null) {
    return;
  }
  activeSelection(e.target);
  filterProjects(filter);
});

function activeSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter == "all" || filter == projects.dataset.type) {
      project.computedStyleMap.display = "block";
    } else {
      project.computedStyleMap.display = "none";
    }
  });
}
