import PropTypes from 'prop-types';
import logo from '../../assets/Logo.png';

const Navbar = ({ onSearch, onSortByView }) => {
  return (
    <header>
      <nav className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-b-2 py-5 border-[#17171720]">
        <div className="logo">
          <img className="w-[100px] md:w-[120px]" src={logo} alt="PH Tube Logo" />
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <label className="input flex-1">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              id="search-input"
              type="search"
              placeholder="Search videos..."
              onKeyUp={e => onSearch(e.target.value)}
            />
          </label>
          <button onClick={() => onSearch(document.getElementById('search-input').value)} className="btn btn-sm md:btn-md bg-[#FF1F3D] text-white">
            Search
          </button>
        </div>
        <div className="flex gap-3">
          <button onClick={onSortByView} className="btn btn-sm md:btn-md">
            Sort by View
          </button>
          <button className="btn btn-sm md:btn-md bg-[#FF1F3D] text-white">Blog</button>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  onSearch: PropTypes.func,
  onSortByView: PropTypes.func,
};

export default Navbar;
