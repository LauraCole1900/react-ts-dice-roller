import React from "react";

const Six = () => {
  const roll: number = Math.floor(Math.random() * 6) + 1;
  return roll;
}

export default Six;