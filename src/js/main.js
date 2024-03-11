import { initChart } from "./utils/chart/chart";
import { initCarousel } from "./utils/carousel/carousel";

import { chartMockData } from "./mocks/chart-mock-data";
import { initScreenCarousel } from "./utils/screen-carousel/screen-carousel";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "@/styles/main.css";

initScreenCarousel();
initChart(chartMockData);
initCarousel();
