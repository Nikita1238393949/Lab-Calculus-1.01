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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const DarbouxSumsChart = ({n}: { n: number }) => {
    const from = 1
    const to = 2
    const calculateDarbouxSums = () => {
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


            lowerSumPoints.push({x: xStart, y: minVal}, {x: xEnd, y: minVal});
            upperSumPoints.push({x: xStart, y: maxVal}, {x: xEnd, y: maxVal});
        }

        return {lowerSum, upperSum, lowerSumPoints, upperSumPoints};
    };

    const {lowerSumPoints, upperSumPoints} = calculateDarbouxSums();

    const chartData = {
        datasets: [
            {
                label: 'Lower Darboux Sum',
                data: lowerSumPoints,
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                fill: false,
                stepped: true,
            },
            {
                label: 'Upper Darboux Sum',
                data: upperSumPoints,
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                fill: false,
                stepped: true,
            }
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'linear' as const,
                position: 'bottom' as const
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

export default DarbouxSumsChart;
