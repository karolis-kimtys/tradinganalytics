import "./App.css";
import LogForm from "./LogForm/LogForm";
import TradesTable from "./TradesTable/TradesTable";
import TotalTrades from "./TotalTrades/TotalTrades";
import SystemsChart from "./SystemsChart/SystemsChart";

function App() {
  return (
    <div className='App'>
      <LogForm />
      <TradesTable />
      <TotalTrades />
      <SystemsChart />
    </div>
  );
}

export default App;
