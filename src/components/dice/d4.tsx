import React from "react";

const Four = () => {
  const roll: number = Math.floor(Math.random() * 4) + 1;
  return roll;
}

export default Four;