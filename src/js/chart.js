import {
  Chart,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
  Tooltip,
  Colors,
  Legend,
} from "chart.js";

import { zeroLine } from "./chart-plugins/zero-line";
import { getTailwindTheme } from "./get-tailwind-theme";
import { getCurrencyFormat } from "./get-currency-format";

export function initChart(datasets) {
  const { colors, fontFamily } = getTailwindTheme();
  const ctx = document.getElementById("chart");

  Chart.register(LinearScale, BarController, BarElement, CategoryScale, Tooltip, Colors, Legend);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
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
        },
        y: {
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
        },
        y1: {
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
        },
      },
      plugins: {
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
              size: 12,
            },
          },
        },
      },
    },
    plugins: [zeroLine],
  });
}
