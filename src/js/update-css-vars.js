import { getTailwindTheme } from "./get-tailwind-theme";

export function updateCssVars(swiper) {
  const { colors } = getTailwindTheme();

  swiper.on("slideChange", (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const theme = activeSlide.dataset.slideTheme;
    const root = document.querySelector(":root");

    if (theme === "light") {
      root.style.setProperty("--swiper-pagination-color", colors.blue[100]);
      root.style.setProperty("--swiper-pagination-bullet-inactive-color", colors.blue[100]);
    } else {
      root.style.setProperty("--swiper-pagination-color", "white");
      root.style.setProperty("--swiper-pagination-bullet-inactive-color", "white");
    }
  });
}
