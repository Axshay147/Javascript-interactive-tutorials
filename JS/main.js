// Scorlling 
    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
      duration: 2000,
      origin: 'bottom'
    });
    sr.reveal('.showcase-left', {
      duration: 2000,
      origin: 'top',
      distance: '300px'
    });
    sr.reveal('.showcase-right', {
      duration: 2000,
      origin: 'right',
      distance: '300px'
    });
    sr.reveal('.showcase-btn', {
      duration: 2000,
      delay: 2000,
      origin: 'bottom'
    });
    sr.reveal('#testimonial div', {
      duration: 2000,
      origin: 'bottom'
    });
    sr.reveal('.info-left', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      viewFactor: 0.2
    });
    sr.reveal('.info-right', {
      duration: 2000,
      origin: 'right',
      distance: '300px',
      viewFactor: 0.2
    });

    $(function () {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signUp");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
 
}

// const signinModal = document.querySelector('#modalTwo'); // Get modal
// const signIn = document.querySelector('.login'); // Get the Login link from Nav

// signIn.addEventListener('click', () => {
// signinModal.style.display = "Block";
// });



// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}