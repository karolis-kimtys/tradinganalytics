import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import styles from "./TotalTrades.module.scss";

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
  let totalLong = 0;
  let totalShort = 0;

  Object.values(items).map((item, key) => {
    entryX.push(key);
    entryY.push(item.Entry);
    item.Entry === "LONG" ? (totalLong += 1) : (totalShort += 1);
    return null
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
            labels: entryY,
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
          title: `Total of ${totalTrades} trades, ${totalLong} long & ${totalShort} trades`,
        }}
    
      />
    </div>
  );
}
