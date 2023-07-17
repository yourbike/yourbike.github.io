$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".mnu_top").slideDown(300);
    }
    else {
      $(".mnu_top").slideUp(300);
    }
  });
})
let myElement = document.getElementById('container');
let mc = new Hammer(myElement);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let timerId = setInterval(() => plusSlides(1), 10000);
mc.on("swipeleft swiperight", function (ev) {
  if (ev.direction == 4)
    plusSlides(-1);
  else
    plusSlides(1);
});

var modal = document.getElementById("myModal");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
var img = document.getElementById("add_img_contact");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}