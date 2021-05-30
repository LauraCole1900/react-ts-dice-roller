import React from "react";

const Twelve = () => {
  const roll: number = Math.floor(Math.random() * 12) + 1;
  return roll;
}

export default Twelve;