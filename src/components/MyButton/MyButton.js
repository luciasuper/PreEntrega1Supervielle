import "./MyButton.css";
import React, { useState } from "react";

function MyButton(props) {
  console.log(props);

  return (
    <button style={{ backgroundColor: props.color }} className="btn">
      {props.children}
    </button>
  );
}

export default MyButton;