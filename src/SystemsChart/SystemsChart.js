import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import styles from "./SystemsChart.module.scss";

export default function TotalTrades() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://personal-mongo.herokuapp.com/trades/`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        console.log(result);
      });
  }, []);

  const entryX = [];
  const entryY = [];
  const totalTrades = items.length;
  const totalSystems = [];
  let totalCypher = 0;
  let totalBat = 0;
  let totalGartley = 0;

  Object.values(items).map((item, key) => {
    entryX.push(key);
    entryY.push(item.Entry);
    totalSystems.push(item.System);
    item.System === "CYPHER"
      ? (totalCypher += 1)
      : item.System === "BAT"
      ? (totalBat += 1)
      : (totalGartley += 1);
    return null;
  });

  var ultimateColors = [
    [
      "rgb(56, 75, 126)",
      "rgb(18, 36, 37)",
      "rgb(34, 53, 101)",
      "rgb(36, 55, 57)",
      "rgb(6, 4, 4)",
    ],
  ];

  return (
    <div className={styles.Plot}>
      <Plot
        data={[
          {
            values: totalTrades,
            labels: totalSystems,
            type: "pie",
            marker: {
              colors: ultimateColors[0],
            },
          },
        ]}
        layout={{
          plot_bgcolor: "transparent",
          paper_bgcolor: "transparent",
          width: 350,
          height: 300,
          title: `Cypher(${totalCypher}) Bat(${totalBat}) & Gartley(${totalGartley})`,
        }}
      />
    </div>
  );
}
