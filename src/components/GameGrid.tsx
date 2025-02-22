// components/GameGrid.tsx
import React from 'react';
import GameCard from './GameCard';
import styles from '../styles/GameGrid.module.css';
import { Game } from '../types';

interface GameGridProps {
    games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ games }) => (
    <div className={styles.gameGrid}>
        {games.map((game, index) => (
            <GameCard
                key={index}
                title={game.title}
                gameImage={game.image}
                description={game.description}
            />
        ))}
    </div>
);

export default GameGrid;