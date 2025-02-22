// components/GameCard.tsx
import React from 'react';
import styles from '../styles/GameCard.module.css';

interface GameCardProps {
    title: string;
    description: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description }) => (
    <div className={styles.gameCard}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default GameCard;