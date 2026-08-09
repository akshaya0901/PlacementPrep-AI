function ResumeStats({ uploadedResume }) {
  const resumeScore = uploadedResume ? 85 : 0;

  return (
    <div className="section-card">
      <h2>Resume Statistics</h2>

      <p>
        <strong>Resume Uploaded:</strong>{" "}
        {uploadedResume ? "Yes ✅" : "No ❌"}
      </p>

      <p>
        <strong>Resume Score:</strong> {resumeScore}/100
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {uploadedResume ? "Ready for Applications" : "Upload Resume"}
      </p>
    </div>
  );
}

export default ResumeStats;