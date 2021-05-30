import React from "react";

const Twenty = () => {
  const roll: number = Math.floor(Math.random() * 20) + 1;
  return roll;
}

export default Twenty;