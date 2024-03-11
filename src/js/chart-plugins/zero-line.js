import { getTailwindTheme } from "../utils/get-tailwind-theme/get-tailwind-theme";

const { colors } = getTailwindTheme();

export const zeroLine = {
  id: "zeroLine",
  beforeDatasetsDraw: (chart, _, opts) => {
    const {
      ctx,
      chartArea: { left, right },
      scales: { y },
    } = chart;

    const width = opts.width || 1;

    ctx.beginPath();

    ctx.lineWidth = width;
    ctx.strokeStyle = colors.blue[25];

    ctx.moveTo(left, y.getPixelForValue(0));
    ctx.lineTo(right, y.getPixelForValue(0));

    ctx.stroke();
  },
};
