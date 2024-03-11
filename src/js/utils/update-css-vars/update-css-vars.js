import { getTailwindTheme } from "../get-tailwind-theme/get-tailwind-theme";

export function updateCssVars(swiper) {
  const { colors } = getTailwindTheme();

  swiper.on("slideChange", (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const theme = activeSlide.dataset.slideTheme;
    const root = document.querySelector(":root");

    if (theme === "light") {
      root.style.setProperty("--swiper-pagination-color", colors.blue[100]);
      root.style.setProperty("--swiper-pagination-bullet-inactive-color", colors.blue[100]);
      root.style.setProperty("--nav-theme", colors.blue[25]);
      root.style.setProperty("--nav-text-theme", colors.black);
      root.style.setProperty("--nav-border-theme", colors.blue.a300);
    } else {
      root.style.setProperty("--swiper-pagination-color", "white");
      root.style.setProperty("--swiper-pagination-bullet-inactive-color", "white");
      root.style.setProperty("--nav-theme", colors.gray.a200);
      root.style.setProperty("--nav-text-theme", colors.white);
      root.style.setProperty("--nav-border-theme", colors.gray.a300);
    }
  });
}
