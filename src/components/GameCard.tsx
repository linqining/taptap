// components/GameCard.tsx
import React from 'react';
import styles from '../styles/GameCard.module.css';


interface GameCardProps {
    title: string;
    description: string;
    gameImage:string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description,gameImage }) =>{
    const imagePath = "/images/"+gameImage;
    return (
        <div className={styles.gameCard}>
            <h3>{title}</h3>
            <img src={imagePath} alt={title} />
            <p>{description}</p>
        </div>
    );
};


export default GameCard;