
window.onscroll = function () { updateProgressBar() };
function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
}
/* =============================== typed js ===========================*/

/* =============================== send email of input form =============================*/
try {
    // Initialize EmailJS with your user ID
    emailjs.init('ccmGJayNOXibUUHOA');

    function sendMessage() {
        // Collect form data
        const username = document.getElementById('username').value;
        const useremail = document.getElementById('useremail').value;
        const mobile = document.getElementById('mobile').value;
        const subject = document.getElementById('subject').value;
        const usermessage = document.getElementById('usermessage').value;

        // Check if all fields are filled
        if (!username || !useremail || !mobile || !subject || !usermessage) {
            alert("Please fill out all fields.");
            return;
        }

        // Create the email parameters
        const emailParams = {
            user_name: username,
            user_email: useremail,
            user_mobile: mobile,
            email_subject: subject,
            message: usermessage,
        };

        const serviceId = "service_bq7ifut";
        const templateId = "template_9jvbiyi";

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, emailParams)
            .then(function(_response) {
                alert('SUCCESS! Your message has been sent.');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('FAILED... ' + JSON.stringify(error));
            });
    }

    document.getElementById('sendButton').addEventListener('click', sendMessage);

} catch (error) {
    console.error("Error sending email: ", error);
}


document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Android Developer', 'Web Designer', 'UI/UX Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    };

    Typed('.multiple-text', options);
});




let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};
// ======================================= Scroll section active link =======================================

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

// window.onscroll = () => {

//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLink.forEach.apply(
//                 links => {
//                     links.classList.remove('active');
//                     document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//                 }
//             );
//         }
//     });

//     //========================= stick navbar ====================================

//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     /* ===================remove toggle icon and navbar=================*/
//     menuicon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// }

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



