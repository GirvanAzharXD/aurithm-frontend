import React, { useState, useRef } from "react";

const UploadPage = ({ onImageAnalysis }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDropzoneClick = () => {
    fileInputRef.current.click();
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onImageAnalysis(selectedFile);
    }
  };

  return (
    <div className="upload-section-container">
      {/* Left column: Info */}
      <div className="upload-info">
        <h2 className="upload-title">Upload a photo to start the analysis</h2>
        <p className="upload-tip">
          <strong>Tip:</strong> Use a photo with natural lighting, minimal shadows,
          and no filters for the most accurate analysis.
        </p>
      </div>

      {/* Middle column: Arrow */}
      <div className="upload-arrow-wrapper">
        <span className="upload-arrow">&rarr;</span>
      </div>

      {/* Right column: Upload box */}
      <div className="upload-box card">
        <form onSubmit={handleSubmit} className="h-full flex flex-col">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            style={{ display: "none" }}
          />

          {preview ? (
            <div className="upload-preview-container">
              <img
                src={preview}
                alt="Preview"
                className="upload-preview-image"
              />
              <div className="upload-button-group">
                <button type="submit" className="analyze-button">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="clear-button"
                >
                  Clear
                </button>
              </div>
            </div>
          ) : (
            <div className="dropzone" onClick={handleDropzoneClick}>
              <div className="dropzone-icon">☁️</div>
              <p>Click to upload a photo or drag and drop it here.</p>
              <small>Allowed formats: PNG and JPG.</small>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
