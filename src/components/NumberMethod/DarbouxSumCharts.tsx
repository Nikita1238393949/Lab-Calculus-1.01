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
import { calculateDarbouxSums, calculateDataSetforFunc } from "./MathFunctions";
import {Divider, Flex, Typography} from "antd";
import {n10ChartData, n35ChartData, n5ChartData} from "../ChartDatas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const ReportDarbouxCharts = () => {
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

  return (
    <Flex gap={"large"} style={{width:"30%"}}>
      <Line data={n5ChartData} options={options} />
      <Divider type={"vertical"} style={{ height: "auto" }} />
      <Line data={n10ChartData} options={options} />
      <Divider type={"vertical"} style={{ height: "auto" }} />
      <Line data={n35ChartData} options={options} />
    </Flex>
  );
};
const DarbouxSumsChart = ({
  n,
  to,
  from,
}: {
  n: number;
  to: number;
  from: number;
}) => {
  const { lowerSumPoints, upperSumPoints } = calculateDarbouxSums(n, to, from);
  const funcPoints = calculateDataSetforFunc(from, to);
  const chartData = {
    datasets: [
      {
        label: "Lower Darboux Sum",
        data: lowerSumPoints,
        borderColor: "#66CC33",
        borderWidth: 2,
        fill: false,
        stepped: true,
        pointRadius: 0,
      },
      {
        label: "Upper Darboux Sum",
        data: upperSumPoints,
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
  console.log(chartData);
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

export default DarbouxSumsChart;
