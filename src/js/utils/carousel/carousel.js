import Swiper from "swiper";
import { Scrollbar, Keyboard } from "swiper/modules";

export function initCarousel() {
  new Swiper(".horizontal-slider", {
    slidesPerView: 2,
    direction: "horizontal",
    spaceBetween: 30,
    modules: [Scrollbar, Keyboard],
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
      draggable: true,
      dragSize: 380,
    },
  });
}
