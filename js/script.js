function resize() {
     var width = screen.width;
     var height = screen.height;

     var landingText = document.getElementById('landing-text');
     var aboutText = document.getElementsByClassName('about-text');

     if (width > height) // screen is landscape oriented
     {
          landingText.style.fontSize = "5vw";
          aboutText[0].style.fontSize = "vw";
          aboutText[1].style.fontSize = "vw";
     } else // screen is portrait oriented
     {
          landingText.style.fontSize = "6vh";
          aboutText[0].style.fontSize = "vh";
          aboutText[1].style.fontSize = "vh";
     }
}
