import React from "react";
import "./TransactionStats.css";
import transactionStatsData from "./TransactionStatsData";
import IMG1 from "../image1.png";
import IMG2 from "../image2.png";

function TransactionStats() {
  return (
    <div className="transactionStats">
      <div className="transactionStats__container">
        <h3 style={{ paddingLeft: "1rem" }}>Live Transaction Stats</h3>
        <hr />
        {transactionStatsData.map(({ id, title, value }) => (
          <div className="transactionStats__options" key={id}>
            <p style={{ paddingLeft: "1rem" }}>{title}</p>
            <p style={{ paddingRight: "1rem", fontFamily: "Inconsolata" }}>
              {value}
            </p>
          </div>
        ))}

        <div className="heading">
          <h3>TPS history</h3>
          <div className="minute">
            <span>30m</span>
            <span>2h</span>
            <span>6h</span>
          </div>
        </div>
        <img src={IMG1} alt="image1" />
        <div className="heading">
          <h3>TPS history</h3>
          <div className="minute">
            <span>30m</span>
            <span>2h</span>
            <span>6h</span>
          </div>
        </div>
        <img src={IMG2} alt="image2" />
      </div>
    </div>
  );
}

export default TransactionStats;
