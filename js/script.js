/*===================== toggle icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===================== active links on scroll sections =====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*===================== sticky navbar =====================*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*===================== remove toggle icon and navbar when click navbar link ()scroll =====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*===================== scroll reveal =====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*===================== typed js =====================*/
const typed = new Typed('.multiple-text', {
    strings: ['.NET Developer', 'Desktop Developer' ,'Automation Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    bakcDelat: 1000,
    loop: true
});

/*===================== smtp js email handling =====================*/
const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formNumber = document.getElementById('formNumber');
const formEmailSubject = document.getElementById('formEmailSubject');
const formMessage = document.getElementById('formMessage');
const contForm  = document.getElementById('contactForm');

contForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailBody = `
    <b>Full Name: </b>${formName.value}
    <br>
    <b>Email: </b>${formEmail.value}
    <br>
    <b>Mobile Number: </b>${formNumber.value}
    <br>
    <b>Message: </b>${formMessage.value}
    `
    Email.send({
        SecureToken : "94231384-2093-4f83-8d13-c16b412ed167",
        To : 'petar9701@gmail.com',
        From : "petar9701@gmail.com",
        Subject : formEmailSubject.value,
        Body : emailBody
    }).then(
      message => alert(message)
    );
});

/*===================== read more handling =====================*/

// Get the modal
var modal = document.getElementById("readMoreModal");

var modalHeader = document.getElementById("modalHeader");
var modalBody = document.getElementById("modalBody");
var modalFooter = document.getElementById("modalFooter");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

// When the user clicks on the button, open the modal
// aboutReadMorebtn.onclick = function() {
//     modalHeader.textContent = 'Test';
//     modalBody.textContent = aboutReadMorebtn.value;
//     console.log(aboutReadMorebtn.value);
//     modalFooter.textContent = 'footer test';
//     modal.style.display = "block";
// };

var readmore =
[
    {
        "value": "about",
        "text": "This is the about text."
    },
    {
        "value": "services_1",
        "text": "This is the services_1 text."
    }
    ,
    {
        "value": "services_2",
        "text": "This is the services_2 text."
    }
    ,
    {
        "value": "services_3",
        "text": "This is the services_3 text."
    }
];

function onReadMoreClicked(value){
    modalHeader.textContent = 'Test';
    modalBody.textContent = value;
    modalFooter.textContent = 'footer test';
    console.log(readmore);
    modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}; 