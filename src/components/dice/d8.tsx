import React from "react";

const Eight = () => {
  const roll: number = Math.floor(Math.random() * 8) + 1;
  return roll;
}

export default Eight;