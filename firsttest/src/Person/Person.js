import React from 'react';
import './Person.css';


const person = (props)=>{//this is function form of components

    return (
        <div className="Person">
    <p onClick={props.click}>i am {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    
    )
};

export default person;//default of this file