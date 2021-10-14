// Enigme 4 - Changement du dialogue de Maurice
var switchDialogueEnigma4 = document.getElementById("dialogue4");
var newsource = "img/dialogues-maurice/enigme4/dialogue-maurice4-2.png";

function changeImage() {
    switchDialogueEnigma4.setAttribute("src", newsource)
}

// Illustration à la fenêtre - Changement du dialogue de Maurice
var switchDialogueWindow = document.getElementById("dialogueFenetre-1");
var newsourceWindow = "img/dialogues-maurice/illufenetre/dialogue-maurice-illu2.png";

function changeImageWindow() {
    switchDialogueWindow.setAttribute("src", newsourceWindow)
}

// Enigme 5 - Changement de pages de l'herbier (Slideshow / Carrousel)

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

// Apparition de l'indice 
var appearingText = document.getElementById("herbier2")
var newText = "Le Chrysanthème, symbole de mort. <br> Allez chercher dans le salon";

function appearText() {
    if (appearingText.onclick="appearText();") {
        document.getElementById("reveal").innerHTML = newText;
    }
}