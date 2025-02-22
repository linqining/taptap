// components/WalletButton.tsx
import React from 'react';
import styles from '../styles/WalletButton.module.css';

const WalletIcon: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72zM15 18H6V6h9v3h-3.25c-.41 0-.75.34-.75.75s.34.75.75.75H15v7z"/>
    </svg>
);

interface WalletButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const WalletButton: React.FC<WalletButtonProps> = ({ onClick }) => (
    <button className={styles.walletBtn} onClick={onClick}>
        <WalletIcon />
        连接钱包
    </button>
);

export default WalletButton;