const mobMenu_li = document.querySelectorAll(".mobile_menu_li a");
const subMenu_li = document.querySelectorAll(".submenu.mobile_submenu li");
const submenu = document.querySelector(".submenu.mobile_submenu");
mobMenu_li.forEach((MobLis) => {
  MobLis.addEventListener("click", function (e) {
    e.target.classList.toggle("toggle_submenu");
    e.target.parentElement
      .querySelector(".submenu.mobile_submenu")
      .classList.toggle("m_submenu");
    const liHeight = getComputedStyle(subMenu_li[2]);
    const height = parseInt(liHeight.height);
    const specUl = e.target.parentElement;
    const specLi = specUl
      .querySelector(".mobile_submenu")
      .querySelectorAll("li");
    const liLenght = parseInt(specLi.length);
    const subMenu_height = height * liLenght + 20;
    specUl.querySelector(".mobile_submenu").style.height = "0px";
    if (
      specUl.querySelector(".mobile_submenu").classList.contains("m_submenu")
    ) {
      specUl.querySelector(
        ".mobile_submenu"
      ).style.height = `${subMenu_height}px`;
    }
  });
});
// menu show hide
function menuShow() {
  document.querySelector(".mobile_nav").style.left = "0px";
}
function menuHide() {
  document.querySelector(".mobile_nav").style.left = "100%";
}
window.onscroll = function () {
  animateNav();
};
function animateNav() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".scrollTop").style.bottom = "30px";
  } else {
    document.querySelector(".scrollTop").style.bottom = "-100px";
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
// aos js //
AOS.init({
  duration: 800,
  once: true,
  easing: "ease",
});
// search bar
const search_box = document.querySelector(".search_box");
function activeSearchBar1() {
  search_box.classList.add("searchbarmobile_active");
}
function SearchBar1Hide() {
  search_box.classList.remove("searchbarmobile_active");
}
// search bar two
const mobile_search_box = document.querySelector(".mobile_search_box");
const mobileSearchBar = () => {
  mobile_search_box.classList.add("mob_searchbar_show");
};
const MSearchBar2Hide = () => {
  mobile_search_box.classList.remove("mob_searchbar_show");
};
