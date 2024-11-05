import React from 'react';
import './card.css';

export default function Card({ card, handleChoice, flipped, dissabled }) {

    const handleClick = () => {
        if(!dissabled){
            handleChoice(card)
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front"/>
                <img 
                    className="back" 
                    src="/img/cover.png" 
                    onClick={handleClick}
                    alt="card back"
                />
            </div>
        </div>
    )
}
