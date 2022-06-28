
function openNav() {
    document.querySelector("#mySidebar").style.width = "240px";
    document.querySelector("#main").style.marginLeft = "240px";
    
  }
  
  function closeNav() {
    document.querySelector("#mySidebar").style.width = "0";
    document.querySelector("#main").style.marginLeft= "0";
   
    
  }

 
  let mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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