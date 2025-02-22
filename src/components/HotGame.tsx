
import React from 'react';
import GameGrid from './GameGrid.tsx';
import UploadButton from './UploadButton.tsx';
import {Game} from "../types.ts";
import styles from '../styles/HotGame.module.css';

const games:Game[] = [
    { title: '海洋冒险', description: '探索神秘海底世界的冒险游戏' },
    { title: '极地竞速', description: '冰雪世界的极速赛车体验' },
    // 更多游戏数据...
];

const HotGame: React.FC = () => {
    return (
        <div>
            <h1 className={styles.mainTitle}>近期热门游戏</h1>

            <GameGrid games={games}/>

            <div className={styles.uploadSection}>
                <UploadButton/>
            </div>
        </div>
    );
};

export default HotGame;