const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  // use document.documentElement for chrome, firefox, ie or opera
  // and document.body for safari since that's where overflow is set in those browsers
  console.log(window.scrollY > window.innerHeight * 0.5);
  if (window.scrollY > window.innerHeight * 0.5 && header.classList.contains('menu--alt') === false) {
    header.classList.add("menu--alt");
    header.querySelector(".logo").style.position = "static";
    header.querySelector(".logo").style.display = "flex";
  } else if (window.scrollY < window.innerHeight * 0.5 && header.classList.contains('menu--alt')) {
    header.classList.remove("menu--alt");
    header.querySelector(".logo").style.position = "absolute";
    header.querySelector(".logo").style.display = "none";
  }
});