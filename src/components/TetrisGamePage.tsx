import React from 'react';
import styles from '../styles/TetrisGamePage.module.css';

const TetrisGamePage: React.FC = () => {
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
        <div >
            {/* 游戏主体 */}
            <main>
                <div className={styles.gameHeader}>
                    <h1>《俄罗斯方块》</h1>
                    <div className={styles.gameMeta}>
                        <div className={styles.starRating}>★★★★☆</div>
                        <div>到期时间：2025/03/01</div>
                    </div>
                </div>

                <div style={buttonStyles.actionButtons}>
                    <button className={styles.primaryBtn}>立即下载</button>
                    <button style={{ ...buttonStyles.primaryBtn, ...buttonStyles.secondaryBtn }} >
                        续费授权
                    </button>
                </div>
                {/* 评论模块 */}
                <section className={styles.commentSection}>
                    <h2>用户评价（238）</h2>

                    {/* 评论表单 */}
                    <form style={{ marginBottom: '40px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <input
                                type="text"
                                placeholder="用户名"
                                style={{ width: '200px', padding: '8px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <div className={styles.starRating}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>☆</span>
                                ))}
                            </div>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
              <textarea
                  rows={4}
                  style={{ width: '100%', padding: '10px' }}
              />
                        </div>
                        <button className={styles.primaryBtn} type="submit">
                            提交评价
                        </button>
                    </form>

                    {/* 现有评论 */}
                    <div className={styles.reviewCard}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <span>方块达人</span>
                            <span className={styles.starRating}>★★★★☆</span>
                        </div>
                        <p>经典永不过时，最佳休闲游戏！希望增加联机功能</p>
                    </div>

                    <div className={styles.reviewCard}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
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