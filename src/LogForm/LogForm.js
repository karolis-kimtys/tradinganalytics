import React, { Component } from "react";
import axios from "axios";
import styles from "./LogForm.module.scss";

export default class LogForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeInstrument = this.onChangeInstrument.bind(this);
    this.onChangeInterval = this.onChangeInterval.bind(this);
    this.onChangeSystem = this.onChangeSystem.bind(this);
    this.onChangeEntry = this.onChangeEntry.bind(this);
    this.onChangeEntryDate = this.onChangeEntryDate.bind(this);
    this.onChangeEntryTime = this.onChangeEntryTime.bind(this);
    this.onChangeEntryPrice = this.onChangeEntryPrice.bind(this);
    this.onChangeTarget1 = this.onChangeTarget1.bind(this);
    this.onChangeTarget2 = this.onChangeTarget2.bind(this);
    this.onChangeTarget3 = this.onChangeTarget3.bind(this);
    this.onChangeStopLoss = this.onChangeStopLoss.bind(this);
    this.onChangeExitDate = this.onChangeExitDate.bind(this);
    this.onChangeExitTime = this.onChangeExitTime.bind(this);
    this.onChangeExitTarget1 = this.onChangeExitTarget1.bind(this);
    this.onChangeExitTarget2 = this.onChangeExitTarget2.bind(this);
    this.onChangeExitTarget3 = this.onChangeExitTarget3.bind(this);
    this.onChangeMAE = this.onChangeMAE.bind(this);
    this.onChangePointX = this.onChangePointX.bind(this);
    this.onChangePointA = this.onChangePointA.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitted = this.onSubmitted.bind(this);

    this.state = {
      instrument: "",
      interval: "",
      system: "",
      entry: "",
      entryDate: "",
      entryTime: "",
      entryPrice: "",
      entryTarget1: "",
      entryTarget2: "",
      entryTarget3: "",
      stopLoss: "",

      exitDate: "",
      exitTime: "",
      exitTarget1: "",
      exitTarget2: "",
      exitTarget3: "",
      MAE: "",
      pointX: "",
      pointA: "",

      submitted: "Waiting",
    };
  }

  onSubmitted() {
    this.setState({
      submitted: "Trade submitted.",
    });
  }

  onChangeInstrument(e) {
    this.setState({
      instrument: e.target.value,
    });
  }

  onChangeInterval(e) {
    this.setState({
      interval: e.target.value,
    });
  }

  onChangeSystem(e) {
    this.setState({
      system: e.target.value,
    });
  }

  onChangeEntry(e) {
    this.setState({
      entry: e.target.value,
    });
  }

  onChangeEntryDate(e) {
    this.setState({
      entryDate: e.target.value,
    });
  }

  onChangeEntryTime(e) {
    this.setState({
      entryTime: e.target.value,
    });
  }

  onChangeEntryPrice(e) {
    this.setState({
      entryPrice: e.target.value,
    });
  }

  onChangeTarget1(e) {
    this.setState({
      entryTarget1: e.target.value,
    });
  }

  onChangeTarget2(e) {
    this.setState({
      entryTarget2: e.target.value,
    });
  }

  onChangeTarget3(e) {
    this.setState({
      entryTarget3: e.target.value,
    });
  }

  onChangeStopLoss(e) {
    this.setState({
      stopLoss: e.target.value,
    });
  }

  onChangeExitDate(e) {
    this.setState({
      exitDate: e.target.value,
    });
  }

  onChangeExitTime(e) {
    this.setState({
      exitTime: e.target.value,
    });
  }

  onChangeExitTarget1(e) {
    this.setState({
      exitTarget1: e.target.value,
    });
  }

  onChangeExitTarget2(e) {
    this.setState({
      exitTarget2: e.target.value,
    });
  }

  onChangeExitTarget3(e) {
    this.setState({
      exitTarget3: e.target.value,
    });
  }

  onChangeMAE(e) {
    this.setState({
      MAE: e.target.value,
    });
  }

  onChangePointX(e) {
    this.setState({
      pointX: e.target.value,
    });
  }

  onChangePointA(e) {
    this.setState({
      pointA: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const trade = {
      instrument: this.state.instrument,
      interval: this.state.interval,
      system: this.state.system,
      entry: this.state.entry,

      entryDate: this.state.entryDate,
      entryTime: this.state.entryTime,
      entryPrice: this.state.entryPrice,
      entryTarget1: this.state.entryTarget1,
      entryTarget2: this.state.entryTarget2,
      entryTarget3: this.state.entryTarget3,
      stopLoss: this.state.stopLoss,

      exitDate: this.state.exitDate,
      exitTime: this.state.exitTime,
      exitTarget1: this.state.exitTarget1,
      exitTarget2: this.state.exitTarget2,
      exitTarget3: this.state.exitTarget3,

      MAE: this.state.MAE,
      pointX: this.state.pointX,
      pointA: this.state.pointA,
    };

    console.log("Trade is being submitted - ", trade);
    axios
      // .post("https://personal-mongo.herokuapp.com/trades/add", trade)
      .post("http://localhost:5000/trades/add", trade)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error caught in promise - " + err));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Log Trade Data</h1>

        <section>
          <label>Instrument: </label>

          <select
            required
            value={this.state.instrument}
            onChange={this.onChangeInstrument}
          >
            <option></option>
            <option value='EURCHF'>EURCHF</option>
            <option value='EURUSD'>EURUSD</option>
            <option value='USDGBP'>USDGBP</option>
          </select>
        </section>

        <section>
          <label>Interval: </label>
          <select
            required
            value={this.state.interval}
            onChange={this.onChangeInterval}
          >
            <option></option>
            <option value='15'>15min</option>
            <option value='60'>60min</option>
            <option value='240'>4h</option>
          </select>
        </section>

        <section>
          <label>System: </label>
          <select
            required
            value={this.state.system}
            onChange={this.onChangeSystem}
          >
            <option></option>
            <option value='Cypher'>Cypher</option>
            <option value='Bat'>Bat</option>
            <option value='Gartley'>Gartley</option>
          </select>
        </section>

        <section>
          <label>Entry: </label>
          <select
            required
            value={this.state.entry}
            onChange={this.onChangeEntry}
            style={{
              backgroundColor:
                this.state.entry === ""
                  ? "#c3c3c3"
                  : this.state.entry === "Long"
                  ? "mediumseagreen"
                  : "crimson",
            }}
          >
            <option></option>
            <option value='Long' className={styles.Long}>
              Long
            </option>
            <option value='Short' className={styles.short}>
              Short
            </option>
          </select>
        </section>

        <br />

        <section>
          <label>Entry Date:</label>
          <div className={styles.DatePicker}>
            <input
              type='date'
              required
              onChange={this.onChangeEntryDate}
              value={this.state.entryDate}
            />
          </div>
        </section>

        <section>
          <label v>Entry Time:</label>
          <div className={styles.TimePicker}>
            <input
              type='time'
              required
              value={this.state.entryTime}
              onChange={this.onChangeEntryTime}
            />
          </div>
        </section>

        <section>
          <label>Entry Price: </label>
          <input
            type='number'
            required
            value={this.state.entryPrice}
            onChange={this.onChangeEntryPrice}
          />
        </section>

        <section>
          <label>Entry T1 Price: </label>
          <input
            type='number'
            required
            value={this.state.entryTarget1}
            onChange={this.onChangeTarget1}
          />
        </section>

        <section>
          <label>Entry T2 Price: </label>
          <input
            type='number'
            required
            value={this.state.entryTarget2}
            onChange={this.onChangeTarget2}
          />
        </section>

        <section>
          <label>Entry T3 Price: </label>
          <input
            type='number'
            required
            value={this.state.entryTarget3}
            onChange={this.onChangeTarget3}
          />
        </section>

        <section>
          <label>S/L Price: </label>
          <input
            type='number'
            required
            value={this.state.stopLoss}
            onChange={this.onChangeStopLoss}
          />
        </section>

        <br />

        <section>
          <label>Exit Date: </label>
          <div className={styles.DatePicker}>
            <input
              type='date'
              required
              value={this.state.exitDate}
              onChange={this.onChangeExitDate}
            />
          </div>
        </section>

        <section>
          <label>Exit Time: </label>
          <div className={styles.TimePicker}>
            <input
              type='time'
              required
              value={this.state.exitTime}
              onChange={this.onChangeExitTime}
            />
          </div>
        </section>

        <section>
          <label>Exit T1 Price: </label>
          <input
            type='number'
            required
            value={this.state.exitTarget1}
            onChange={this.onChangeExitTarget1}
          />
        </section>

        <section>
          <label>Exit T2 Price: </label>
          <input
            type='number'
            required
            value={this.state.exitTarget2}
            onChange={this.onChangeExitTarget2}
          />
        </section>

        <section>
          <label>Exit T3 Price: </label>
          <input
            type='number'
            required
            value={this.state.exitTarget3}
            onChange={this.onChangeExitTarget3}
          />
        </section>

        <br />

        <section>
          <label>MAE: </label>
          <input
            type='number'
            required
            value={this.state.MAE}
            onChange={this.onChangeMAE}
          />
        </section>

        <section>
          <label>X Price: </label>
          <input
            type='number'
            required
            value={this.state.pointX}
            onChange={this.onChangePointX}
          />
        </section>

        <section>
          <label>A Price: </label>
          <input
            type='number'
            required
            value={this.state.pointA}
            onChange={this.onChangePointA}
          />
        </section>

        <br />

        <section>
          <label></label>
          <input
            className={styles.Button}
            type='submit'
            value='Submit'
            onChange={this.onSubmit}
          />
        </section>
      </form>
    );
  }
}
