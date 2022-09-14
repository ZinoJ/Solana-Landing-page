import React from "react";
import "./ClusterStats.css";
import clusterStatsData from "./ClusterStatsData";

function ClusterStats() {
  //  console.log(clusterStatsData)
  return (
    <div className="clusterStats">
      <div className="clusterStats__container">
        <h3 style={{ paddingLeft: "1rem" }}>Live Cluster Stats</h3>
        <hr />
        {clusterStatsData.map(({id, title, value}) => (
          <div className="clusterStats__options" key={id}>
          <p style={{ paddingLeft: "1rem" }}>{title}</p>
          <p style={{ paddingRight: "1rem", fontFamily: 'Inconsolata'}}>{value}</p>
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default ClusterStats;
