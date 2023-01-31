// const nav = document.getElementById("topNav");
// window.onScroll = function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// }




const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
 const visibility = navList.getAttribute('data-visible');

 if (visibility === "false") {
  navList.setAttribute('data-visible', true);
  navToggle.setAttribute('aria-expanded', true);
 } else if (visibility === 'true') {
  navList.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
 }
});





