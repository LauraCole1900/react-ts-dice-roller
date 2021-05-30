import React from "react";

const Three = () => {
  const roll: number = Math.floor(Math.random() * 3) + 1;
  return roll;
}

export default Three;