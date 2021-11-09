import styled from '@emotion/styled';
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

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

    const ChartArea = styled.div`
    grid-area: ${gridarea};
    margin: auto;
    background-color: white;
    `;

    return (
        <ChartArea>
            <Doughnut data={data} options={{maintainAspectRatio: true}} />
        </ChartArea>
    )
}

export default DoughnutChart
