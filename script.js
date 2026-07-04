// ===============================
// PYQ HUB PRO - SCRIPT
// ===============================

// Elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const classFilter = document.getElementById("classFilter");
const subjectFilter = document.getElementById("subjectFilter");
const yearFilter = document.getElementById("yearFilter");

const cards = document.querySelectorAll(".paper-card");

// ===============================
// FILTER FUNCTION
// ===============================

function filterCards() {

    const search = searchInput.value.toLowerCase();
    const classValue = classFilter.value;
    const subjectValue = subjectFilter.value.toLowerCase();
    const yearValue = yearFilter.value;

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        const cardClass = card.dataset.class;
        const cardSubject = card.dataset.subject.toLowerCase();
        const cardYear = card.dataset.year;

        const matchSearch =
            title.includes(search);

        const matchClass =
            classValue === "all" ||
            classValue === cardClass;

        const matchSubject =
            subjectValue === "all" ||
            subjectValue === cardSubject;

        const matchYear =
            yearValue === "all" ||
            yearValue === cardYear;

        if (
            matchSearch &&
            matchClass &&
            matchSubject &&
            matchYear
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

// ===============================
// EVENTS
// ===============================

searchInput.addEventListener(
"keyup",
filterCards
);

searchBtn.addEventListener(
"click",
filterCards
);

classFilter.addEventListener(
"change",
filterCards
);

subjectFilter.addEventListener(
"change",
filterCards
);

yearFilter.addEventListener(
"change",
filterCards
);// ===============================
// DOWNLOAD BUTTON
// ===============================

const downloadButtons =
document.querySelectorAll(".download-btn");

downloadButtons.forEach(button=>{

button.addEventListener("click",function(e){

e.preventDefault();

alert("PDF upload hone ke baad download start hoga.");

});

});

// ===============================
// HERO BUTTONS
// ===============================

const exploreBtn =
document.querySelector(".primary-btn");

const latestBtn =
document.querySelector(".secondary-btn");

if(exploreBtn){

exploreBtn.addEventListener("click",()=>{

document
.getElementById("papers")
.scrollIntoView({

behavior:"smooth"

});

});

}

if(latestBtn){

latestBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ===============================
// CONTACT FORM
// ===============================

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been received.");

form.reset();

});

}

// ===============================
// PAGE LOADED
// ===============================

window.addEventListener("load",()=>{

console.log("PYQ Hub Loaded Successfully");

});

// ===============================
// CARD HOVER EFFECT
// ===============================

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition="0.3s";

});

});

// ===============================
// END
// ===============================