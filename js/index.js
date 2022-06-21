/* 
   INIT NAVIGATION
 */
$(document).ready(function () {
   $(".header__navbar").click(function () {
      if ($(".header__navbar").is(".hide")) {
         $(".header__navbar").removeClass("hide");
         $(".header__navbar").addClass("show");

         $(".header__logo").removeClass("hide");
         $(".header__logo").addClass("show");

         $(".header__navDropDown").removeClass("hide");
         $(".header__navDropDown").addClass("show");
      } else {
         $(".header__navbar").removeClass("show");
         $(".header__navbar").addClass("hide");

         $(".header__logo").removeClass("show");
         $(".header__logo").addClass("hide");

         $(".header__navDropDown").removeClass("show");
         $(".header__navDropDown").addClass("hide");
      }
   });
});

$(window).scroll(function () {
   if ($(this).scrollTop() > 20) {
      $("#header").addClass("active");
   } else {
      $("#header").removeClass("active");
   }
});
/* 
   INIT SLICK
 */

// Services
$(document).ready(function () {
   $(".services__list").slick({
      slidesToShow: 4,
      slideToScroll: 1,
      dots: true,
      infinite: false,
   });
});

// Footer
$(document).ready(function () {
   $(".footer__list").slick({
      slidesToShow: 1,
      slideToScroll: 1,
      autoplay: true,
      arrows: false,
      fade: true,
      cssEase: "linear",
      autoplaySpeed: 5000,
   });
});

/* 
   INIT VENOBOX
 */

// Customer
new VenoBox({
   selector: ".venobox",
   maxWidth: "50%",
   infinigall: true,
   numeration: true,
});

/* 
   INIT SCROLL TO TOP
*/
$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $(".scrollToTop").removeClass("active");
   } else {
      $(".scrollToTop").addClass("active");
   }
});

$(".scrollToTop").click(function () {
   $("html, body").animate({ scrollTop: 0 }, 1000);
   return false;
});

/* 
   INIT TYPED
*/
var typed = new Typed(".typed", {
   strings: ["websites", "apps", "motion"],
   loop: true,
   typeSpeed: 60,
   backDelay: 1000,
   backSpeed: 60,
});

/* 
   INIT WOW
*/
new WOW().init();
