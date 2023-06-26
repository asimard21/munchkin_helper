import React from "react";
import { motion } from "framer-motion";

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
        <motion.button className='selector-btn btn' onClick={handleClick} whileTap={{scale:1.2}}>{props.text}</motion.button>
    )
}