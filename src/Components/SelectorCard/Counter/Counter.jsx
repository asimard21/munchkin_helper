import React from "react";


export const Counter = (props) => {

    const addToCounter = () => {
        if (props.counterVar < 10) {
            props.counterSetter(props.counterVar + 1);
           
        }
    }

    const subToCounter = () => {
        if (props.counterVar > 0) {
            props.counterSetter(props.counterVar - 1)
        }
    }
    return (
        <div className='counter-container'>
            <div className='counter-action'>
                <h2>{props.counterName}</h2>
                <button className='btn' onClick={addToCounter}>+</button>
                <button className='btn' onClick={subToCounter}>-</button>
            </div>
            
            
        </div>
    )
}