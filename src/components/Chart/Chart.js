import React from "react";
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={totalMaxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
