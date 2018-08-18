import React from 'react';
import './UserOutput.css';

const uOutput =(props)=>{
    return(
        <div className="UserOutput">
        <p>Hello {props.name}</p>
        <p>what would you like to do</p>
        </div>
    )
};

export default uOutput;