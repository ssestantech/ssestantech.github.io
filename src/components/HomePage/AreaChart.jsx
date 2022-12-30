import React from "react";
import {
  XAxis,
  CartesianGrid,
  Area,
  YAxis,
  AreaChart,
} from "recharts";
import './homepage.css';


const AreaStackedChart = () => {

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
    <div className="area-chart">
      <p>Overall Traffic Status</p>
      <AreaChart
        width={500}
        height={400}
        data={stackedData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  )
};

export default AreaStackedChart;