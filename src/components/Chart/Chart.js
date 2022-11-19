import React from "react";

import ChartBar from './ChartBar'
import './Chart.css'

const Chart=props=>{

    const dataPointValues=props.dataPoints.map( dataPoint =>dataPoint.value)

    let totalMaxValue=0;
    for(const expenseValue of dataPointValues)
    {
        totalMaxValue += expenseValue
    }


    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint=>{
                return <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaxValue}
                />
            })}
        </div>
    )
}

export default Chart;