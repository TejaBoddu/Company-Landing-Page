// navbar

const navOpenBtn = document.querySelector("[data-men-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for(let i = 0; i< navElemArr.length; i++){

    navElemArr[i].addEventListener("click", function(){

        navbar.classList.toggle("active");
        overlay.classList.toggle("active");

    });
}

// header sticky functionality

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    
    this.window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");

});


// Theme change code

// const body = document.querySelector('body');
// const toggle = document.getElementById('toggle');
// toggle.onclick = function(){
//     toggle.classList.toggle('active');
//     body.classList.toggle('active');
// }