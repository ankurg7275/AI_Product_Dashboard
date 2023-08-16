// PredictionChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const PredictionChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Actual Results',
        data: data.actualResults,
        borderColor: 'blue',
      },
      {
        label: 'Predicted Results',
        data: data.predictedResults,
        borderColor: 'green',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default PredictionChart;
