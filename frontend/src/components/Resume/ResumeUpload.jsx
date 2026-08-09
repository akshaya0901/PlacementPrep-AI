function ResumeUpload({ selectedFile, handleFileChange, uploadResume }) {
  return (
    <div className="section-card">
      <h2>Upload Resume</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="company-input"
        onChange={handleFileChange}
      />

      {selectedFile && (
        <p style={{ marginTop: "10px" }}>
          Selected File: <strong>{selectedFile.name}</strong>
        </p>
      )}

      <button
        className="action-btn"
        onClick={uploadResume}
        style={{ marginTop: "15px" }}
      >
        Upload Resume
      </button>
    </div>
  );
}

export default ResumeUpload;