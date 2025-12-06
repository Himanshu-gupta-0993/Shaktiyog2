 
const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".navbar ul li a");

// Open menu
ham.addEventListener("click", () => {
  nav.classList.add("active");
});

// Close menu on X button
closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

// Close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
const header = document.querySelector(".nav-header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// hero-section
gsap.from(".hero-left", {opacity:0, x:-80, duration:1});
gsap.from(".hero-right", {opacity:0, x:80, duration:1});





// trusted-community

// Counter Animation
// Count-up for stat boxes
// Count-up for stat boxes
 // Counter Animation
 







  (function(){
    // Tilt effect: moves card slightly based on mouse position
    const cards = document.querySelectorAll('.sy-card');
    cards.forEach((card, idx) => {
      // set custom animation delay index
      card.style.setProperty('--i', idx);

      const inner = card.querySelector('.sy-card-inner');
      const img = card.querySelector('.sy-img');

      function handleMove(e){
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width; // 0..1
        const y = (e.clientY - rect.top) / rect.height; // 0..1
        const rotY = (x - 0.5) * 16; // -8 .. +8 deg
        const rotX = (0.5 - y) * 8;  // -4 .. +4 deg
        inner.style.transform = `translateZ(0) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-6px)`;
        // parallax image slight move
        img.style.transform = `scale(1.06) translate3d(${(x-0.5)*18}px, ${(y-0.5)*8}px, 0)`;
      }

      function reset(){
        inner.style.transform = `translateZ(0) translateY(-6px)`; // keep lifted look
        img.style.transform = 'scale(1) translate3d(0,0,0)';
      }

      // use pointer events (works for mouse + touch)
      card.addEventListener('pointermove', handleMove);
      card.addEventListener('pointerleave', reset);
      card.addEventListener('pointercancel', reset);
      card.addEventListener('blur', reset);
    });
  })();





















  // faq-------------------------------------------------
    
  
 // FAQ Open/Close
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const answer = item.querySelector(".faq-answer");
  const arrow = item.querySelector(".arrow");

  item.addEventListener("click", () => {

    if (item.classList.contains("active")) {
      item.classList.remove("active");
      arrow.style.transform = "rotate(0deg)";
      answer.style.height = "0px";
    } else {
      // close all others
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".arrow").style.transform = "rotate(0deg)";
        i.querySelector(".faq-answer").style.height = "0px";
      });

      item.classList.add("active");
      arrow.style.transform = "rotate(180deg)";
      answer.style.height = answer.scrollHeight + "px";
    }
  });
});

// TAB SWITCHING
const tabs = document.querySelectorAll(".faq-tab");
const lists = document.querySelectorAll(".faq-list");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabName = tab.getAttribute("data-tab");

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    lists.forEach(list => {
      list.classList.remove("active");
      if (list.id === tabName) list.classList.add("active");
    });
  });
});
