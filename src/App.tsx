// App.jsx
import Header from "./components/Header.tsx";

import HotGame   from "./components/HotGame.tsx";
import styles from './styles/App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TetrisGamePage from "./components/TetrisGamePage.tsx";

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Router>
                <nav>
                    <Link to="/">首页</Link>
                    {/*<Link to="/tetris">俄罗斯方块</Link>*/}
                    {/*<Link to="/hot_games">评论</Link>*/}
                </nav>

                <Routes>
                    <Route path="/" element={<HotGame />} />
                    <Route path="/games/:gameId" element={<TetrisGamePage />} />
                    {/*<Route path="/hot_games" element={<HotGame />} />*/}
                </Routes>
            </Router>
            {/*<main>*/}
            {/*    <HotGame/>*/}
            {/*    <TetrisGamePage />*/}
            {/*</main>*/}
        </div>
    );
};

export default App;