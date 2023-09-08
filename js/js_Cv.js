
var audio = document.getElementById("audio");  // Avec js
// var audio = $("#audio")    // Avec Jquery

var playPauseBTN = document.getElementById("playPauseBTN");   // Avec js
// var playPauseBTN = $("#playPauseBTN"); // Avec Jquery

var animations = document.querySelectorAll(".images"); // recueil toutes les animations du dom  // Avec js
// var animations = $(".images");      // Avec jquery

var count = 0;
var imageMouv = "paused";


$(".images").hide(); // Je veux qu'il cache les images au depart, et apparaissent lors du clic d'execution



function imageRun(){
    animations.forEach(animation => {
      animation.style.animationPlayState = imageMouv === "running" ? "paused" : "running";
    })
}

function playPause(){

    if(count == 0){ // Si le compteur est à 0, le clic met le compteur 1 et joue la musique, et affiche le logo pause sur le bouton.
        $(".images").show();
        count = 1;
        audio.play();
        playPauseBTN.innerHTML="Pause &#9208;"  // l'émoji de pause
        imageMouv = "paused"; // Je met cette variable pour que la fonction sache que l'image est en pause (même après un stop) et lance l'animation
        imageRun();
        $("#imgpp").attr("src","./images/images casa de papel.jfif");
       
    }else{ // Par contre si c'est entrain de jouer, le clic met le compteur à O et fait la pause, et affiche le logo play
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML="Play &#9658;"  // affiche l'émoji de play pour lancer la musique
        imageMouv = "running";
        imageRun();
    }
    
}


   

function imageBegin(){
    animations.forEach(animation => {
   //   animation.style.animation = "none";
   //   animation.offsetWidth;
   // reappliquer tous les paramètres de CSS. Un peu long. A voir.

   animation.style.animationPlayState == "paused";
    })
}


function stop(){
   
      
        audio.pause();  // Mettre l'audio à pause
        count = 0;
        // playPause()  // Appel de la fonction playPause
        audio.currentTime= 0; // Mttre le chrono de l'audio à 0;
        playPauseBTN.innerHTML = "Play &#9658;" // affiche l'émoji de play pour lancer la musique
     //   $(".images").hide();
      $("#imgpp").attr("src","./images/WIN_20230327_14_04_42_Pro.jpg"); 
      imageMouv = "running";
      imageRun(); // Va juste mettre les images en pause 
    
    
   
}

