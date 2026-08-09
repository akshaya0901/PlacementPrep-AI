function CategoryFilter({ filter, setFilter }) {
  return (
    <div className="section-card">
      <select
        className="company-input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="DBMS">DBMS</option>
        <option value="Aptitude">Aptitude</option>
        <option value="Interview">Interview</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}

export default CategoryFilter;