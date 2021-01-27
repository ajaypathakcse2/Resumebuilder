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
    onChange,
    name,
    value
  } = props || {};

  inputStyle = inputStyle || {
    paddingBottom: 2,
    padding: 5,
    outline:'none',
    borderColor:'#dddddd',
    borderWidth:1,
    borderRadius:5,
    width: "100%",
  };
  containerStyle = containerStyle || {
    //  border: "1px solid black",
    // padding: 10,
    width: '100%',
  };

  function changeBackgroundOnEnter(e) {
    e.target.style.borderColor = "rgb(26, 172, 201)";
  }
  function changeBackgroundOnLeave(e) {
    e.target.style.borderColor = '#dddddd';
  }

  return (
    <div style={containerStyle}>
      <textarea
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        name={name}
        onMouseEnter={changeBackgroundOnEnter}
        onMouseLeave={changeBackgroundOnLeave}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
