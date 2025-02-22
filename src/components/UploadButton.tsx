// components/UploadButton.tsx
import React from 'react';
import styles from '../styles/UploadButton.module.css';

const UploadIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
);

interface UploadButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onClick }) => (
    <button className={styles.uploadBtn} onClick={onClick}>
        <UploadIcon />
        上传一个游戏
    </button>
);

export default UploadButton;