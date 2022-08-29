import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltip: {
      backgroundColor: '#333',
      titleColor: 'rgba(255, 255, 255, .8)',
      bodyColor: 'rgba(255, 255, 255, .8)',
      usePointStyle: true,
      boxPadding: 4,
      cornerRadius: 4,
      padding: {
        left: 12,
        top: 8,
        right: 12,
        bottom: 8
      }
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  layout: {
    autoPadding: false
  }
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

const LineChart = ({ data }: { data: any }) => (
  <Line options={options} data={data} />
);

export default LineChart;
