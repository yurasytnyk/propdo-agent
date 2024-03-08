import { getTailwindTheme } from "./get-tailwind-theme";

const { colors } = getTailwindTheme();

const radius = 10;
const borderRadius = { topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius };

export const chartMockData = [
  {
    label: "Valores para aluguel",
    data: [0, 8],
    backgroundColor: colors.blue[100],
    borderRadius,
    borderSkipped: false,
    barThickness: 32,
  },
  {
    label: "Valores para venda",
    data: [0, 23],
    backgroundColor: colors.blue[75],
    borderRadius,
    borderSkipped: false,
    barThickness: 32,
  },
  {
    label: "valor m2 por região",
    data: [0, 48],
    backgroundColor: colors.blue[15],
    borderRadius,
    borderSkipped: false,
    barThickness: 32,
  },
];
