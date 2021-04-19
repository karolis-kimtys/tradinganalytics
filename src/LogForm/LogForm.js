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
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      instrument: "",
      interval: 0,
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

  onSubmit(e) {
    e.preventDefault();
    const trade = {
      instrument: this.state.instrument,
      interval: this.state.interval,
    };

    console.log("HELLOOO");
    console.log(trade);

    axios
      .post("https://personal-mongo.herokuapp.com/trades/add", trade)
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <LogSection onSubmit={this.onSubmit}>
        <Title>Log Trade Data</Title>

        <Wrapper>
          <LabelField>Instrument: </LabelField>
          <SelectField
            useref='userInput'
            required
            value={this.state.instrument}
            onChange={this.onChangeInstrument}
          >
            <option value='----'>-----</option>
            <option value='EURCHF'>EUR/CHF</option>
            <option value='EURUSD'>EUR/USD</option>
            <option value='USDGBP'>USD/GBP</option>
          </SelectField>
        </Wrapper>

        <Wrapper>
          <LabelField>Interval: </LabelField>
          <SelectField
            useref='userInput'
            required
            value={this.state.interval}
            onChange={this.onChangeInterval}
          >
            <option value='-----'>-----</option>
            <option value='15'>15min</option>
            <option value='60'>60min</option>
            <option value='240'>4h</option>
          </SelectField>
        </Wrapper>

        <Wrapper>
          <LabelField>System: </LabelField>
          <SelectField>
            <option value='blank'>-----</option>
            <option value='Cypher'>Cypher</option>
            <option value='Bat'>Bat</option>
            <option value='Gartley'>Gartley</option>
          </SelectField>
        </Wrapper>

        <Wrapper>
          <LabelField>Entry: </LabelField>
          <SelectField>
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
          <LabelField>Entry Date: </LabelField>
          <InputField type='date' id='start' name='trip-start' />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry Time: </LabelField>
          <InputField type='time' id='start' name='trip-start' />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry T1 Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry T2 Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>Entry T3 Price: </LabelField>
          <InputField type='number' />
        </Wrapper>

        <Wrapper>
          <LabelField>S/L Price: </LabelField>
          <InputField type='number' />
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
