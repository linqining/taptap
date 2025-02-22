const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
}

const navGroupStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
};

const walletBtnStyles = {
    padding: '8px 20px',
    background: 'var(--accent)', // 使用 CSS 变量
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};


export function Header() {
    return (
    <header style={headerStyle}>
        <img src="./image/logo.png" alt="Walrus LOGO" width="150"/>
            <div style={navGroupStyles}>
                <button style={walletBtnStyles}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72zM15 18H6V6h9v3h-3.25c-.41 0-.75.34-.75.75s.34.75.75.75H15v7z"/></svg>
                    连接钱包
                </button>
            </div>
    </header>
    );
}
