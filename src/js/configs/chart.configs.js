import { getTailwindTheme } from "../utils/get-tailwind-theme/get-tailwind-theme";
import { getCurrencyFormat } from "../utils/get-currency-format/get-currency-format";

const { colors, fontFamily } = getTailwindTheme();

export const xScale = {
  stacked: true,
  grid: {
    display: false,
  },
  border: {
    display: false,
  },
  ticks: {
    padding: 24,
    color: colors.gray[50],
    font: {
      size: 14,
      family: fontFamily.primary,
    },
  },
};

export const yScale = {
  max: 150e3,
  grid: {
    color: colors.blue[25],
    drawTicks: false,
  },
  ticks: {
    padding: 16,
    color: colors.gray[50],
    stepSize: 25e3,
    maxTicksLimit: 10,
    callback: getCurrencyFormat,
  },
  border: {
    display: false,
    dash: [4, 4],
  },
};

export const y1Scale = {
  position: "right",
  border: {
    display: false,
  },
  grid: {
    display: false,
    drawTicks: false,
  },
  ticks: {
    padding: 16,
    callback: (value) => `${value * 100}%`,
    color: colors.gray[50],
  },
};

export const chartPlugins = {
  tooltip: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    labels: {
      padding: 45,
      boxWidth: 16,
      boxHeight: 16,
      usePointStyle: true,
      pointStyle: "circle",
      font: {
        family: fontFamily.primary,
        size: matchMedia("max-width: 1024px").matches ? 8 : 12,
      },
    },
  },
};
