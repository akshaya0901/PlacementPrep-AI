function RecentApplications() {
  const applications = [
    {
      company: "Google",
      role: "Software Engineer Intern",
      status: "Applied",
    },
    {
      company: "Microsoft",
      role: "Frontend Intern",
      status: "Interview",
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      status: "Rejected",
    },
  ];

  return (
    <div className="section-card">
      <h2>Recent Applications</h2>

      <table className="applications-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.company}</td>
              <td>{app.role}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentApplications;