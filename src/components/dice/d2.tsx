import React from "react";

const Two = () => {
  const roll: number = Math.floor(Math.random() * 2) + 1;
  return roll;
}

export default Two;