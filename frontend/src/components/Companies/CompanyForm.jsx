function CompanyForm({
  company,
  setCompany,
  role,
  setRole,
  status,
  setStatus,
  addCompany,
  editIndex,
}) {
  return (
    <div className="section-card">
      <h2>{editIndex !== null ? "Update Company" : "Add Company"}</h2>

      <input
        type="text"
        placeholder="Company Name"
        className="company-input"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        className="company-input"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <select
        className="company-input"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
      </select>

      <button className="action-btn" onClick={addCompany}>
        {editIndex !== null ? "Update Company" : "Add Company"}
      </button>
    </div>
  );
}

export default CompanyForm;
