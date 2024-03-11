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

import { zeroLine } from "../../chart-plugins/zero-line";
import { chartPlugins, xScale, y1Scale, yScale } from "../../configs/chart.configs";

export function initChart(datasets) {
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
        x: xScale,
        y: yScale,
        y1: y1Scale,
      },
      plugins: chartPlugins,
    },
    plugins: [zeroLine],
  });
}
