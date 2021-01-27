import React from 'react';
import Button from '../Button';
import InputField from '../InputField';
import TextArea from '../TextArea';

export default function FormField(props){
    let {label='label',type='input',placeholder,name,onChange,value}=props || {};
    
    const style= {
        padding:'5px 0',
        width:'100%',
        height:70,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'flex-start',
        flexDirection:'column',
        // border:'1px solid gray'
    }
    if (type==='textarea'){
        return(
            <div className='formField' style={style}>
            <div>{label}</div>
          
          <TextArea
            placeholder={placeholder?placeholder:label}
            name={name}
            onChange={onChange}
            value={value}
          />
      
        </div>
        )
      }
    return(
        <div className='formField' style={style}>
            <div>{label}</div>
            <InputField type={type} placeholder={label} name={name} onChange={onChange} value={value}/>
        </div>
    )
}