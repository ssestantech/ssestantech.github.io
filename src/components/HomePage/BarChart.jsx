import React from "react";
import { Bar } from "react-chartjs-2";
import './homepage.css';

const BarChart = () => {

  const dataBar = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6',],
    datasets: [
      {
        label: "Traffic Status",
        backgroundColor: '#5D92F4',
        borderColor: 'rgba(93, 146, 244, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(93, 146, 244, 1)',
        data: [50, 100, 200, 300, 400, 400]
      },
    ]
  };

  return (
      <div className="main-content flex">
        <div className="bar-chart">
          <p>Overall Traffic Status</p>
          <Bar
            data={dataBar}
            width={100}
            height={50}
          />
        </div>
      </div>

  )
};

export default BarChart;