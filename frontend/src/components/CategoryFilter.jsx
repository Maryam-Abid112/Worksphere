export default function CategoryFilter({ categories, category, setCategory, filteredCount }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={category === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
      <div className="filtered-count">{filteredCount} freelancers found</div>
    </div>
  );
}