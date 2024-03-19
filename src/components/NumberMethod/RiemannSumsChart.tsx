import React from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { calculateDataSetforFunc, calculateRiemannSums } from "./MathFunctions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface RiemannSumsProps {
  n: number;
  method: "left" | "right" | "middle" | "random";
  from: number;
  to: number;
}

const RiemannSumsChart: React.FC<RiemannSumsProps> = ({
  n,
  method,
  from,
  to,
}) => {
  const riemannPoints = calculateRiemannSums(n, method, from, to);
  const funcPoints = calculateDataSetforFunc(from, to);

  const chartData = {
    datasets: [
      {
        label: `Riemann Sum with ${method} equipartition`,
        data: riemannPoints,
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        fill: false,
        stepped: true,
        pointRadius: 0,
      },
      {
        label: "f(x)",
        data: funcPoints,
        borderColor: "#CCFFFF",
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear" as const,
        position: "bottom" as const,
      },
    },
    elements: {
      line: {
        tension: 0,
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default RiemannSumsChart;
