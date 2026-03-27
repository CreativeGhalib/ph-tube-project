import PropTypes from 'prop-types';

const Categories = ({ categories, activeCategory, onCategoryClick, onAllClick }) => {
  return (
    <nav className="flex py-5 justify-center gap-3 flex-wrap px-4">
      <button
        id="btn-all"
        onClick={onAllClick}
        className={`btn btn-sm ${activeCategory === 'all' ? 'bg-[#FF1F3D] text-white' : 'hover:bg-[#FF1F3D] hover:text-white'}`}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat.category_id}
          id={`btn-${cat.category_id}`}
          onClick={() => onCategoryClick(cat.category_id)}
          className={`btn btn-sm ${activeCategory === cat.category_id ? 'bg-[#FF1F3D] text-white' : 'hover:bg-[#FF1F3D] hover:text-white'}`}
        >
          {cat.category}
        </button>
      ))}
    </nav>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  activeCategory: PropTypes.string,
  onCategoryClick: PropTypes.func,
  onAllClick: PropTypes.func,
};

export default Categories;
