import React, { useState } from "react";
import styles from "./TradesTable.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function TradesTable() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tableOpen, setTableOpen] = useState(false);

  // useEffect(() => {
  //   fetch(`https://personal-mongo.herokuapp.com/trades/`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setItems(result);
  //       setIsLoaded(true);
  //     });
  // }, []);

  const openTable = () => {
    fetch(`https://personal-mongo.herokuapp.com/trades/`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setTableOpen(!tableOpen);
        setIsLoaded(true);
      });
  };

  const refreshData = () => {
    setIsLoaded(false);
    setItems([]);
    fetch(`https://personal-mongo.herokuapp.com/trades/`)
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setItems(result);
          setIsLoaded(true);
        }, 1000);
      });
  };

  return (
    <div className={styles.Wrapper}>
      <div className={tableOpen ? styles.Open : styles.Closed}>
        <AnimatePresence>
          {tableOpen ? (
            <motion.div
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              exit={{ y: 500 }}
            >
              <motion.button
                className={styles.TableButton}
                onClick={openTable}
                style={{ color: tableOpen && "crimson" }}
              >
                {tableOpen ? "Close" : "Open"}
              </motion.button>

              <motion.button
                className={styles.RefreshButton}
                onClick={refreshData}
                style={{ color: isLoaded && "crimson" }}
              >
                {isLoaded ? "Refresh" : "Loading.."}
              </motion.button>

              <table onClick={openTable}>
                <tr className={styles.Header}>
                  <th>Instrument</th>
                  <th>Interval</th>
                  <th>System</th>
                  <th>Entry</th>
                  <th>Entry Date</th>
                  <th>Entry Time</th>
                  <th>Entry Price</th>
                  <th>Entry T1</th>
                  <th>Entry T2</th>
                  <th>Entry T3</th>
                  <th>Stop Loss</th>
                  <th>Exit Date</th>
                  <th>Exit Time</th>
                  <th>Exit T1</th>
                  <th>Exit T2</th>
                  <th>Exit T3</th>
                  <th>MAE</th>
                  <th>Point X</th>
                  <th>Point A</th>
                  <th>T1 Closed Pips</th>
                  <th>T2 Closed Pips</th>
                  <th>T3 Closed Pips</th>
                  <th>Total Closed Pips</th>
                </tr>

                {Object.values(items).map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.Symbol}</td>
                      <td>{item.Interval}</td>
                      <td>{item.System}</td>
                      <td
                        style={{
                          backgroundColor:
                            item.Entry === "LONG" ? "#3D9970" : "#FF4136",
                        }}
                      >
                        {item.Entry}
                      </td>
                      <td>{item.EntryDate}</td>
                      <td>{item.EntryTime}</td>

                      {/* prettier-ignore */}
                      <td>{(item.EntryPrice * 1).toFixed(5)}</td>
                      <td>{(item.Target1 * 1).toFixed(5)}</td>
                      <td>{(item.Target2 * 1).toFixed(5)}</td>
                      <td>{(item.Target3 * 1).toFixed(5)}</td>
                      <td>{(item.StopLoss * 1).toFixed(5)}</td>
                      <td>{item.ExitDate}</td>
                      <td>{item.ExitTime}</td>
                      <td>{(item.Target1Exit * 1).toFixed(5)}</td>
                      <td>{(item.Target2Exit * 1).toFixed(5)}</td>
                      <td>{(item.Target3Exit * 1).toFixed(5)}</td>
                      <td>{(item.MAE * 1).toFixed(5)}</td>
                      <td>{(item.XPrice * 1).toFixed(5)}</td>
                      <td>{(item.APrice * 1).toFixed(5)}</td>
                      <td>
                        {item.Entry === "LONG"
                          ? (
                              (item.Target1Exit - item.EntryPrice) *
                              10000
                            ).toFixed(1)
                          : (
                              (item.EntryPrice - item.Target1Exit) *
                              10000
                            ).toFixed(1)}
                      </td>
                      <td>
                        {item.Entry === "LONG"
                          ? (
                              (item.Target2Exit - item.EntryPrice) *
                              10000
                            ).toFixed(1)
                          : (
                              (item.EntryPrice - item.Target2Exit) *
                              10000
                            ).toFixed(1)}
                      </td>
                      <td>
                        {item.Entry === "LONG"
                          ? (
                              (item.Target3Exit - item.EntryPrice) *
                              10000
                            ).toFixed(1)
                          : (
                              (item.EntryPrice - item.Target3Exit) *
                              10000
                            ).toFixed(1)}
                      </td>
                      {/* prettier-ignore */}
                      <td>
                        {item.Entry === "LONG" ? (
                          ((item.Target1Exit -
                            item.EntryPrice) +
                            (item.Target2Exit - item.EntryPrice) +
                            (item.Target3Exit - item.EntryPrice)) *
                          10000
                        ).toFixed(1) : (
                          ((item.EntryPrice -
                            item.Target1Exit) +
                            (item.EntryPrice - item.Target2Exit) +
                            (item.EntryPrice - item.Target3Exit)) *
                          10000
                        ).toFixed(1)}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </motion.div>
          ) : (
            <motion.button onClick={openTable} className={styles.TableButton}>
              {isLoaded ? "Open table" : "Load data"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
