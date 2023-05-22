// search_box
document.addEventListener("DOMContentLoaded",function(){
    const searchBtn = document.querySelector(".glass")
    const searchBox = document.querySelector(".search_box")
    
    searchBtn.addEventListener('click',function(){
        console.log(searchBtn)
        searchBox.classList.toggle('show_box')
    })
})

// slider
document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slide");
    const nextbtns = document.querySelector(".nxtbtn");
    const prevbtns = document.querySelector(".prevbtn");

    sliders.forEach(function (slide, index) {
        slide.style.left = `${index * 100}%`;
    });

    let count = 0;

    prevbtns.addEventListener('click', function () {
        count--;
        coursal();
    });

    nextbtns.addEventListener('click', function () {
        count++;
        coursal();
    });

    function coursal() {

        if (count === sliders.length) {
            count = 0;
        }
        if (count < 0) {
            count = sliders.length - 1;
        }

        sliders.forEach(slide => {
            slide.style.transform = `translateX(-${count * 100}%)`;
            slide.style.transition = `all 0.5s ease-in-out`;
        });
    }
});


				
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    //   },
  });


//  province filter
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".detail_wrapper").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


  // gallery modals

const buttons = document.querySelectorAll("[data-modal]");
const closebtns = document.querySelectorAll('.close');
const gallerymodal = document.querySelectorAll('.modal_gallery');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.classList.add("open_modal");
    });
});

closebtns.forEach(closebtn =>{
    closebtn.addEventListener('click',() => {
       closebtn.closest(".open_modal").classList.remove('open_modal');
    });
});


// hamberger Menu

document.addEventListener("DOMContentLoaded",()=>{
  const hamMenu = document.querySelector(".hamburger_menu");
  const menu = document.querySelector(".menu_list");

  hamMenu.addEventListener("click",()=>{
    menu.classList.toggle("show_menu");
  })
})
