ScrollReveal({ reset: true });

// ScrollReveal().reveal(".hero_image", {
//   reset: false
// });

// ScrollReveal().reveal("#hero_image", {
//   duration: 4000,
//   scale: 0.2
// });


// ScrollReveal().reveal("#btn_arrow", {
//   reset:false,
//   duration: 2000,
//   origin: "left",
//   distance: "10%",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 1
// });

// ScrollReveal().reveal("#statistics", {
//   duration: 4000,
//   scale: 0.2
// });

// ScrollReveal().reveal("#section_six_heading", {
//   duration: 4000,
//   scale: 0.855
// });

// ScrollReveal().reveal("#section_five_heading", {
//   duration: 4000,
//   scale: 0.855
// });




// ScrollReveal().reveal("#earning_details", {
//   reset:false,
//   duration: 2000,
//   origin: "left",
//   distance: "40%",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 1
// });


// ScrollReveal().reveal("#revenue_details", {
//   reset:false,
//   duration: 2000,
//   origin: "right",
//   distance: "40%",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 1
// });

// ScrollReveal().reveal("#why", {
//   reset:false,
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 1
// });



// ScrollReveal().reveal("#section_six_card_one", {
//   reset:false,
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 1
// });

// ScrollReveal().reveal("#section_six_card_two", {
//   reset:false,
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 1
// });

// ScrollReveal().reveal("#section_six_card_three", {
//   reset:false,
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 1
// });

// ScrollReveal().reveal("#newsletter_box", {
//   duration: 4000,
//   scale: 0.2
// });


const btn = document.querySelector('#hamburger');
let mobile_menu = document.querySelector('#mobile_menu');

btn.addEventListener('click', (e) => {
  btn.classList.toggle('open');
  if(mobile_menu.classList.contains('checker')) {
    mobile_menu.classList.remove('checker')
    mobile_menu.classList.add('checker2');
  } else {
    mobile_menu.classList.remove('checker2')
    mobile_menu.classList.add('checker')
  }
})