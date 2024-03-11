import Swiper from "swiper";
import { Mousewheel, Pagination } from "swiper/modules";

import { updateCssVars } from "../update-css-vars/update-css-vars";

export function initScreenCarousel() {
  if (matchMedia("(min-width: 1280px)").matches) {
    const swiper = new Swiper(".vertical-slider", {
      direction: "vertical",
      modules: [Mousewheel, Pagination],
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    updateCssVars(swiper);
  }
}
