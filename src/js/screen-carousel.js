import Swiper from "swiper";
import { Mousewheel, Pagination } from "swiper/modules";

export function initScreenCarousel() {
  new Swiper(".vertical-slider", {
    direction: "vertical",
    modules: [Mousewheel, Pagination],
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
