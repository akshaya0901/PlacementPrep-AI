function ResumeCard({ uploadedResume, deleteResume }) {
  if (!uploadedResume) {
    return (
      <div className="section-card">
        <h2>Uploaded Resume</h2>
        <p>No resume uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="section-card">
      <h2>Uploaded Resume</h2>

      <p>
        <strong>File Name:</strong> {uploadedResume.name}
      </p>

      <p>
        <strong>File Size:</strong>{" "}
        {(uploadedResume.size / 1024).toFixed(2)} KB
      </p>

      <p>
        <strong>Upload Date:</strong> {uploadedResume.uploadDate}
      </p>

      <button
        className="delete-btn"
        onClick={deleteResume}
        style={{ marginTop: "15px" }}
      >
        Delete Resume
      </button>
    </div>
  );
}

export default ResumeCard;