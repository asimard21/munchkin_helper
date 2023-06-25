import './App.css'
import { SelectorBtn } from './Components/SelectorBtn/SelectorBtn.jsx';
import { SelectorCard } from './Components/SelectorCard/SelectorCard';
import { ResultsCard } from './Components/ResultsCard/ResultsCard';
import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect } from 'react';

function App() {
  //width state
  const [inWidth, setInWitdth] = useState(window.innerWidth);
  //counters state
  const [playerSwords, setPlayerSwords] = useState(0)
  const [playerShields, setPlayerShields] = useState(0)
  const [monsterSwords, setMonsterSwords] = useState(0)
  const [monsterShields, setMonsterShields] = useState(0)
  //small screen selector button state
  const [playerDisplay, setPlayerDisplay] = useState(false);
  const [monsterDisplay, setMonsterDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setInWitdth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calcLoss = (swords, shields) => {
    const calc = swords - shields;
    return calc > 0 ? calc : 0;

  }

  const smallScreenDisplayBtn = () => {
    if (inWidth < 700) {
      return (
        <div className='btn-container'>
          <SelectorBtn text='player' states={[playerDisplay, setPlayerDisplay, setMonsterDisplay]}/>
          <SelectorBtn text='monster' states={[monsterDisplay, setMonsterDisplay, setPlayerDisplay]}/>
        </div>
      )
    }
  }

  const smallScreenDisplayCounters = () => {
    if (playerDisplay) {
      return (
          <motion.div key='player-card'initial={{x: -100}} animate={{x: 0}} exit={{x:-100}}className='cards-container'>
            <SelectorCard cardName='player' counters={[playerSwords, setPlayerSwords, playerShields, setPlayerShields]}/>
          </motion.div>   
      ) 
    } else if (monsterDisplay) {
      return (
          <motion.div key='monster-card' className='cards-container' initial={{x: 100}} animate={{x: 0}} >
            <SelectorCard cardName='monster' counters={[monsterSwords, setMonsterSwords, monsterShields, setMonsterShields]} />
          </motion.div>
        
        
      )
    } else {
      return <div className='cards-container'></div>
    }
  }



  const smallScreenDisplayResults = () => {
    return (
      <div className='result'>
        <ResultsCard playerLoss={calcLoss(monsterSwords, playerShields)} monsterLoss={calcLoss(playerSwords, monsterShields)}/>
      </div>
    )
  }
  
  return (
    <>
      <div className='main-display'>
        <h1 className='app-title'>Munckin Dungeon</h1>
        <h3 className='app-subtitle'>Battle helper</h3>
        { inWidth < 700 && smallScreenDisplayBtn() }
        { inWidth < 700 && smallScreenDisplayCounters()}
        { inWidth < 700 && smallScreenDisplayResults()}
       
        { inWidth > 700 &&
          <div className='cards-container'> 
            <SelectorCard cardName='player' counters={[playerSwords, setPlayerSwords, playerShields, setPlayerShields]}/>
            <ResultsCard playerLoss={calcLoss(monsterSwords, playerShields)} monsterLoss={calcLoss(playerSwords, monsterShields)}/>
            <SelectorCard cardName='monster' counters={[monsterSwords, setMonsterSwords, monsterShields, setMonsterShields]} />
          </div>
        }
        
      
      </div>
      
    </>
  )
}

export default App
