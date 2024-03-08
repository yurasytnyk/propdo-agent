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
        },
        y: {
          stacked: true,
          grid: {
            color: colors.blue[25],
            drawTicks: false,
          },
          ticks: {
            stepSize: 25,
            color: colors.gray[50],
            maxTicksLimit: 150,
          },
          border: {
            display: false,
            dash: [4, 4],
          },
        },
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
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
