function FilterDropdown({ filter, setFilter }) {
  return (
    <select
      className="company-input"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="All">All Status</option>
      <option value="Applied">Applied</option>
      <option value="Interview">Interview</option>
      <option value="Rejected">Rejected</option>
    </select>
  );
}

export default FilterDropdown;