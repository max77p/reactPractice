import React from 'react';

const uInput=(props)=>{
    const inputstyle={
        border:'2px solid red'
    };
    return(
        <div>
        <input type="text" style={inputstyle} onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default uInput;