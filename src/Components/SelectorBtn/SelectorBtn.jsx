import React from "react";

export const SelectorBtn = (props) => {
    
    const [state, stateSetter, otherStateSetter] = props.states;

    const handleClick = () => {
        if (state) {
            stateSetter(false);
        } else {
            stateSetter(true);
            otherStateSetter(false);
        }
    }

    return (
        <button className='selector-btn btn' onClick={handleClick}>{props.text}</button>
    )
}