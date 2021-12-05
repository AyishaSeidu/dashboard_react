import React from 'react';
import {Bar} from 'react-chartjs-2';
import { ChartArea } from '../Styles';

function BarChart({chartData, dataDescription, chartTitle, gridarea}) {
    const data = {
        labels: dataDescription,
        datasets: [
            {
                label: chartTitle,
                data: chartData,
                backgroundColor: [`${({ theme }) => theme.colors.primary}`, '#00c7b6'], 
                
            }
        ]
    }

    //browser ouput
    return (
        <ChartArea gridarea={gridarea} >
            <Bar data={data} options={{maintainAspectRatio: false}}/>
        </ChartArea>
    )
}

export default BarChart

