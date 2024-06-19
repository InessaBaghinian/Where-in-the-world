const filter = document.querySelector(".btn-filter");
const theme = document.querySelector(".btn-theme");
let countryData = {};

window.addEventListener("load", getData);
theme.addEventListener("click", changeTheme);
filter.addEventListener("click", filterBy);

 function getData() { 
  document.body.classList.remove("hidden");
  for (const key in smalldivs) smalldivs(smalldivs[key]);
}

function changeTheme() {
  if (document.body.classList.toggle("dark")) {
    localStorage.setItem("darkMode", true);
  } else {
    localStorage.setItem("darkMode", false);
  }
}

function filterBy() {
  const list = document.querySelector(".list");
  list.classList.toggle("hidden");
  list.addEventListener("click", function (e) {
    if (!e.target.closest(".item")) return;
    const value = e.target;
    filter.setAttribute("data-filter", value.getAttribute("data-filter"));
    if (value.textContent === "All") {
      filter.textContent = "Filter by Region";
    } else filter.textContent = value.textContent;
    list.classList.add("hidden");
    changeRegion();
    searchCountry();
  });
}

function changeRegion() {
  [...content.children].forEach((el) => {
    el.classList.remove("hidden");
    if (
      el.classList.contains("smalldivs") &&
      !el.classList.contains(`${filter.getAttribute("data-filter")}`)
    ) {
      el.classList.add("hidden");
    }
  });
}

