import React from 'react';

const GameDetail: React.FC = () => {
    // 定义内联样式对象
    const containerStyle: React.CSSProperties = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    };

    // const headerStyle: React.CSSProperties = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     marginBottom: '40px',
    // };

    const gameInfoStyle: React.CSSProperties = {
        textAlign: 'center',
        marginBottom: '50px',
    };

    const downloadBtnStyle: React.CSSProperties = {
        padding: '12px 36px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        fontSize: '18px',
        cursor: 'pointer',
    };

    const reviewsStyle: React.CSSProperties = {
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '10px',
    };

    const reviewCardStyle: React.CSSProperties = {
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };

    const reviewHeaderStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const ratingStyle: React.CSSProperties = {
        color: '#ffc107',
        marginLeft: '15px',
    };

    return (
        <div style={containerStyle}>
            {/* 游戏信息 */}
            <section style={gameInfoStyle}>
                <button style={downloadBtnStyle}>立即下载</button>
            </section>

            {/* 用户评价 */}
            <section style={reviewsStyle}>
                <h2>用户评价</h2>

                <div style={reviewCardStyle}>
                    <div style={reviewHeaderStyle}>
                        <span>用户名1</span>
                        <span style={ratingStyle}>★★★★☆</span>
                    </div>
                    <p>这里是用户评价内容，可以是任意长度的文本描述。</p>
                </div>

                <div style={reviewCardStyle}>
                    <div style={reviewHeaderStyle}>
                        <span>用户名2</span>
                        <span style={ratingStyle}>★★★★★</span>
                    </div>
                    <p>这里是另一个用户的评价内容示例。</p>
                </div>
            </section>
        </div>
    );
};

export default GameDetail;