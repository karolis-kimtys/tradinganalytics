import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import styles from "./PipChart.module.scss";

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

  let totalT1 = 0;
  let totalT2 = 0;
  let totalT3 = 0;

  let traceT1 = [];
  let traceT2 = [];
  let traceT3 = [];
  let trace = [];
  let totals = [];
  let totalPips = [];
  let totalPip = 0;

  Object.values(items).map((item, key) => {
    let t1 =
      item.Target1Exit -
      item.EntryPrice +
      (item.Target1Exit - item.EntryPrice) +
      (item.Target1Exit - item.EntryPrice) * 10000;

    let t2 =
      item.Target2Exit -
      item.EntryPrice +
      (item.Target2Exit - item.EntryPrice) +
      (item.Target2Exit - item.EntryPrice) * 10000;

    let t3 =
      item.Target3Exit -
      item.EntryPrice +
      (item.Target3Exit - item.EntryPrice) +
      (item.Target3Exit - item.EntryPrice) * 10000;

    item.Entry === "LONG" ? (totalT1 += t1) : (totalT1 -= t1);
    item.Entry === "LONG" ? (totalT2 += t2) : (totalT2 -= t2);
    item.Entry === "LONG" ? (totalT3 += t3) : (totalT3 -= t3);

    let pushPip =
      item.Entry === "LONG"
        ? (totalPip = totalPip + t1 + t2 + t3)
        : (totalPip = totalPip - t1 - t2 - t3);

    trace.push(key);
    totals.push(t1 + t2 + t3);
    totalPips.push(totalPip);

    item.Entry === "LONG" ? traceT1.push(t1) : traceT1.push(-t1);
    item.Entry === "LONG" ? traceT2.push(t2) : traceT2.push(-t2);
    item.Entry === "LONG" ? traceT3.push(t3) : traceT3.push(-t3);

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
            x: trace,
            y: traceT1,
            mode: "markers",
            marker: {
              colors: ultimateColors[0],
            },
            name: "Target 1 Pips",
          },
          {
            x: trace,
            y: traceT2,
            mode: "markers",
            marker: {
              colors: ultimateColors[0],
            },
            name: "Target 2 Pips",
          },

          {
            x: trace,
            y: traceT3,
            mode: "markers",
            marker: {
              colors: ultimateColors[0],
            },
            name: "Target 3 Pips",
          },
          {
            x: trace,
            y: totalPips,
            marker: {
              colors: ultimateColors[0],
            },
            name: "Total Pips",
          },

          {
            x: trace,
            y: totals,
            marker: {
              colors: ultimateColors[0],
            },
            name: "Sum of pips/trade",
          },
        ]}
        layout={{
          plot_bgcolor: "transparent",
          paper_bgcolor: "transparent",
          width: 900,
          height: 500,
          title: ``,
        }}
      />
    </div>
  );
}
