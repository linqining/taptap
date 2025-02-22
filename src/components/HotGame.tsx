
import React from 'react';
import GameGrid from './GameGrid.tsx';
import UploadButton from './UploadButton.tsx';
import {Game} from "../types.ts";
import styles from '../styles/HotGame.module.css';

const games:Game[] = [
    {id:"russian_block", title: '俄罗斯方块', description: '魅力与经典的记忆坐标', image:'russian_block.png' },
    {id:"ocean_adventure", title: '海洋冒险', description: '探索神秘海底世界的冒险游戏', image:'ocean_adventure.png' },
    {id:"polar_racing", title: '极地竞速', description: '冰雪世界的极速赛车体验', image:'polar_racing.png' },
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