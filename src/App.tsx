import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import './App.css';

function App() {
  // User selects number of dice
  // User selects type of dice
  // Multiple dice trays available?
  // "Roll" method that rolls all dice
  // Need to lift state from dice to here?
  // Math.random here? or in dice components?
  // Will need to throw results into an array in state for display

  let diceType: number;
  let roll: number = 0;

  const setType = (e: any) => {
    diceType = e.target.value;
  }

  const diceRoll = () => {
    if (diceType !== 1) {
      roll = Math.floor(Math.random() * diceType) + 1;
      console.log(roll);
      return roll
    } else {

    }
  }

  return (
    <>
      <Container>
        <div className="title">
          <h1>Welcome to Half-Elf's Handy Dice Roller</h1>
        </div>

        <Row className="center">
          <Col sm={12}>
            <h3>Die type:</h3>
            <Button className="button" value={2} onClick={setType}>d2</Button>
            <Button className="button" value={3} onClick={setType}>d3</Button>
            <Button className="button" value={4} onClick={setType}>d4</Button>
            <Button className="button" value={6} onClick={setType}>d6</Button>
            <Button className="button" value={8} onClick={setType}>d8</Button>
            <Button className="button" value={10} onClick={setType}>d10</Button>
            <Button className="button" value={12} onClick={setType}>d12</Button>
            <Button className="button" value={20} onClick={setType}>d20</Button>
            <Button className="button" value={1} onClick={setType}>d&d set</Button>
          </Col>
        </Row>

        <Row className="center">
          <Button className="rollBtn" onClick={diceRoll}>Roll!</Button>
        </Row>

        {roll !== 0 &&
          <Row>
            <h3>{roll}</h3>
          </Row>}

      </Container>
    </>
  );
}

export default App;
