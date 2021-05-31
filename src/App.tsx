import React, { useEffect, useState } from "react";
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

  let diceType: number = 0;
  let roll: number = 0;
  // const [dice, setDice] = useState<number | undefined>()

  const setType = (e: any) => {
    diceType = JSON.parse(e.target.value);
    console.log({ diceType });
    console.log(typeof diceType);
  }

  const diceRoll = () => {
    if (diceType !== 1) {
      roll = Math.floor(Math.random() * diceType) + 1;
      console.log(roll);
      console.log(typeof roll);
      return roll
    } else if (diceType === 1) {

    } else if (diceType === 0) {
      console.log(diceType);
    }
  }

  useEffect(() => {
    diceRoll();
  }, [diceType, roll])

  return (
    <>
      <Container>
        <div className="title">
          <h1>Welcome to Half-Elf's Handy Dice Roller</h1>
        </div>

        <Row className="center">
          <Col sm={12}>
            <h3>Die type:</h3>
            <Button className="button" value={2} onClick={setType} active={diceType === 2}>d2</Button>
            <Button className="button" value={3} onClick={setType} active={diceType === 3}>d3</Button>
            <Button className="button" value={4} onClick={setType} active={diceType === 4}>d4</Button>
            <Button className="button" value={6} onClick={setType} active={diceType === 6}>d6</Button>
            <Button className="button" value={8} onClick={setType} active={diceType === 8}>d8</Button>
            <Button className="button" value={10} onClick={setType} active={diceType === 10}>d10</Button>
            <Button className="button" value={12} onClick={setType} active={diceType === 12}>d12</Button>
            <Button className="button" value={20} onClick={setType} active={diceType === 20}>d20</Button>
            <Button className="button" value={1} onClick={setType} active={diceType === 1}>d&d set</Button>
          </Col>
        </Row>

        {/* {diceType !== 0 && */}
          <Row className="center">
            <Button className="rollBtn" onClick={diceRoll}>Roll!</Button>
          </Row>
        {/* } */}

        {/* {roll !== 0 && */}
          <Row className="center">
            <h3>{roll}</h3>
          </Row>
          {/* } */}

      </Container>
    </>
  );
}

export default App;
