import { getTailwindTheme } from "./get-tailwind-theme";

const { colors } = getTailwindTheme();

const radius = 10;
const borderRadius = { topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius };

export const chartMockData = [
  {
    label: "Valores para aluguel",
    data: [5e3, 8e3, 20e3, 30e3, 52e3, 28e3, 30e3, 10e3, 32e3],
    backgroundColor: colors.blue[100],
    borderRadius,
    borderSkipped: false,
    barThickness: 32,
  },
  {
    label: "Valores para venda",
    data: [10e3, 23e3, 28e3, 73e3, 110e3, 51e3, 55e3, 25e3, 52e3],
    backgroundColor: colors.blue[75],
    borderRadius,
    borderSkipped: false,
    barThickness: 32,
  },
  {
    label: "valor m2 por região",
    data: [48e3, 51e3, 55e3, 90e3, 145e3, 60e3, 48e3, 90e3, 110e3],
    backgroundColor: colors.blue[15],
    borderRadius,
    borderSkipped: false,
    barThickness: 32,
  },
];
