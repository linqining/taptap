// components/WalletButton.tsx
import React from 'react';
// import styles from '../styles/WalletButton.module.css';
import {ConnectButton} from "@mysten/dapp-kit";

// const WalletIcon: React.FC = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path
//             d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72zM15 18H6V6h9v3h-3.25c-.41 0-.75.34-.75.75s.34.75.75.75H15v7z"/>
//     </svg>
// );

interface WalletButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const WalletButton: React.FC<WalletButtonProps> = () => {
    // const buttonRef = React.useRef<HTMLButtonElement>(null);
    // function handleClick() {
    //     buttonRef.current?.click();
    // }
  return (
      <div>
          <ConnectButton connectText="连接钱包" />
          {/*<a className={styles.walletBtn} onClick={handleClick}>*/}
          {/*    <WalletIcon/>*/}
          {/*    钱包*/}
          {/*</a>*/}
      </div>
);
}

// const WalletButton: React.FC<WalletButtonProps> = () => {
//     const buttonRef = React.useRef<HTMLButtonElement>(null);
//
//     return (
//         <ConnectButton
//             connectText="连接钱包"
//             asChild={true} ref={buttonRef}/>
//     );
//
// }
// <button id={"connectbtn"} className={styles.walletBtn}>
//     <WalletIcon/>
//     钱包
// </button>


export default WalletButton;