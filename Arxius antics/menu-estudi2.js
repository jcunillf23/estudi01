// Change style of navbar on scroll
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var navbar = document.getElementById("myNavbar");
  var idLogo = document.getElementById("Logo");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = "clnavBar" + " j-w3-card" + " j-w3-animate-top" + " j-w3-white";
    idLogo.className = "img-height" + " j-w3-animate-top";
  } else {
    navbar.className = navbar.className.replace(" j-w3-card j-w3-animate-top j-w3-white", "");
    idLogo.className = idLogo.className.replace("img-height j-w3-animate-top", "");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("j-w3-show") == -1) {
    // no hi ha una classe w3-show
    x.className += " j-w3-show";
  } else {
    // elimina la classe w3-show -> display: block
    x.className = x.className.replace(" j-w3-show", "");
  }
}

// IDIOMES

function canviIdioma(idioma) {
  /*alert("som aqui: " + idioma);*/
  var midES = document.getElementsByClassName("idES");
  var midEN = document.getElementsByClassName("idEN");
  var midCA = document.getElementsByClassName("idCA");

  if (idioma == "CA") {
    document.getElementById("idES").style.display = "none";
    document.getElementById("idEN").style.display = "none";
    document.getElementById("idCA").style.display = "visible";
    document.getElementById("btnCA").style.display = "none";
    document.getElementById("btnES").style.display = "visible";
    document.getElementById("btnEN").style.display = "visible";

  } else if (idioma == "ES") {
    document.getElementById("idES").style.display = "visible";
    document.getElementById("idEN").style.display = "none";
    document.getElementById("idCA").style.display = "none";
    document.getElementById("btnCA").style.display = "visible";
    document.getElementById("btnES").style.display = "none";
    document.getElementById("btnEN").style.display = "visible";

  } else if (idioma == "EN") {
    alert("he trobat l'idioma: " + idioma);
    alert(midEN.length);
    for (x = 0; x <  midEN.length; x++) {
      alert(x);
      alert(midCA[x].style.display);
      midCA[x].style.display = "none";
      midES[x].style.display = "none";
      midEN[x].style.display = "inline-block";  
    }
    document.getElementById("btnCA").style.display = "inline-block";
    document.getElementById("btnES").style.display = "inline-block";
    alert("amagar boto");
    document.getElementById("btnEN").style.display = "none";
  }

}