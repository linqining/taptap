
import React, {useState, useEffect, ChangeEvent} from 'react';
import GameGrid from './GameGrid.tsx';
import {EGameAddEvent, Game} from "../types.ts";
import styles from '../styles/HotGame.module.css';
import {useSignAndExecuteTransaction, useSuiClient} from "@mysten/dapp-kit";
import {SuiEvent} from "@mysten/sui/client";
import {Transaction} from "@mysten/sui/transactions";
import { Modal ,message} from 'antd';

import uploadBtnStyle from "../styles/UploadButton.module.css";


function HotGame (){
    const [games, setGames] = useState<Game[]>([]);
    const client = useSuiClient();
    useEffect(() => {
        // 模拟从 API 获取数据
            fetchData();
    }, []); // 空依赖数组表示只在组件挂载时执行

    const fetchData = async()=>{
        client.queryEvents({
            query: {
                MoveEventType: "0x29f07bb972a6511703f05d53693c7de9dacf13e141ec8ba763b73ae6fd0218df::page::EGameAdded",
            },
        }).then((events) => {
            console.log("query result",events)
            var games = events.data.map(function(ent   :SuiEvent):Game {
                const val = ent.parsedJson as EGameAddEvent;
                return {id: val.id,name:val.name,description:"description",image:""};
            })
            setGames(games);
            console.log(events)
        });
    }

    const [gameName, setGameName] = useState<string | null>(null);
    const {mutate:signAndExecute} = useSignAndExecuteTransaction();
    // 处理文件选择
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGameName(event.target.value);
    };
    const UploadIcon: React.FC = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
    );


    const [modalShow, setModalShow] = React.useState(false);

    const showModal = () => {
        setModalShow(true)
        console.log("show modal")
    };
    const clockModal=()  => {
        setModalShow(false);
    };



    const handleAddGame = () => {
        const tx = new Transaction();
        if (!gameName) {
            messageApi.open({
                type: 'error',
                content: '名字不能为空',
            });
            return;
        }

        tx.moveCall({
            package: "0x29f07bb972a6511703f05d53693c7de9dacf13e141ec8ba763b73ae6fd0218df",
            module: "page",
            function: "add_game",
            arguments: [
                tx.object("0xc1e812817f51e112c8a373875f08868a4c896be9c974b0f14796c80d3141578b"),
                tx.pure.string(gameName),
            ]
        });
        showModal()
        signAndExecute({transaction: tx},      {
            onSuccess: async ({ digest }) => {
                const { effects } = await client.waitForTransaction({
                    digest: digest,
                    options: {
                        showEffects: true,
                    },
                });
                // alert("Game added"+gameName);
                console.log(effects)
                setGameName("")
                clockModal();
                fetchData();
            },
            onError: async () => {
                setGameName("");
                clockModal();
            }
        },);
    }
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <div>
            {contextHolder}
            <Modal
                title="交易处理中"
                open={modalShow}
            >
                <p>交易处理中</p>
            </Modal>
            <h1 className={styles.mainTitle}>近期热门游戏</h1>
            <GameGrid games={games}/>
            {/*<AddGame/>*/}
            <div className={styles.uploadSection}>
                {/*<FileUpload/>*/}
                <div className="file-upload-container">
                    <div>
                        <input
                            type="text"
                            className={uploadBtnStyle.inputBox}
                            placeholder="输入游戏名称"
                            onChange={handleNameChange}
                        />
                    </div>
                    <button onClick={handleAddGame} className={uploadBtnStyle.uploadBtn}>
                        <UploadIcon/>
                        上传游戏
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotGame;