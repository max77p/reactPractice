import React from 'react';
import classes from './Person.css';


const person = (props)=>{//this is function form of components

    return (
        <div className={classes.Person}>
    <p onClick={props.click}>i am {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    
    )
};

export default person;//default of this file