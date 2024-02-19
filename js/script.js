var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  freeMode: true,
  hashNavigation: {
    replaceState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 7,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});


var acc = document.getElementsByClassName("Wdatastory");
var img = document.getElementById("data-story-default");
var ads = document.querySelector(".about-ds");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      for (i = 0; i < acc.length; i++) {
        acc[i].classList.remove("active");
        acc[i].nextElementSibling.style.maxHeight = null;
      }
      this.classList.toggle("active");
      panel.style.maxHeight = (panel.scrollHeight / window.innerHeight) * 40 + "vh";
    }
  });
}


gsap.from('#data-story-default', { width:0, duration: 2.5, ease: "elastic" });
document.getElementById("what").addEventListener('click', () => {
  gsap.to('#data-story-default', { width:0, duration: 1.5 })
  gsap.to("#write-data-story", { 
    width:0, duration: 1.5 })
  gsap.to('#how-write-data-story', { width:0,duration: 1.5 })
  gsap.to("#data-story", { 
    width:100 + '%', duration: 1.5 })

});
document.getElementById("who").addEventListener('click', () => {
  gsap.to('#data-story-default', { 
    width:0, duration: 1.5 })
  gsap.to("#data-story", {
    width:0, duration: 1.5 })
  gsap.to('#how-write-data-story', { width:100+"%", duration: 1.5 })
  gsap.to("#write-data-story", { width:0,duration: 1.5 })

});
document.getElementById("how").addEventListener('click', () => {
  gsap.to('#data-story-default', { 
    width:0, duration: 1.5 })
  gsap.to("#data-story", { 
    width:0, duration: 1.5 })
  gsap.to("#write-data-story", { width:100+"%", duration: 1.5 })
  gsap.to('#how-write-data-story', { width:0, duration: 1.5 })

});


document.addEventListener('click', function (event) {
  if (event.target.matches('.project-filter .list')) {
    var projectFilter = document.querySelectorAll('.project-filter li');
    for (var i = 0; i < projectFilter.length; i++) {
      projectFilter[i].classList.remove('project-filter-active');
    }
    event.target.classList.add('project-filter-active');
  }
}, false);


$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.project-item').show('1000');
    }
    else {
      $('.project-item').not('.' + value).hide('1000');
      $('.project-item').filter('.' + value).show('1000');
    }
  });
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
var scrollProgress = document.getElementById("myScrollProgress");

// Function to update the scroll progress width based on scroll position
function updateScrollProgress() {
  var scrollPosition = window.scrollY;
  var totalHeight = document.body.scrollHeight - window.innerHeight;
  var progress = (scrollPosition / totalHeight) * 100;
  scrollProgress.style.width = progress + "%";
}

// Call the updateScrollProgress function when scrolling
let toTop = document.getElementById("to-top")
window.addEventListener("scroll", ()=>{
  updateScrollProgress()
  var flexBoxs = document.getElementsByClassName('flex-box-1');
  var position = flexBoxs[0].getBoundingClientRect();
  [...flexBoxs].forEach(element=>{
    if (position.top < window.innerHeight) {
      gsap.to(element, {
     duration: 0.5, rotate: 0
      })
    }else{
      gsap.to(element, {
     duration: 0.5, rotate: -15})
    }
  })
  let footer = document.getElementById('contactme')
  let toTopIcon = document.querySelector("#to-top i")
  var footerPosition = footer.getBoundingClientRect();
  if (footerPosition.top<window.innerHeight) {
    gsap.to(toTop,{
      opacity:1,
      duration:.3
    })
  } else {
    gsap.to(toTop, {
      opacity:0,
      duration:.3
    })
  }
});
window.addEventListener('load',()=>{
  gsap.to(document.getElementById('header-logo'),{
    duration: 0.7, rotate: 180,scale:-.85
  })
})
//to top js script
toTop.addEventListener('click',()=>{
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})