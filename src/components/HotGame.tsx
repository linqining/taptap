
import  {useState,useEffect} from 'react';
import GameGrid from './GameGrid.tsx';
import {EGameAddEvent, Game} from "../types.ts";
import styles from '../styles/HotGame.module.css';
import FileUpload from "./FileUpload.tsx";
import AddGame from "../contract/AddGame.tsx";
import {useSuiClient} from "@mysten/dapp-kit";
import {SuiEvent} from "@mysten/sui/client";

// var games:Game[] = [
//     {id:"russian_block", title: '俄罗斯方块', description: '魅力与经典的记忆坐标', image:'russian_block.png' },
//     {id:"ocean_adventure", title: '海洋冒险', description: '探索神秘海底世界的冒险游戏', image:'ocean_adventure.png' },
//     {id:"polar_racing", title: '极地竞速', description: '冰雪世界的极速赛车体验', image:'polar_racing.png' },
//     // 更多游戏数据...
// ];


function HotGame (){
    const [games, setGames] = useState<Game[]>([]);
    const client = useSuiClient();
    useEffect(() => {
        // 模拟从 API 获取数据
        // const fetchData = async () => {
            client.queryEvents({
                query: {
                    MoveEventType: "0x29f07bb972a6511703f05d53693c7de9dacf13e141ec8ba763b73ae6fd0218df::page::EGameAdded",
                },
            }).then((events) => {
                console.log("query result",events)
                var games = events.data.map(function(ent   :SuiEvent):Game {
                    const val = ent.parsedJson as EGameAddEvent;
                    return {id: val.id,title:val.name,description:"description",image:"image"};
                })
                setGames(games);
                console.log(events)
            });
            console.log(games)
        // };
        // fetchData();
    }, []); // 空依赖数组表示只在组件挂载时执行



    return (
        <div>
            <h1 className={styles.mainTitle}>近期热门游戏</h1>

            <GameGrid games={games}/>
            <AddGame/>
            <div className={styles.uploadSection}>
                <FileUpload />
            </div>
        </div>
    );
};

export default HotGame;