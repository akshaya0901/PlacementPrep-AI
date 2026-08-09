function CompanyTable({
  companies,
  search,
  filter,
  editCompany,
  deleteCompany,
}) {
  const filteredCompanies = companies.filter((item) => {
    const matchesSearch = item.company
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="section-card">
      <h2>My Companies</h2>

      <table className="applications-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredCompanies.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No companies found.
              </td>
            </tr>
          ) : (
            filteredCompanies.map((item, index) => (
              <tr key={index}>
                <td>{item.company}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => editCompany(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this company?"
                        )
                      ) {
                        deleteCompany(index);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTable;