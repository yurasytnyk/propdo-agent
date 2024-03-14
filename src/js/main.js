import { initChart } from "./utils/chart/chart";
import { initCarousel } from "./utils/carousel/carousel";

import { chartMockData } from "./mocks/chart-mock-data";
import { initScreenCarousel } from "./utils/screen-carousel/screen-carousel";
import { initTestimonialsCarousel } from "./utils/testimonials-carousel/testimonials-carousel";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "@/styles/main.css";

const App = {
  data() {
    return {
      options: [{ label: "1", value: 1 }],
      value2: [1, 10],
      marks: {
        0: "1",
        5: "5",
        10: "10",
      },
      checked: false,
      checked1: false,
    };
  },
};

const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");

initScreenCarousel();
initChart(chartMockData);
initCarousel();
initTestimonialsCarousel();
