import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/Resume/ResumeUpload";
import ResumeCard from "../components/Resume/ResumeCard";
import ResumeStats from "../components/Resume/ResumeStats";

function Resume() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedResume, setUploadedResume] = useState(null);

  // Load resume from Local Storage
  useEffect(() => {
    const savedResume = localStorage.getItem("uploadedResume");

    if (savedResume) {
      setUploadedResume(JSON.parse(savedResume));
    }
  }, []);

  // Save resume to Local Storage
  useEffect(() => {
    if (uploadedResume) {
      localStorage.setItem(
        "uploadedResume",
        JSON.stringify(uploadedResume)
      );
    } else {
      localStorage.removeItem("uploadedResume");
    }
  }, [uploadedResume]);

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  }

  function uploadResume() {
    if (!selectedFile) {
      alert("Please select a resume first.");
      return;
    }

    const resumeData = {
      name: selectedFile.name,
      size: selectedFile.size,
      uploadDate: new Date().toLocaleString(),
    };

    setUploadedResume(resumeData);
    setSelectedFile(null);

    alert("Resume uploaded successfully!");
  }

  function deleteResume() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your resume?"
    );

    if (confirmDelete) {
      setUploadedResume(null);
      alert("Resume deleted successfully!");
    }
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Resume Manager</h1>

        <p className="dashboard-subtitle">
          Upload and manage your resume.
        </p>

        <ResumeUpload
          selectedFile={selectedFile}
          handleFileChange={handleFileChange}
          uploadResume={uploadResume}
        />

        <ResumeCard
          uploadedResume={uploadedResume}
          deleteResume={deleteResume}
        />

        <ResumeStats
          uploadedResume={uploadedResume}
        />
      </div>
    </>
  );
}

export default Resume;