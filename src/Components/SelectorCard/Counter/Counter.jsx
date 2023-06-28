import React from "react";
import { motion } from "framer-motion";

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
                <motion.button className='btn' onClick={addToCounter} whileTap={{scale:1.2}}>+</motion.button>
                <motion.button className='btn' onClick={subToCounter} whileTap={{scale:1.2}}>-</motion.button>
                <h2 className='counter-num'>{props.counterVar > 0 && props.counterVar}</h2>
            </div>
            
            
        </div>
    )
}