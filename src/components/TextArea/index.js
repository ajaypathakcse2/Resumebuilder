import React from "react";

export default function TextArea(props) {
  // const types=['input','text','checkbox','select',]

  let {
    type = "input",
    label = "Label",
    placeholder = "Placeholder",
    required = false,
    inputStyle,
    containerStyle,
  } = props || {};

  inputStyle = inputStyle || {
    paddingBottom: 2,
    padding: 8,
    outline:'none',
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
    width: "100%",
    fontSize:14,
  };
  containerStyle = containerStyle || {
    //  border: "1px solid black",
    // padding: 10,
    width: 300,
  };

  function changeBackgroundOnEnter(e) {
    e.target.style.borderColor = "rgb(26, 172, 201)";
  }
  function changeBackgroundOnLeave(e) {
    e.target.style.borderColor = 'gray';
  }

  return (
    <div style={containerStyle}>
      <textarea
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        onMouseEnter={changeBackgroundOnEnter}
        onMouseLeave={changeBackgroundOnLeave}
      />
    </div>
  );
}
