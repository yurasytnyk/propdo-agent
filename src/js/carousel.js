import Swiper from "swiper";
import { Scrollbar, Keyboard } from "swiper/modules";

import "swiper/css/bundle";

export function initCarousel() {
  new Swiper(".swiper", {
    slidesPerView: "auto",
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
