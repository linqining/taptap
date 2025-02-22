// App.jsx
import Header from "./components/Header.jsx";
import GameGrid from './components/GameGrid.jsx';
import UploadButton from './components/UploadButton.jsx';
import styles from './styles/App.module.css';
import {Game} from "./types.ts";

const App = () => {
    const games:Game[] = [
        { title: '海洋冒险', description: '探索神秘海底世界的冒险游戏' },
        { title: '极地竞速', description: '冰雪世界的极速赛车体验' },
        // 更多游戏数据...
    ];

    return (
        <div className={styles.container}>
            <Header />

            <main>
                <h1 className={styles.mainTitle}>近期热门游戏</h1>

                <GameGrid games={games} />

                <div className={styles.uploadSection}>
                    <UploadButton />
                </div>
            </main>
        </div>
    );
};

export default App;