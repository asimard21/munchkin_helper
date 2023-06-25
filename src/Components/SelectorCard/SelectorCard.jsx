import React, {useEffect} from "react";
import { Counter } from "./Counter/Counter";
import { motion} from "framer-motion";

/* svg and assets */
import Sword from '../../assets/svg/attack.svg'
import Shield from '../../assets/svg/shield.svg'

export const SelectorCard = (props) => {
    
    const [swordsCounter, swordsSetter, shieldsCounter, shieldsSetter] = props.counters

    useEffect(() => {
        console.log('I exist');
        return () => {
            console.log('unmount');
        }
    })

    /* a function that return an array of how many icons to display */
    const displayIcon = (counter) => {
        const iconArray = [];
        for (let i = 1; i<=counter; i++) {
            iconArray.push(i)
        }
        return iconArray;
    } 

    const handleReset = () => {
        swordsSetter(0);
        shieldsSetter(0);
        setReset(true)
    }

    const DisplayShield = () => {
        
                
        
    }

    return (
        <>
            <div className='selector-card'>
                <h1>{props.cardName}</h1>
                <div className='counters-container'>
                    <Counter counterName='attack' counterSetter={swordsSetter} counterVar={swordsCounter}/>
                    <div className='icons-container'>
                        {displayIcon(swordsCounter).map((counter) => {
                            return <motion.img initial={{x: 10}} animate={{x: 0}} src={Sword} className='counter-icon' key={counter} />
                        })}
                    </div>
                    <Counter counterName='shield' counterSetter={shieldsSetter} counterVar={shieldsCounter}/>
                    <div className='icons-container'>
                        {displayIcon(shieldsCounter).map((counter) => {
                            return <motion.img initial={{x: 10}} animate={{x: 0}} src={Shield} className='counter-icon' key={counter} />
                        })}
                    </div>
    
                    
                </div>
                <button className='btn reset' onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}