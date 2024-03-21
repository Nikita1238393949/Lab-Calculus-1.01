import styled from "styled-components";
import { Row } from "antd";

const StyledRow = styled(Row)`
  padding: 30px;
  padding-top: 0;
  padding-right: 0;
`;

interface Trapezoid {
  f: (x: number) => number;
  a: number;
  b: number;
  n: number;
}

const calculateDataSetforFunc = (from: number, to: number) => {
  const funcPoints = [];
  for (let x = from; x <= to; x += 0.05) {
    const y = x * x;
    funcPoints.push({ x: x, y: y });
  }
  return funcPoints;
};

const trapezoidIntegral = ({ f, a, b, n }: Trapezoid): number => {
  const h = (b - a) / n;
  let sum = 0.5 * (f(a) + f(b));
  for (let i = 1; i < n; i++) {
    sum += f(a + i * h);
  }
  return sum * h;
};

const calculateDarbouxSums = (n: number, to: number, from: number) => {
  const step = (to - from) / n;
  let lowerSum = 0;
  let upperSum = 0;
  let lowerSumPoints = [];
  let upperSumPoints = [];

  for (let i = 0; i < n; i++) {
    const xStart = from + i * step;
    const xEnd = xStart + step;
    const minVal = Math.min(xStart * xStart, xEnd * xEnd);
    const maxVal = Math.max(xStart * xStart, xEnd * xEnd);

    lowerSum += minVal * step;
    upperSum += maxVal * step;

    lowerSumPoints.push({ x: xStart, y: minVal }, { x: xEnd, y: minVal });
    upperSumPoints.push({ x: xStart, y: maxVal }, { x: xEnd, y: maxVal });
  }

  return { lowerSum, upperSum, lowerSumPoints, upperSumPoints };
};

const calculateRiemannSums = (
  n: number,
  method: "left" | "right" | "middle" | "random",
  from: number,
  to: number,
) => {
  const step = (to - from) / n;
  let riemannPoints = [];

  for (let i = 0; i < n; i++) {
    const xStart = from + i * step;
    let xi;

    switch (method) {
      case "left":
        xi = xStart;
        break;
      case "right":
        xi = xStart + step;
        break;
      case "middle":
        xi = xStart + step / 2;
        break;
      case "random":
        xi = xStart + Math.random() * step;
        break;
      default:
        xi = xStart;
    }

    const y = xi * xi;

    riemannPoints.push({ x: xStart, y: y }, { x: xStart + step, y: y });
  }

  return riemannPoints;
};
export {
  calculateDataSetforFunc,
  trapezoidIntegral,
  calculateRiemannSums,
  calculateDarbouxSums,
  StyledRow,
};
