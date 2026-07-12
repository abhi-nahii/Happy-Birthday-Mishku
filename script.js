/*==================================================
        HAPPY BIRTHDAY MISHKUU
        SCRIPT.JS
        PART 1A
==================================================*/

/*==============================
        PASSWORD
===============================*/

const CORRECT_PASSWORD = "3007";

/*==============================
        PAGES
===============================*/

const loadingScreen = document.getElementById("loadingScreen");

const passwordPage = document.getElementById("passwordPage");

const welcomePage = document.getElementById("welcomePage");

const hamperPage = document.getElementById("hamperPage");

/*==============================
        PASSWORD KEYPAD
===============================*/

const passwordDisplay = document.getElementById("passwordDisplay");

const capyMessage = document.getElementById("capyMessage");

const keys = document.querySelectorAll(".key");

const unlockBtn = document.getElementById("unlockBtn");

const wrongPassword = document.getElementById("wrongPassword");

let enteredPassword = "";

/*==============================
        BUTTONS
===============================*/

const openHamperBtn = document.getElementById("openHamper");

const celebrateButton = document.getElementById("celebrateButton");

const musicButton = document.getElementById("musicButton");

/*==============================
        AUDIO
===============================*/

const birthdayMusic = document.getElementById("birthdayMusic");

/*==============================
        GIFTS
===============================*/

const giftChocolate = document.getElementById("giftChocolate");

const giftDrama = document.getElementById("giftDrama");

const giftHeight = document.getElementById("giftHeight");

const giftCapy = document.getElementById("giftCapy");

const giftFinal = document.getElementById("giftFinal");

/*==============================
        MODALS
===============================*/

const modalChocolate = document.getElementById("modalChocolate");

const modalDrama = document.getElementById("modalDrama");

const modalHeight = document.getElementById("modalHeight");

const modalCapy = document.getElementById("modalCapy");

const modalFinal = document.getElementById("modalFinal");

/*==============================
        CLOSE BUTTONS
===============================*/

const closeButtons = document.querySelectorAll(".close");

/*==============================
        TRACK OPENED GIFTS
===============================*/

let openedGifts = {

chocolate:false,

drama:false,

height:false,

capy:false

};

/*==============================
        LOADING SCREEN
===============================*/

window.addEventListener("load",()=>{

passwordPage.style.display="flex";

setTimeout(()=>{

loadingScreen.style.display="none";

},2500);

});

/*==============================
        PAGE SWITCH
===============================*/

function showPage(page){

passwordPage.style.display="none";
welcomePage.style.display="none";
hamperPage.style.display="none";

page.style.display="flex";

page.classList.add("fadeIn");

setTimeout(()=>{

page.classList.remove("fadeIn");

},500);

}

/*==============================
        PASSWORD CHECK
===============================*/

/*==============================
        KEYPAD INPUT
===============================*/

keys.forEach(key=>{

key.addEventListener("click",()=>{

let value = key.textContent;


if(value==="CLR"){

enteredPassword="";

}

else if(value==="⌫"){

enteredPassword = enteredPassword.slice(0,-1);

}

else{

if(enteredPassword.length < 4){

enteredPassword += value;

}

}


/* Show PIN */

passwordDisplay.textContent = enteredPassword || "Enter PIN";


/* Capybara Reaction */

const correctPIN = "3007";


if(enteredPassword.length === 0){

capyMessage.textContent =
"I'm guarding the birthday surprise! 🐹";

}


else if(
enteredPassword === correctPIN.substring(0,1)
){

capyMessage.textContent =
"Good start! You found the first digit 🎀";

}


else if(
enteredPassword === correctPIN.substring(0,2)
){

capyMessage.textContent =
"Almost there! Two digits unlocked ✨";

}


else if(
enteredPassword === correctPIN.substring(0,3)
){

capyMessage.textContent =
"One more digit... you're so close! 💖";

}


else if(
enteredPassword === correctPIN
){

capyMessage.textContent =
"Yay!! You found the secret PIN! 🎉🐹";

}


else{

capyMessage.textContent =
"Oops... that's not the right path! Try again 🐹";

}

});

});


/*==============================
        PASSWORD CHECK
===============================*/

unlockBtn.addEventListener("click",()=>{


if(enteredPassword === CORRECT_PASSWORD){


startMusic();


wrongPassword.textContent="";


passwordDisplay.textContent="🎉";


capyMessage.textContent=

"Yay!! You found it! 🎉🐹";


passwordPage.classList.add("unlockSuccess");


setTimeout(()=>{


passwordPage.style.display="none";


welcomePage.style.display="flex";


welcomePage.classList.add("welcomeEnter");


},1500);


}

else{


wrongPassword.textContent=

"🐹 Oops... Try again ❤️";


enteredPassword="";


passwordDisplay.textContent="Enter PIN";


}


});



/*==============================
        OPEN HAMPER
===============================*/

openHamperBtn.addEventListener("click",()=>{


openHamperBtn.classList.add("openingHamper");


const countdown =
document.getElementById("hamperCountdown");


let numbers = ["3","2","1","🎁"];


let index = 0;


countdown.style.display="block";


function showCount(){


if(index < numbers.length){


countdown.textContent = numbers[index];


countdown.classList.remove("countPop");


void countdown.offsetWidth;


countdown.classList.add("countPop");


index++;


setTimeout(showCount,800);


}


else{


welcomePage.classList.add("pageFade");


setTimeout(()=>{


countdown.style.display="none";


showPage(hamperPage);


},1200);


}


}


showCount();


});

/*==================================================
        MEMORY CAROUSEL
==================================================*/


/*==================================================
        IMAGE CAROUSEL
==================================================*/


const track = document.querySelector(".carouselTrack");

if(track){

const images = document.querySelectorAll(".carouselTrack img");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

const dots = document.querySelectorAll(".dot");

let currentImage = 0;

function updateCarousel(){

track.style.transform=`translateX(-${currentImage*320}px)`;

dots.forEach(dot=>dot.classList.remove("active"));

if(dots[currentImage]){

dots[currentImage].classList.add("active");

}

}

nextBtn.addEventListener("click",()=>{

currentImage++;

if(currentImage>=images.length){

currentImage=0;

}

updateCarousel();

});

prevBtn.addEventListener("click",()=>{

currentImage--;

if(currentImage<0){

currentImage=images.length-1;

}

updateCarousel();

});

}

/*==============================
        OPEN MODAL
===============================*/

function openModal(modal){

modal.classList.add("show");

}

/*==============================
        CLOSE MODAL
===============================*/

function closeModal(modal){

modal.classList.remove("show");

}

/*==============================
        CLOSE BUTTONS
===============================*/

closeButtons.forEach(button=>{

button.addEventListener("click",()=>{

button.parentElement.parentElement.classList.remove("show");

});

});

/*==============================
        CLICK OUTSIDE
===============================*/

window.addEventListener("click",(e)=>{

document.querySelectorAll(".modal").forEach(modal=>{

if(e.target===modal){

closeModal(modal);

}

});

});

/*==============================
        GIFT ANIMATION
===============================*/

function animateGift(gift){

gift.classList.add("opened");

setTimeout(()=>{

gift.classList.remove("opened");

},700);

}

/*==============================
        OPEN GIFT
===============================*/

function openGift(gift,modal,key){

animateGift(gift);

openModal(modal);

openedGifts[key]=true;

checkFinalGift();

}

/*==============================
        GIFT EVENTS
===============================*/

giftChocolate.addEventListener("click",()=>{

openGift(

giftChocolate,

modalChocolate,

"chocolate"

);

});

giftDrama.addEventListener("click",()=>{

openGift(

giftDrama,

modalDrama,

"drama"

);

});

giftHeight.addEventListener("click",()=>{

openGift(

giftHeight,

modalHeight,

"height"

);

});

giftCapy.addEventListener("click",()=>{

openGift(

giftCapy,

modalCapy,

"capy"

);

});

/*==================================================
        HAPPY BIRTHDAY MISHKUU
        SCRIPT.JS
        PART 1B
==================================================*/

/*==============================
      FINAL GIFT CHECK
===============================*/

function checkFinalGift(){

if(

openedGifts.chocolate &&
openedGifts.drama &&
openedGifts.height &&
openedGifts.capy

){

giftFinal.classList.remove("locked");

const title = giftFinal.querySelector("h3");
const description = giftFinal.querySelector("p");

if(title) title.textContent = "Final Gift";

if(description)
description.textContent =
"Click to reveal your birthday surprise ❤️";
}

}

/*==============================
      FINAL GIFT EVENT
===============================*/

giftFinal.addEventListener("click",()=>{

if(giftFinal.classList.contains("locked")){

return;

}

animateGift(giftFinal);

openModal(modalFinal);

});

/*==============================
      MUSIC
===============================*/

/*==============================
        MUSIC PLAYER
==============================*/


let musicPlaying = false;

// Start music
function startMusic(){

    birthdayMusic.play()
    .then(()=>{

        musicPlaying = true;
        musicButton.textContent = "🔊";

    })
    .catch(()=>{

        console.log("Autoplay blocked until user interaction.");

    });

}

// Toggle button
musicButton.addEventListener("click",()=>{

    if(musicPlaying){

        birthdayMusic.pause();

        musicPlaying = false;

        musicButton.textContent = "🔇";

    }

    else{

        birthdayMusic.play();

        musicPlaying = true;

        musicButton.textContent = "🔊";

    }

});

/*==============================
      HEARTS
===============================*/

const hearts=document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="floatingHeart";

const icons=[

"💖",

"💕",

"💗",

"💞",

"🤍",

"🌸",

"✨"

];

heart.textContent=

icons[Math.floor(Math.random()*icons.length)];

heart.style.left=

Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=

(18+Math.random()*18)+"px";

heart.style.animationDuration=

(5+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,700);

/*==============================
      SPARKLES
===============================*/

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.textContent="✨";

sparkle.style.left=

Math.random()*100+"vw";

sparkle.style.top=

Math.random()*100+"vh";

sparkle.style.fontSize=

(12+Math.random()*16)+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},3000);

}

setInterval(createSparkle,1200);

/*==============================
      CELEBRATE BUTTON
===============================*/

celebrateButton.addEventListener("click",()=>{


celebrateButton.classList.add("celebrateOpening");


setTimeout(()=>{


modalFinal.classList.remove("show");


document.querySelectorAll("section").forEach(section=>{

section.style.display="none";

});


const memoryPage = document.getElementById("memoryPage");


memoryPage.style.display="flex";

memoryPage.classList.add("memoryEnter");

function launchConfetti(){

console.log("Confetti!");

}


},1200);


});

/*==============================
      PLACEHOLDER
===============================*/

/* launchConfetti()
   will be added in Part 2. */

