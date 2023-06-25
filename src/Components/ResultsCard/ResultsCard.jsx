import React from "react";

export const ResultsCard = (props) => {
    return (
        <div className='selector-card'>
            <h1>results</h1>
            <div className='counters-container'>
                <h2>Player lose {props.playerLoss} hp</h2>
                <h2>Monster lose {props.monsterLoss} hp</h2>
            </div>
        </div>
    )
}