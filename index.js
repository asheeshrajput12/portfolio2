


window.onscroll = function () { updateProgressBar() };
/* =============================== typed js ===========================*/

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Android Developer', 'Web Designer', 'UI/UX Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    };

    var typed = new Typed('#multiple-text', options);
});

function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
}


let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};
// ======================================= Scroll section active link =======================================

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach.apply(
                links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                }
            );
        }
    });

    //========================= stick navbar ====================================

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ===================remove toggle icon and navbar=================*/
    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// ============================= scroll reveal ===============================

scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container,.project-box, .contact fprm', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



