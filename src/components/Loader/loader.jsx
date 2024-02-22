import React from "react";
import './loader.css'

// Inside Loader.jsx (or wherever your Loader component is defined)
const Loader = ({ progress, className }) => (
    <div className={"loader-container"}>
      {progress !== undefined && (
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
  
  export default Loader;
  