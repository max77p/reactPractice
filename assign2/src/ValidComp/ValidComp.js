import React from 'react';

const dogs=(props)=>{
    let validmsg='text long enough';
    if(props.textlength<=5){
        validmsg='text too short';
    }
    return(
        <div>
            <p>{validmsg}</p>
        </div>
    )
};

export default dogs;