/* eslint-disable react/prop-types */

import AlphabetButtons from "./AlphabetButtons"; // Assuming AlphabetButtons is imported from the correct location

function FilterButtons({ activeFilter, handleFilterClick }) {
  return (
    <div className="filters">
      <button
        className={`filters-btn ${activeFilter === "A-Z" ? "active" : ""}`}
        onClick={() => handleFilterClick("A-Z")}
      >
        A-Z
      </button>
      <button
        className={`filters-btn ${activeFilter === "ATC" ? "active" : ""}`}
        onClick={() => handleFilterClick("ATC")}
      >
        ATC
      </button>
      <button
        className={`filters-btn ${activeFilter === "OTC" ? "active" : ""}`}
        onClick={() => handleFilterClick("OTC")}
      >
        OTC
      </button>

      {/* Assuming you want to include AlphabetButtons component here */}
      <AlphabetButtons
        activeFilter={activeFilter}
        handleFilterClick={handleFilterClick}
      />
    </div>
  );
}

export default FilterButtons;
