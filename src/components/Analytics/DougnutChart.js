import styled from '@emotion/styled';
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function DougnutChart({chartData, dataDescription, chartTitle, gridarea}) {
    const data = {
        labels: dataDescription,
        datasets: [
            {
                label: chartTitle,
                data: chartData,
                backgroundColor: [`${({ theme }) => theme.colors.primary}`, 'green']
            }
        ]
    }

    const ChartArea = styled.div`
    grid-area: ${gridarea};
    `;

    return (
        <ChartArea>
            <Doughnut data={data} options={{maintainAspectRatio: false}} />
        </ChartArea>
    )
}

export default DougnutChart
