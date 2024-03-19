import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import {calculateDataSetforFunc} from "./MathFunctions";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RiemannSumsProps {
    n: number;
    method: 'left' | 'right' | 'middle' | 'random';
}

const RiemannSumsChart: React.FC<RiemannSumsProps> = ({n, method}) => {
    const from = 1
    const to = 2
    const calculateRiemannSums = () => {
        const step = (to - from) / n;
        let riemannPoints = [];

        for (let i = 0; i < n; i++) {
            const xStart = from + i * step;
            let xi;

            switch (method) {
                case 'left':
                    xi = xStart;
                    break;
                case 'right':
                    xi = xStart + step;
                    break;
                case 'middle':
                    xi = xStart + step / 2;
                    break;
                case 'random':
                    xi = xStart + Math.random() * step;
                    break;
                default:
                    xi = xStart;
            }

            const y = xi * xi;

            riemannPoints.push({x: xStart, y: y}, {x: xStart + step, y: y});
        }

        return riemannPoints;
    };

    const riemannPoints = calculateRiemannSums();
    const funcPoints = calculateDataSetforFunc();

    const chartData = {
        datasets: [
            {
                label: `Riemann Sum with ${method} equipartition`,
                data: riemannPoints,
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                fill: false,
                stepped: true,
                pointRadius: 0
            },
            {
                label: "f(x)",
                data: funcPoints,
                borderColor: "#CCFFFF",
                borderWidth: 1,
                pointRadius: 0
            }
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'linear' as const,
                position: 'bottom' as const,
            },
        },
        elements: {
            line: {
                tension: 0
            }
        }
    };

    return <Line options={options} data={chartData}/>;
};

export default RiemannSumsChart;
