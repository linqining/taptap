// components/Header.jsx
import React from 'react';
import WalletButton from './WalletButton';
import styles from '../styles/Header.module.css';
import logo from '../image/logo.png';

const Header:React.FC = () => (
    <header className={styles.header}>
        <img src={logo} alt="Walrus LOGO" width="150" />
        <div className={styles.navGroup}>
            <WalletButton />
        </div>
    </header>
);

export default Header;