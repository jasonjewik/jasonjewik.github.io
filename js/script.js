function load() {
     M.AutoInit();
     resize();
}

function resize() {
     var width = screen.width;
     var height = screen.height;

     var landingText = document.getElementById('landing-text');
     var aboutText = document.getElementsByClassName('about-text');
     var projectsHeading = document.getElementById('projects-heading');
     var projectsSubHeading = document.getElementById('projects-subheading');
     var photoHeading = document.getElementsByClassName('photos-heading');

     if (width > height) // screen is landscape oriented
     {
          landingText.style.fontSize = "5vw";
          aboutText[0].style.fontSize = "2.5vw";
          aboutText[1].style.fontSize = "2.5vw";
          projectsHeading.style.fontSize = "4vw";
          projectsSubHeading.style.fontSize = "2vw";
          photosHeading.style.fontSize = "4vw";
     } else // screen is portrait oriented
     {
          landingText.style.fontSize = "8vh";
          aboutText[0].style.fontSize = "4vh";
          aboutText[1].style.fontSize = "4vh";
          projectsHeading.style.fontSize = "5vh";
          projectsSubHeading.style.fontSize = "3vh";
          photosHeading.style.fontSize = "5vh";
     }
}
