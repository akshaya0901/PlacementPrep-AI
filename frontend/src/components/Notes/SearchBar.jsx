function SearchBar({ search, setSearch }) {
  return (
    <div className="section-card">
      <input
        type="text"
        className="company-input"
        placeholder="🔍 Search Notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;