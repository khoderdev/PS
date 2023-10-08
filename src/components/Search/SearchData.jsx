/* eslint-disable react/prop-types */

const SearchData = (props) => {
  const { filteredData } = props;

  return (
    <div className="search-data-container flex row w-[100%] pb-24 flex-wrap justify-center items-center p-5 ">
      {filteredData.map((drug) => (
        <div
          className="search-data-box w-[320px] h-auto	 p-3 m-6 border-solid border-[2px] rounded-2xl border-[#259f83]   justify-center items-center  sm:w-[400px] md:w-[400px] shadow-xl hover:shadow-2xl flex flex-col hover:scale-105 duration-300"
          key={drug.id}
        >
          <div className="column center">
            {/* <img src={switcharabic} alt="Switch Arabic" /> */}
            <h3 className="drug-name text-xl font-[900] mb-[10px]">
              {drug.name}
            </h3>
            <h6 className="drug-xmg">{drug.drugNameXmg}</h6>
          </div>
          <div className="data-description-container w-full flex-col mt-7 justify-center items-stretch">
            {drug.dose && (
              <div className="row flex">
                <div className="description-label text-start grow">Dose:</div>
                <div className="description-value text-end mr-7  grow text-[#00ffc3]">
                  {drug.dose}
                </div>
              </div>
            )}
            {drug.presentation && (
              <div className="row flex">
                <div className="description-label text-start grow">
                  Presentation:
                </div>
                <div className="description-value text-end mr-7 grow text-[#00ffc3]">
                  {drug.presentation}
                </div>
              </div>
            )}
            {drug.form && (
              <div className="row flex">
                <div className="description-label text-start grow">Form:</div>
                <div className="description-value text-end mr-7 grow text-[#00ffc3]">
                  {drug.form}
                </div>
              </div>
            )}
            {drug.route && (
              <div className="row flex">
                <div className="description-label text-start grow">Route:</div>
                <div className="description-value text-end mr-7 grow text-[#00ffc3]">
                  {drug.route}
                </div>
              </div>
            )}
            {drug.type && (
              <div className="row flex">
                <div className="description-label text-start grow">Type:</div>
                <div className="description-value text-end mr-7 grow text-[#00ffc3]">
                  {drug.type}
                </div>
              </div>
            )}
          </div>

          {drug.substituteAvailable && (
            <div className="btn-row flex justify-center mt-8">
              <div
                id="substitute-btn"
                className=" rounded-full w-40 bg-[#259f83] hover:bg-[transparent] hover:transition-all active:bg-[transparent] active:border-white px-3 py-1.5 border-solid border-[1px] border-[transparent] hover:border-[1px] hover:border-[#00ffc3]"
              >
                <ul>
                  <li>{/* Display your substitute data here */}</li>
                </ul>
                <button>Substitute</button>
              </div>
            </div>
          )}

          <div className="made-price  p-5">
            <div>
              <p>{/* Display additional data here */}</p>
              {/* <img src={switcharabic} alt="Switch Arabic" /> */}
            </div>
            <div className="drug-price">{drug.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchData;
