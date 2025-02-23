// components/GameCard.tsx
import React from 'react';
import styles from '../styles/GameCard.module.css';


interface GameCardProps {
    name: string;
    description: string;
    gameImage:string;
}

const GameCard: React.FC<GameCardProps> = ({ name, description,gameImage }) =>{
    const imagePath = gameImage? "/images/"+gameImage: "/images/polar_racing.png";
    description;
    return (
        <div className={styles.gameCard}>
            <h3>{name}</h3>
            <img src={imagePath} alt={name} />
            {/*<p>{description}</p>*/}
        </div>
    );
};


export default GameCard;