import React, { useState, } from 'react';
import styles from "../styles/UploadButton.module.css";

const FileUpload: React.FC = () => {
    const [selectedFile, ] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');
    const UploadIcon: React.FC = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
    );
    //
    // // 处理文件选择
    // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     if (file) {
    //         setSelectedFile(file);
    //         setUploadStatus(`已选择文件: ${file.name}`);
    //     }
    // };

    // 处理文件上传
    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('请先选择一个文件');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            setUploadStatus('上传中...');
            const response = await fetch('https://your-api-endpoint/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                setUploadStatus('上传成功: ' + result.message);
            } else {
                throw new Error('上传失败');
            }
        } catch (error) {
            setUploadStatus('上传失败: ' + (error as Error).message);
        }
    };

    return (
      <div className="file-upload-container">
        <div>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="输入游戏名称"
          />
        </div>
        <button onClick={handleUpload} className={styles.uploadBtn}>
          <UploadIcon />
          上传游戏
        </button>
        <div className="status-message">{uploadStatus}</div>
      </div>
    );
};


export default FileUpload;