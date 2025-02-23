import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from '../styles/TetrisGamePage.module.css';

import { useParams } from 'react-router-dom';
import {useSignAndExecuteTransaction, useSuiClient} from "@mysten/dapp-kit";
import {Transaction} from "@mysten/sui/transactions";
import {Game} from "../types.ts";
import {MoveStruct, MoveValue} from "@mysten/sui/client";

const TetrisGamePage: React.FC = () => {
    const { gameId } = useParams();
    console.log(gameId);

    const [remark, setRemark] = useState<string >("");
    const [score, setScore] = useState<number >(0);
    const [game, setGame] = useState<Game|null >(null);
    const client = useSuiClient();
    const {mutate:signAndExecute} = useSignAndExecuteTransaction();

    useEffect(() => {
        if (!gameId){
            return;
        }
        client.getObject({
            id: gameId,
            options:{
            showContent:true,
        }
        }).then((res) => {
            if (res.data?.content){
                if (res.data.content.dataType === "moveObject"){
                    const fields = res.data.content.fields;
                    const result = parseMoveStruct(fields)
                    let gameData = result as Game
                    gameData.num_comments = Number(gameData.num_comments)
                    gameData.average_score = Number(gameData.average_score)
                    gameData.total_score = Number(gameData.total_score)
                    setGame(gameData)
                }
            }
        })
    }, []);


// 解析 MoveValue 的辅助函数
    function parseMoveValue(value: MoveValue): any {
        if (Array.isArray(value)) {
            // 数组类型：递归解析每个元素
            return value.map(v => parseMoveValue(v));
        } else if (typeof value === 'object' && value !== null) {
            // 对象类型：进一步判断是否为 MoveStruct 的第二种情况
            if ('fields' in value && 'type' in value) {
                return parseMoveStruct(value);
            } else {
                // 普通对象：递归解析每个属性
                const result: { [key: string]: any } = {};
                for (const key in value) {
                    result[key] = parseMoveValue(value[key]);
                }
                return result;
            }
        } else {
            // 基本类型直接返回
            return value;
        }
    }

// 解析 MoveStruct 的主函数
    function parseMoveStruct(moveStruct: MoveStruct): any {
        if (Array.isArray(moveStruct)) {
            // 处理数组
            return moveStruct.map(item => parseMoveValue(item));
        } else if ('fields' in moveStruct && 'type' in moveStruct) {
            // 处理带 fields 和 type 的对象
            const parsedFields: { [key: string]: any } = {};
            for (const key in moveStruct.fields) {
                parsedFields[key] = parseMoveValue(moveStruct.fields[key]);
            }
            return {
                type: moveStruct.type,
                ...parsedFields
            };
        } else {
            // 处理普通对象
            const result: { [key: string]: any } = {};
            for (const key in moveStruct) {
                result[key] = parseMoveValue(moveStruct[key]);
            }
            return result;
        }
    }




    const handleRemarkChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setRemark(event.target.value);
    };


    const submitComment = (e) => {
        e.preventDefault();
        const tx = new Transaction();

        if (!gameId){
            return;
        }
        tx.moveCall({
            package: "0x29f07bb972a6511703f05d53693c7de9dacf13e141ec8ba763b73ae6fd0218df",
            module: "page",
            function: "add_comment",
            arguments: [
                tx.object(gameId),
                tx.pure.string(remark),
                tx.pure.u64(score),
            ]
        });
        signAndExecute({transaction: tx},      {
            onSuccess: async ({ digest }) => {
                const { effects } = await client.waitForTransaction({
                    digest: digest,
                    options: {
                        showEffects: true,
                    },
                });
                alert("Game added comment"+gameId);
                console.log(effects)
            },
        });
    }

    // 样式常量
    const buttonStyles = {
        actionButtons: {
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            margin: '30px 0',
        },

        primaryBtn: {
            padding: '12px 36px',
            backgroundColor: '#e67e22', // accent color
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: '18px',
            cursor: 'pointer',
        },

        secondaryBtn: {
            backgroundColor: '#2c3e50', // primary color
        },
    };
    return (
      <div>
        {/* 游戏主体 */}
        <main>
          <div className={styles.gameHeader}>
            <h1>《{game?.name}》</h1>
            <div className={styles.gameMeta}>
              <div className={styles.starRating}>
                  {[...Array(5)].map((_, i) => (
                      <span key={i} >{game?.average_score? (i<=game.average_score? "★":"☆"):"☆"}</span>
                  ))}</div>
              <div>到期时间：2025/03/01</div>
            </div>
          </div>

          <div style={buttonStyles.actionButtons}>
            <button className={styles.primaryBtn}>立即下载</button>
            <button
              style={{
                ...buttonStyles.primaryBtn,
                ...buttonStyles.secondaryBtn,
              }}
            >
              续费授权
            </button>
          </div>
          {/* 评论模块 */}
          <section className={styles.commentSection}>
            <h2>用户评价（{game?.comments.length}）</h2>
            {/* 评论表单 */}
            <form style={{ marginBottom: "40px" }}>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="用户名"
                  style={{ width: "200px", padding: "8px" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <div className={styles.starRating}>
                    {[...Array(5)].map((_, i) => (
                        <span key={i} onClick={()=>{
                            setScore(i)
                        }}>{i<=score? "★":"☆"}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <textarea rows={4} style={{ width: "100%", padding: "10px" }} onChange={handleRemarkChange}/>
              </div>
              <button
                className={styles.primaryBtn}
                type="submit"
                onClick={submitComment}
              >
                提交评价
              </button>
            </form>

            {/* 现有评论 */}
            <div className={styles.reviewCard}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span>方块达人</span>
                <span className={styles.starRating}>★★★★☆</span>
              </div>
              <p>经典永不过时，最佳休闲游戏！希望增加联机功能</p>
            </div>

            <div className={styles.reviewCard}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span>新手玩家</span>
                <span className={styles.starRating}>★★★★★</span>
              </div>
              <p>操作流畅，怀旧感十足！每日必玩</p>
            </div>
          </section>
        </main>
      </div>
    );
};

export default TetrisGamePage;