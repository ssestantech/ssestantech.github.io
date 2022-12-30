import React from "react";
import { Line } from "react-chartjs-2";
import './homepage.css';

const AreaLineChart = () => {

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "First dataset",
      data: [20, 33, 28, 43, 47, 50, 55, 59, 60, 65, 68, 70, ],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [15, 30, 25, 20, 25, 29, 26, 36, 39, 40, 60, 50],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

  return (
    <div className="area-line">
      <Line data={data} />
    </div>
  );
}


export default AreaLineChart;