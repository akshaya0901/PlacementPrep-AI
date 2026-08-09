function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="company-input"
      placeholder="🔍 Search Company..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;