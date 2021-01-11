//name,style,onclick

import React from "react";

export default function Button(props) {
  const { name = "Button", style, onClick } = props || {};
  const buttonStyle = style || {
    padding: 10,
    borderColor: "rgb(12, 230, 164,0.65)",
    borderWidth: 0,
    borderRadius: 5,
    outline: "none",
    color: "#ffffff",
    backgroundColor: "rgb(26, 172, 201)",
    cursor: "pointer",
    width:300
  };

  function onPress() {
    onClick ? onClick() : alert("No functionality given!");
  }

  function changeBackgroundOnEnter(e) {
    e.target.style.background = "rgb(26, 190, 201)";
  }
  function changeBackgroundOnLeave(e) {
    e.target.style.background = buttonStyle.backgroundColor;
  }

  return (

    <button
      onClick={onPress}
      style={buttonStyle}
      onMouseEnter={changeBackgroundOnEnter}
      onMouseLeave={changeBackgroundOnLeave}
    >
      {name}
    </button>
  );
}
