
import React from 'react';
import "./CV_DownloaderStyles.css";

const PDF_FILE_URL = "http://localhost:3000/cvfile.pdf";

const CV_Dowloader = () => {

    const downloadFileAtURL = (url) => {
        fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const fileName = url.split("/").pop();
            const aTag = document.createElement("a");
            aTag.href = blobURL;
            aTag.setAttribute("download", fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        });
    }

  return (
    <div className="downloader-container">
        <button className="btn-downloader" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Download CV</button>
    </div>
  );
}

export default CV_Dowloader;