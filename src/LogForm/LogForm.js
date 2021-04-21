import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const LogSection = styled.form`
  min-width: 300px;
  max-width: 300px;
  height: 100vh;
  background-color: rgb(51, 51, 51);
`;

const Wrapper = styled.section`
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  padding: 1rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #9c9c9c;
`;

const LabelField = styled.label`
  padding: 5px;
  font-size: 1.5rem;
  color: #c3c3c3;
`;

const SelectField = styled.select`
  margin-right: 25px;
  width: 100px;
  height: 2rem;
  font-size: 1.25rem;
  background-color: #c3c3c3;
  font-family: "Fira Code", monospace;
  border: none;
  appearance: none;
  option {
    font-family: "Fira Code", monospace;
  }
`;

const InputField = styled.input`
  margin-right: 25px;
  width: 100px;
  height: 2rem;
  font-size: 1.25rem;
  background-color: #c3c3c3;
  font-family: "Fira Code", monospace;
  border: none;
  appearance: none;
`;

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
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      instrument: "",
      interval: "",
    };
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

  onSubmit(e) {
    e.preventDefault();
    const trade = {
      instrument: this.state.instrument,
      interval: this.state.interval,
      system: this.state.system,
    };
    console.log("Trade submitted - " + trade);
    axios
      .post("https://personal-mongo.herokuapp.com/trades/add", trade)
      // .post("http://localhost:5000/trades/add", trade)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error caught in promise - " + err));
  }

  render() {
    return (
      <LogSection onSubmit={this.onSubmit}>
        <Title>Log Trade Data</Title>

        <Wrapper>
          <LabelField>Instrument: </LabelField>
          <SelectField
            required
            value={this.state.instrument}
            onChange={this.onChangeInstrument}
          >
            <option></option>
            <option value='EURCHF'>EURCHF</option>
            <option value='EURUSD'>EURUSD</option>
            <option value='USDGBP'>USDGBP</option>
          </SelectField>
        </Wrapper>

        <Wrapper>
          <LabelField>Interval: </LabelField>
          <SelectField
            required
            value={this.state.interval}
            onChange={this.onChangeInterval}
          >
            <option></option>
            <option value='15'>15min</option>
            <option value='60'>60min</option>
            <option value='240'>4h</option>
          </SelectField>
        </Wrapper>

        <Wrapper>
          <LabelField>System: </LabelField>
          <SelectField
            required
            value={this.state.system}
            onChange={this.onChangeSystem}
          >
            <option value='blank'>-----</option>
            <option value='Cypher'>Cypher</option>
            <option value='Bat'>Bat</option>
            <option value='Gartley'>Gartley</option>
          </SelectField>
        </Wrapper>

        <Wrapper>
          <LabelField>Entry: </LabelField>
          <SelectField value={this.state.entry} onChange={this.onChangeEntry}>
            <option value='-----'>-----</option>
            <option style={{ backgroundColor: "green" }} value='Long'>
              Long
            </option>
            <option style={{ backgroundColor: "red" }} value='Short'>
              Short
            </option>
          </SelectField>
        </Wrapper>

        <br />

        <Wrapper>
          <LabelField>Entry Date:</LabelField>
          <InputField
            type='date'
            id='start'
            name='trip-start'
            value={this.state.entryDate}
            onChange={this.onChangeEntryDate}
          />
        </Wrapper>

        <Wrapper>
          <LabelField v>Entry Time:</LabelField>
          <InputField
            type='time'
            id='start'
            name='trip-start'
            value={this.state.entryTime}
            onChange={this.onChangeEntryTime}
          />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry Price: </LabelField>
          <InputField
            type='number'
            value={this.state.entryPrice}
            onChange={this.onChangeEntryPrice}
          />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry T1 Price: </LabelField>
          <InputField
            type='number'
            value={this.state.entryTarget1}
            onChange={this.onChangeTarget1}
          />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry T2 Price: </LabelField>
          <InputField
            type='number'
            value={this.state.entryTarget2}
            onChange={this.onChangeTarget2}
          />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry T3 Price: </LabelField>
          <InputField
            type='number'
            value={this.state.entryTarget3}
            onChange={this.onChangeTarget3}
          />
        </Wrapper>

        <Wrapper>
          <LabelField>S/L Price: </LabelField>
          <InputField
            type='number'
            value={this.state.stopLoss}
            onChange={this.onChangeStopLoss}
          />
        </Wrapper>

        <br />

        <Wrapper>
          <LabelField>Exit Date: </LabelField>
          <InputField type='date' id='start' name='trip-start' />
        </Wrapper>

        <Wrapper>
          <LabelField>Exit Time: </LabelField>
          <InputField type='time' id='start' name='trip-start' />
        </Wrapper>

        <Wrapper>
          <LabelField>Exit T1 Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>Exit T2 Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>Exit T3 Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <br />

        <Wrapper>
          <LabelField>MAE: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>X Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>A Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <br />

        <Wrapper>
          <LabelField>---------------</LabelField>
          <InputField type='submit' value='Submit' />
        </Wrapper>
      </LogSection>
    );
  }
}
