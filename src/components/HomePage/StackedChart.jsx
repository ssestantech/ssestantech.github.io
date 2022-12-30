import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  YAxis,
} from "recharts";
import 'chart.js/auto'; // ADD THIS
import './homepage.css';


const StackedChart = () => {


  const stackedData = [
    {
      name: "Week 1",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Week 2",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Week 3",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Week 4",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Week 5",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Week 6",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
  ];

  return (
    <div className="stacked-chart">
      <p>Overall Traffic Status</p>
      <BarChart
        width={500}
        height={300}
        data={stackedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="pv" stackId="a" fill="#00D0BD" />
        <Bar dataKey="uv" stackId="a" fill="#5D92F4" />
        <Bar dataKey="uv" stackId="a" fill="#3B5998" />
      </BarChart>
    </div>
  )
};

export default StackedChart;