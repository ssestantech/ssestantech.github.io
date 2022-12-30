import React from "react";
import 'chart.js/auto'; // ADD THIS
import g1 from '../../images/g1.png';
import g2 from '../../images/g2.png';
import g3 from '../../images/g3.png';
import g4 from '../../images/g4.png';
import './homepage.css';
import StackedChart from "./StackedChart";
import BarChart from "./BarChart";
import AreaStackedChart from "./AreaChart";
import AreaLineChart from "./AreaLineChart";

const HomePage = () => {

  const
    productData = [
      {
        id: 1,
        name: "Warehouse Optimizer",
        desc: "At vero eos et accusmus et iusto odio metro.",
        img: `${g1}`,
        color1: "rgba(253, 178, 74, 1)",
        color2: "rgba(253, 178, 74, 0.4)"
      },
      {
        id: 2,
        name: "New Product Allocation ",
        desc: "At vero eos et accusmus et iusto odio metro.",
        img: `${g2}`,
        color1: "rgba(253, 31, 155, 1)",
        color2: "rgba(253, 31, 155, 0.4)"
      },
      {
        id: 3,
        name: "Replenishment Cycle",
        desc: "At vero eos et accusmus et iusto odio metro.",
        img: `${g3}`,
        color1: "rgba(93, 146, 244, 1)",
        color2: "rgba(93, 146, 244, 0.4)"
      },
      {
        id: 4,
        name: "Impact Analysis",
        desc: "At vero eos et accusmus et iusto odio metro.",
        img: `${g4}`,
        color1: "rgba(95, 227, 161, 1)",
        color2: "rgba(95, 227, 161, 0.4)"
      },
    ];

  return (
    <div>
      <div className="top-content flex">
        {productData.map((item) => (
          <div key={item.id} className="product-item" style={{ background: `linear-gradient(180deg, ${item.color1} 0%, ${item.color2} 100%)` }}>
            <h3>{item.name}</h3>
            <div className="desc">{item.desc}</div>
            <img src={item.img} height="100" width="100" alt="productImage" />
          </div>
        ))}
      </div>
      <div className="main-content flex">
        <BarChart />
        <StackedChart />
        <AreaStackedChart />
      </div>
      <div className="bottom-content">
        <div className="flex">
          <p>Overall Order and Sale</p>
          <div className="flex days">
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
        </div>
        <hr style={{ width: "50%" }} />
        <div className="flex status">
          <div>
            <AreaLineChart />
          </div>
          <div style={{ marginLeft: "auto" }} className="overall-order">
            <div>
              <div>
                <h6>150K</h6>
                <p>Total Sale</p>
              </div>
              <div>
                <h6>115K</h6>
                <p><span className="circle-blue"></span>Total Order</p>
              </div>
              <div>
                <h6>35K</h6>
                <p><span className="circle-pink"></span>Net Profit</p>
              </div>
            </div>
            <div>
              <p>You’re doing good!</p>
              <p>Your reach performance is 12% better compate to last year</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default HomePage;