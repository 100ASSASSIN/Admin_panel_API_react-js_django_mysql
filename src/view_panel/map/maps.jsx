import React from "react";

const HTMLPageViewer = ({ url }) => {
  return (
    <div className="html-page-container">
      <iframe src={url} title="HTML Page" width="100%" height="400px" />
      
    </div>
  );
};

export default HTMLPageViewer;
