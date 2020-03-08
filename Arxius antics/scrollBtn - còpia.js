// button scroll
var mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  menuScroll();
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// MENU SCROLL

// Change style of navbar on scroll
/*
window.onscroll = function () {
  menuScroll()
};
*/

function menuScroll() {
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