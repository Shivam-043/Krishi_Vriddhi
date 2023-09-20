import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const options = {
  scales: {
    x: {
      type: 'category', // Use 'category' scale for the x-axis
    },
    y: {
      beginAtZero: true,
    },
  },
};

const ChartComponent = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
