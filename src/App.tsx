// App.jsx
import Header from "./components/Header.tsx";

import GameDetail   from "./components/GameDetail.tsx";
import styles from './styles/App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                <GameDetail />
            </main>
        </div>
    );
};

export default App;