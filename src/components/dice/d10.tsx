import React from "react";

const Ten = () => {
  const roll: number = Math.floor(Math.random() * 10) + 1;
  return roll;
}

export default Ten;