import Swiper from "swiper";
import { Scrollbar, Keyboard } from "swiper/modules";

import { testimonialsCarouselBreakpoints } from "../../configs/testimonials-carouse.configs";

export function initTestimonialsCarousel() {
  new Swiper(".testimonials-slider", {
    direction: "horizontal",
    spaceBetween: 30,
    modules: [Scrollbar, Keyboard],
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
      draggable: true,
      dragSize: 380,
    },
    breakpoints: testimonialsCarouselBreakpoints,
  });
}
