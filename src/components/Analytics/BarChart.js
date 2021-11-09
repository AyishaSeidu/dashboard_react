import styled from '@emotion/styled';
import React from 'react';
import {Bar} from 'react-chartjs-2';

function BarChart({chartData, dataDescription, chartTitle, gridarea}) {
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

    //styling for chart area
    const ChartArea = styled.div`
    grid-area: ${gridarea};
    margin: auto;
    height: 70%;
    background-color: white;
    `;

    //browser ouput
    return (
        <ChartArea>
            <Bar data={data} options={{maintainAspectRatio: true}} />
        </ChartArea>
    )
}

export default BarChart

