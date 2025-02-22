import React, { useState, ChangeEvent } from 'react';
import styles from "../styles/UploadButton.module.css";

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');
    const UploadIcon: React.FC = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
    );

    // 处理文件选择
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setUploadStatus(`已选择文件: ${file.name}`);
        }
    };

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
            <input
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="file-input"
            />
            <label htmlFor="file-input" className="file-input-label">
                选择文件
            </label>
            <button onClick={handleUpload} className={styles.uploadBtn}>
                <UploadIcon />
                上传游戏
            </button>
            <div className="status-message">{uploadStatus}</div>
        </div>
    );
};

//
// const submitUpload=()=>{
//     console.log("uploadfile",uploadFile.value)
//     console.log("filelist",fileList.value)
//     if (fileList.value.length==0){
//         return
//     }
//     btnLoading.value = true
//     storeBlob(fileList.value[0].raw).then((resp)=>{
//         const storage_info = resp.info
//         const media_type = resp.media_type
//         console.log("upload resp",resp)
//         var info = {};
//         const SUI_NETWORK = "testnet";
//         const SUI_VIEW_TX_URL = `https://suiscan.xyz/${SUI_NETWORK}/tx`;
//         const SUI_VIEW_OBJECT_URL = `https://suiscan.xyz/${SUI_NETWORK}/object`;
//         if ("alreadyCertified" in storage_info) {
//             info = {
//                 status: "Already certified",
//                 blobId: storage_info.alreadyCertified.blobId,
//                 endEpoch: storage_info.alreadyCertified.endEpoch,
//                 suiRefType: "Previous Sui Certified Event",
//                 suiRef: storage_info.alreadyCertified.eventOrObject.Event.txDigest,
//                 suiBaseUrl: SUI_VIEW_TX_URL,
//             };
//         } else if ("newlyCreated" in storage_info) {
//             info = {
//                 status: "Newly created",
//                 blobId: storage_info.newlyCreated.blobObject.blobId,
//                 endEpoch: storage_info.newlyCreated.blobObject.storage.endEpoch,
//                 suiRefType: "Associated Sui Object",
//                 suiRef: storage_info.newlyCreated.blobObject.id,
//                 suiBaseUrl: SUI_VIEW_OBJECT_URL,
//             };
//         }
//         console.log(storage_info)
//         console.log(info)
//         console.log("upload file",fileList.value[0])
//
//         formData.value.resumeBlobId = info.blobId
//         formData.value.suiObjectId = info.suiRef
//         formData.value.mediaType = media_type
//         btnLoading.value = false
//     })
// }


export default FileUpload;