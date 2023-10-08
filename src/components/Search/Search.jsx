import { useState } from "react";
import FilterButtons from "./FilterButtons";
import AlphabetButtons from "./AlphabetButtons";
import ATCContainer from "./ATCContainer";
import SearchData from "./SearchData";
import "../../components/Search/search.css";

function Search() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeLetterFilter, setActiveLetterFilter] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [data] = useState([
    // Manually set data as an array of objects
    {
      id: 1,
      name: "Panadol Night for Women",
      category: "Category 1",
      dose: "5mg",
      drugName: "Drug A",
      presentation: "Tablet",
      form: "Solid",
      route: "Oral",
      type: "Type A",
      substituteAvailable: true,
      price: "$10.00",
    },
    {
      id: 2,
      name: "Advil",
      category: "Category 2",
      dose: "10mg",
      drugName: "Drug B",
      presentation: "Capsule",
      form: "Solid",
      route: "Oral",
      type: "Type B",
      substituteAvailable: true,
      price: "$15.00",
    },
    {
      id: 3,
      name: "Risperdirone Syrup + Quetiapine",
      category: "Category 2",
      dose: "10mg",
      drugName: "Drug B",
      presentation: "Capsule",
      form: "Solid",
      route: "Oral",
      type: "Type B",
      substituteAvailable: true,
      price: "$15.00",
    },
    {
      id: 4,
      name: "Nexium",
      category: "Category 2",
      dose: "10mg",
      drugName: "Drug B",
      presentation: "Capsule",
      form: "Solid",
      route: "Oral",
      type: "Type B",
      substituteAvailable: true,
      price: "$15.00",
    },
    // Add more data items here as needed
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    // Filter the data based on the selected letter or filter type
    if (filter === "A-Z") {
      setFilteredData(data);
    } else if (filter === "ATC") {
      setFilteredData(data);
    } else if (filter === "OTC") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.name.startsWith(filter));
      setFilteredData(filtered);
    }
  };

  const handleLetterFilterClick = (letter) => {
    setActiveLetterFilter(letter);

    // Filter the data based on the selected letter
    const filtered = data.filter((item) => item.name.startsWith(letter));
    setFilteredData(filtered);
  };

  const handleToggleFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    if (searchTerm) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <section
      id="section-2"
      className="flex flex-col  sm:flex-row md:flex-row justify-around items-center w-[100%] h-screen pt-16 mt-8 z-50 overflow-y-auto"
    >
      <div id="search-section" className={`search-section h-screen `}>
        <h3 className="search-title text-3xl font-bold">
          {"Medications Search"}
        </h3>
        <div className="search-container py-8 ">
          <input
            type="text"
            className="search-input font-light bg-[#303134] border-solid rounded-3xl border-[1px] border-[#259f83] h-10 w-8/12  focus:w-[85%] focus:border-[#259f83] active:border-[#259f83] px-3 sm:w-4/12 sm:font-light md:font-light"
            id="searchInput"
            placeholder={"search"}
            onChange={handleSearchInputChange}
          />
          {/* <span className="search-icon">
            <img src={BsSearch} alt="search" className="s-icon" />
          </span> */}
        </div>
        <button
          className={`toggle-filters-button rounded-full  bg-[#259f83] hover:bg-[transparent] hover:transition-all hover:border-[#259f83] hover:text-[#259f83] focus:text-[#00ffc3] focus:bg-[transparent] focus:border-[#00ffc3]  active:text-[#00ffc3] active:bg-[transparent] active:border-white px-3 py-1.5 border-solid border-[1px] border-[transparent] hover:border-[1px]  ${
            showFilters === true ? "-active" : ""
          }`}
          onClick={handleToggleFilters}
        >
          Advanced Search
        </button>
        {showFilters && (
          <>
            <FilterButtons
              activeFilter={activeFilter}
              handleFilterClick={handleFilterClick}
            />
            {activeFilter === "A-Z" && (
              <AlphabetButtons
                activeFilter={activeLetterFilter}
                handleFilterClick={handleLetterFilterClick}
              />
            )}
            {activeFilter === "ATC" && <ATCContainer />}
          </>
        )}
        <SearchData
          className="search-data-cont"
          filteredData={filteredData}
          data={data}
        />
      </div>
    </section>
  );
}

export default Search;
