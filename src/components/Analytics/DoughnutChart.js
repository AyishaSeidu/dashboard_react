import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { ChartArea } from '../Styles';

function DoughnutChart({chartData, dataDescription, chartTitle, gridarea}) {
    const data = {
        labels: dataDescription,
        datasets: [
            {
                label: chartTitle,
                data: chartData,
                backgroundColor: [`${({ theme }) => theme.colors.primary}`, '#00c7b6']
            }
        ]
    }


    return (
        <ChartArea gridarea = {gridarea}>
            <Doughnut data={data} options={{maintainAspectRatio: false}} />
        </ChartArea>
    )
}

export default DoughnutChart
