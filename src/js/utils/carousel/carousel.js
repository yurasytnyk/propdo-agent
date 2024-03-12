import Swiper from "swiper";
import { Scrollbar, Keyboard } from "swiper/modules";

import { carouselBreakpoints } from "../../configs/carousel.configs";

export function initCarousel() {
  new Swiper(".horizontal-slider", {
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
      dragSize: matchMedia("(max-width: 1024px)").matches ? 112 : 380,
    },
    breakpoints: carouselBreakpoints,
  });
}
