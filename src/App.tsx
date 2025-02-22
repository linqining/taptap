// App.jsx
import Header from "./components/Header.tsx";

import TetrisGamePage   from "./components/TetrisGamePage.tsx";
import styles from './styles/App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main>
                <TetrisGamePage />
            </main>
        </div>
    );
};

export default App;