// Enigme 1 - Jeu des filtres

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