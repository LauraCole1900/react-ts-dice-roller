import React, { useState } from "react";
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

  const [numDice, setNumDice] = useState<number>(1);
  const [diceType, setDiceType] = useState<number>(0);
  const [roll, setRoll] = useState<number[]>([]);

  const setNum = (e: any) => {
    setRoll([]);
    const dNum = JSON.parse(e.target.value);
    console.log({ dNum });
    console.log(typeof dNum);
    setNumDice(dNum);
  }

  const setType = (e: any) => {
    setRoll([]);
    const dType = JSON.parse(e.target.value);
    console.log({ dType });
    console.log(typeof dType);
    setDiceType(dType);
  }

  const diceRoll = () => {
    let rollArr: number[] = [];
    if (diceType !== 7) {
      for (let i = 0; i < numDice; i++) {
        const dRoll: number = Math.floor(Math.random() * diceType) + 1;
        console.log(dRoll);
        console.log(typeof dRoll);
        rollArr = [...rollArr, dRoll]
      }
      setRoll(rollArr);
    } else if (diceType === 7) {
      const d2Roll: number = Math.floor(Math.random() * 2) + 1;
      const d3Roll: number = Math.floor(Math.random() * 3) + 1;
      const d4Roll: number = Math.floor(Math.random() * 4) + 1;
      const d6Roll: number = Math.floor(Math.random() * 6) + 1;
      const d8Roll: number = Math.floor(Math.random() * 8) + 1;
      const d10Roll: number = Math.floor(Math.random() * 10) + 1;
      const d12Roll: number = Math.floor(Math.random() * 12) + 1;
      const d20Roll: number = Math.floor(Math.random() * 20) + 1;
      rollArr = [d2Roll, d3Roll, d4Roll, d6Roll, d8Roll, d10Roll, d12Roll, d20Roll]
      setRoll(rollArr);
    } else if (diceType === 0) {
      console.log(diceType);
    }
  }

  // useEffect(() => {
  //   diceRoll();
  // }, [diceType, roll])

  return (
    <>
      <Container>
        <div className="title">
          <h1>Welcome to Half-Elf's Handy Dice Roller</h1>
        </div>

        <Row className="center">
          <Col sm={12}>
            <h3>Number of dice: </h3>
            <Button className="button" value={1} onClick={setNum} active={numDice === 1}>1</Button>
            <Button className="button" value={2} onClick={setNum} active={numDice === 2}>2</Button>
            <Button className="button" value={3} onClick={setNum} active={numDice === 3}>3</Button>
            <Button className="button" value={4} onClick={setNum} active={numDice === 4}>4</Button>
            <Button className="button" value={5} onClick={setNum} active={numDice === 5}>5</Button>
            <Button className="button" value={6} onClick={setNum} active={numDice === 6}>6</Button>
            <Button className="button" value={7} onClick={setNum} active={numDice === 7}>7</Button>
            <Button className="button" value={8} onClick={setNum} active={numDice === 8}>8</Button>
            <Button className="button" value={9} onClick={setNum} active={numDice === 9}>9</Button>
            <Button className="button" value={10} onClick={setNum} active={numDice === 10}>10</Button>
          </Col>
        </Row>

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
            <Button className="button" value={7} onClick={setType} active={diceType === 7}>d&d set</Button>
          </Col>
        </Row>

        {diceType !== 0 &&
          <Row className="center">
            <Button className="rollBtn" onClick={diceRoll}>Roll!</Button>
          </Row>
        }

        {roll.length > 0 &&
          <Row className="center">
            <h3>{roll.join(", ")}</h3>
          </Row>
        }

      </Container>
    </>
  );
}

export default App;
