import { initChart } from "./chart";
import { initCarousel } from "./carousel";

import { chartMockData } from "./chart-mock-data";
import { initScreenCarousel } from "./screen-carousel";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "@/styles/main.css";

initScreenCarousel();
initChart(chartMockData);
initCarousel();
