/*===================== api fetch handling =====================*/
const apiUrl = 'https://razor-cms.up.railway.app/api/';
const projectId = '1';
var apiData;

function FetchInitData(){
    fetch(apiUrl + 'contents/getcontentsbyprojectid/' + projectId)
        .then(response => response.json())
        .then(data => onDataFetched(data))
        .catch(err => onAlert("Unexpected error. Try again."));
};

function onDataFetched(data){
    apiData = data;
    setMainContent(apiData);
    hideLoading();
};

function setMainContent(data){
    setSectionSummaryContent(data.find(x => x.name === "home"), "homeMainText");
    setSectionSummaryContent(data.find(x => x.name === "about"), "aboutMainText");
};

function setSectionSummaryContent(data, element){
    var textContent = document.getElementById(element);
    textContent.textContent = data.summary;
};

function FetchVisitorData(){
    fetch("https://ipapi.co/json/")
    .then(response=>response.json())
    .then((responseJson=>{
        sendVisitorData(responseJson);
    }));
};

function sendVisitorData(data){
    data.ProjectId = projectId;
    fetch(apiUrl + 'contents/postvisitor', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .catch((err) => console.log('error: ' + err));
};


// displayLoading();
// FetchInitData();
// FetchVisitorData();

/*===================== read more handling =====================*/

// Get the modal
var modal = document.getElementById("readMoreModal");
var modalHeader = document.getElementById("modalHeader");
var modalBody = document.getElementById("modalBody");
var modalFooter = document.getElementById("modalFooter");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("closeBtn")[0];
var readMoreCloseBtn = document.getElementById("readMoreCloseBtn");
function onReadMoreClicked(name){
    const element = apiData.find(x => x.name === name);
    modalHeader.innerHTML = element.other;
    modalBody.innerHTML = element.text;
    modalFooter.innerHTML = "Copyright &copy; 2023 by Petar Georgiev | All Rights Reserved.";
    modal.style.display = "block";
}


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
        SecureToken : "b4519bc5-3e5b-422c-9332-b82f0594e92b",
        To : 'pgdev@yahoo.com',
        From : "pgdev@yahoo.com",
        Subject : formEmailSubject.value,
        Body : emailBody
    }).then(
      message => alert(message)
    );
});

/*===================== loading handling =====================*/
function hideLoading() {
    const loaderContainer = document.querySelector('.loader-wrapper');
    loaderContainer.style.display = 'none';
}

function displayLoading() {
    const loaderContainer = document.querySelector('.loader-wrapper');
    loaderContainer.style.display = 'flex';
}

/*===================== alert handling =====================*/
// Get the alert component
var infoAlert = document.getElementById("infoAlert");

var infoAlertHeader = document.getElementById("infoAlertHeader");
var infoAlertBody = document.getElementById("infoAlertBody");
var infoAlertFooter = document.getElementById("infoAlertFooter");
var infoAlertCloseBtn = document.getElementById("infoAlertCloseBtn");
function onAlert(text){
    // infoAlertHeader.textContent = 'Test';
    infoAlertBody.textContent = text;
    // infoAlertFooter.textContent = 'footer test';
    infoAlert.style.display = "block";
};

/*===================== close modals handling =====================*/
// When the user clicks on readMoreModal (x), close the modal
readMoreCloseBtn.onclick = function() {
    modal.style.display = "none";
};
// When the user clicks on infoAlert (x), close the modal
infoAlertCloseBtn.onclick = function() {
    infoAlert.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if(event.target == infoAlert){
        infoAlert.style.display = "none";
    }
}; 