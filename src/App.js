import React from 'react'
import Button from './components/Button'
import InputField from './components/InputField'
import TextArea from './components/TextArea'
function App() {
  const buttonClicked = () => {
    alert('params passed!');
  }

  const buttonStyle = {
    backgroundColor: 'red'
  }

  const inputObject = [
    {type: 'input', label: 'First Name', placeholder: 'Type your first name'},
    {type: 'input', label: 'Last Name', placeholder: 'Type your last name'},
    {type: 'input', label: 'Age', placeholder: 'Type your age'},
    {type: 'date', placeholder: 'date'},
  ]
  return (
    <div className="App">
      {/* <InputField/> */}

      {inputObject.map((item, key) => (
        <InputField key= {key} type={item.type} label={item.label} placeholder={item.placeholder}/>
      ))}
      <TextArea/>
      <Button onClick={buttonClicked}/>
    </div>
  );
}

export default App;
