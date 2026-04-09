export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <span>🔍</span>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by skill, role or name..."
      />
      <button>Search</button>
    </div>
  );
}