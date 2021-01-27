import React from "react";

export default function InputField(props) {
  // const types=['input','text','checkbox','select',]

  let {
    type = "text",
    placeholder = "Placeholder",
    required = false,
    inputStyle,
    containerStyle,
    name,
    onChange,
    value
  } = props || {};

  inputStyle = inputStyle || {
    paddingBottom: 2,
    padding: '5px 5px',
    outline:'none',
    border:'1px solid #dddddd',
    borderRadius:5,
    width: "100%",
  };
  containerStyle = containerStyle || {
    //  border: "1px solid black",
    // padding: 10,
    width:'100%'
  };

  function changeBackgroundOnEnter(e) {
    e.target.style.borderColor = "rgb(26, 172, 201)";
  }
  function changeBackgroundOnLeave(e) {
    e.target.style.borderColor = '#dddddd';
  }

 

  return (
    <div style={containerStyle}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        style={inputStyle}
        onMouseEnter={changeBackgroundOnEnter}
        onMouseLeave={changeBackgroundOnLeave}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
