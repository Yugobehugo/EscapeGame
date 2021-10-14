// Enigme 1 - Jeu des filtres
// Jeu des filtres

var btnContainer = document.getElementById("filter-container");
var filterRed = document.getElementById("redFilter");
var filterBlue = document.getElementById("blueFilter");
var filterGreen = document.getElementById("greenFilter");
var btns = btnContainer.getElementsByClassName("filterer");

function toggleActiveRed() {
    if (filterRed.classList.contains('active')) {
        console.log("test");
        filterRed.classList.remove('active');
    } else {
        filterRed.className += " active";
        console.log("true");
    }
}

filterRed.addEventListener("click", toggleActiveRed)

function toggleActiveBlue() {
    if (filterBlue.classList.contains('active')) {
        console.log("test");
        filterBlue.classList.remove('active');
    } else {
        filterBlue.className += " active";
        console.log("true")
    }
}

filterBlue.addEventListener("click", toggleActiveBlue)

function toggleActiveGreen() {
    if (filterGreen.classList.contains('active')) {
        console.log("test");
        filterGreen.classList.remove('active');
    } else {
        filterGreen.className += " active";
        console.log("true")
    }
}

filterGreen.addEventListener("click", toggleActiveGreen)

// Reste le changement d'image à faire 
// Check si tel filtre est actif et si oui, afficher tel ou tel image

// Apparition des noms à l'arrière de la photo 

var switchDialogueEnigma1 = document.getElementById("dialogue1");
var newsourceEnigma1 = src="img/dialogues-maurice/enigme1/dialogue-maurice1-onclick-turnphoto.png";

function changeImageEnigma1() {
    switchDialogueEnigma1.setAttribute("src", newsourceEnigma1)
}

// Enigme 4 - Changement du dialogue de Maurice
var switchDialogueEnigma4 = document.getElementById("dialogue4");
var newsourceEnigma4 = "img/dialogues-maurice/enigme4/dialogue-maurice4-2.png";

function changeImageEnigma4() {
    switchDialogueEnigma4.setAttribute("src", newsourceEnigma4)
}

// Illustration à la fenêtre - Changement du dialogue de Maurice
var switchDialogueWindow = document.getElementById("dialogueFenetre-1");
var newsourceWindow = "img/dialogues-maurice/illufenetre/dialogue-maurice-illu2.png";

function changeImageWindow() {
    switchDialogueWindow.setAttribute("src", newsourceWindow)
}

// Enigme 5 - Changement de pages de l'herbier (Slideshow / Carrousel)
// Apparition de l'indice 

var appearingText = document.getElementById("herbier2")
var newText = "Le Chrysanthème, symbole de mort. <br> Allez chercher dans le salon";

function appearText() {
    if (appearingText.onclick="appearText();") {
        document.getElementById("reveal").innerHTML = newText;
    }
}