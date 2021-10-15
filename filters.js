// Enigme 1 - Jeu des filtres
// Jeu des filtres

var btnContainer = document.getElementById("filter-container");
var filterRed = document.getElementById("redFilter");
var filterBlue = document.getElementById("blueFilter");
var filterGreen = document.getElementById("greenFilter");

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
        filterGreen.classList.remove('active');
    } else {
        filterGreen.className += " active";
    }
}

filterGreen.addEventListener("click", toggleActiveGreen)

function switchEnigma1() {
    if (filterBlue.classList.contains('active') && filterRed.classList.contains('active') && filterGreen.classList.contains('active')){
        var switchToBlack = document.getElementById("photo_famille");
        var switchDialogue1ToBlack = document.getElementById("dialogue1");
        var BlackPhotoSource = "img/assets-enigme/photo-famille-variations/peinture_de_famille-filtrerouge+bleu+vert.png";
    
        switchToBlack.setAttribute("src", BlackPhotoSource);
        switchDialogue1ToBlack.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie-allfilters.png");
    } else if (filterBlue.classList.contains('active') && filterRed.classList.contains('active')) {
        var switchToMagenta = document.getElementById("photo_famille");
        var switchDialogue1ToMagenta = document.getElementById("dialogue1");
        var magentaPhotoSource = "img/assets-enigme/photo-famille-variations/peinture_de_famille-filtrerouge+bleu.png";
    
        switchToMagenta.setAttribute("src", magentaPhotoSource);
        switchDialogue1ToMagenta.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie-red+blue.png");
    
    } else if (filterBlue.classList.contains('active') && filterGreen.classList.contains('active')) {
        var switchToDeepGreen = document.getElementById("photo_famille");
        var switchDialogue1ToDeepGreen = document.getElementById("dialogue1");
        var deepGreenPhotoSource = "img/assets-enigme/photo-famille-variations/peinture_de_famille-filtrebleu+vert.png";
    
        switchToDeepGreen.setAttribute("src", deepGreenPhotoSource);
        switchDialogue1ToDeepGreen.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie-blue+green.png");

    }else if (filterRed.classList.contains('active') && filterGreen.classList.contains('active')) {
            var switchToYellow = document.getElementById("photo_famille");
            var switchDialogue1ToYellow = document.getElementById("dialogue1");
            var YellowPhotoSource = "img/assets-enigme/photo-famille-variations/peinture_de_famille-filtrerouge+vert.png";
        
            switchToYellow.setAttribute("src", YellowPhotoSource);
            switchDialogue1ToYellow.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie-red+green.png");
    } else if (filterBlue.classList.contains('active')) {
        console.log("test");
        var switchToBlue = document.getElementById("photo_famille");
        var switchDialogue1ToBlue = document.getElementById("dialogue1");
        var bluePhotoSource = "img/assets-enigme/photo-famille-variations/peinture_de_famille-filtrebleu.png";
        
        switchToBlue.setAttribute("src", bluePhotoSource);
        switchDialogue1ToBlue.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie-blue.png");
    } else if (filterRed.classList.contains('active')) {
        console.log("test");
        var switchToRed = document.getElementById("photo_famille");
        var switchDialogue1ToRed = document.getElementById("dialogue1");
        var redPhotoSource = "img/assets-enigme/photo-famille-variations/peinture_de_famille-filtrerouge.png";
        
        switchToRed.setAttribute("src", redPhotoSource);
        switchDialogue1ToRed.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie-red.png");
    } else if (filterGreen.classList.contains('active')) {
        console.log("test");
        var switchToGreen = document.getElementById("photo_famille");
        var switchDialogue1ToGreen = document.getElementById("dialogue1");
        var greenPhotoSource = "img/assets-enigme/photo-famille-variations/peinture_de_famille-filtrevert.png";
        
        switchToGreen.setAttribute("src", greenPhotoSource);
        switchDialogue1ToGreen.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie-green.png");
    } else {
        var backToNormalPhoto = document.getElementById("photo_famille");
        var backToNormalDialogue = document.getElementById("dialogue1");
        
        
        backToNormalPhoto.setAttribute("src", src="img/assets-enigme/photo-famille-variations/peinture_de_famille.png");
        backToNormalDialogue.setAttribute("src", "img/dialogues-maurice/enigme1/dialogue-maurice1-dioptrie.png");
    }
}

filterGreen.addEventListener("click", switchEnigma1)
filterRed.addEventListener("click", switchEnigma1)
filterBlue.addEventListener("click", switchEnigma1)
