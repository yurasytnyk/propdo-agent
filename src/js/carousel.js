import Swiper from "swiper";
import "swiper/css/bundle";

export function initCarousel() {
  new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
}
