// components/GameGrid.tsx
import React from 'react';
import GameCard from './GameCard';
import styles from '../styles/GameGrid.module.css';
import { Game } from '../types';
import {useNavigate } from "react-router-dom";


interface GameGridProps {
    games: Game[];
}

const GameGrid: React.FC<GameGridProps> = ({ games }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.gameGrid}>
            {games.map((game, index) => (
                <div key ={index} onClick={()=>{
                    navigate(`/games/${game.id}`);
                }}>
                    <GameCard
                        key={index}
                        name={game.name}
                        gameImage={game.image}
                        description={game.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default GameGrid;