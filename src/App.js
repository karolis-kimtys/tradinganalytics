import styles from "./App.module.scss";
import LogForm from "./LogForm/LogForm";
import TradesTable from "./TradesTable/TradesTable";
import TotalTrades from "./TotalTrades/TotalTrades";
import SystemsChart from "./SystemsChart/SystemsChart";
import PipChart from "./PipChart/PipChart";

function App() {
  return (
    <div className={styles.App}>
      <LogForm />
      <TradesTable />
      <TotalTrades />
      <SystemsChart />
      <PipChart />
    </div>
  );
}

export default App;
