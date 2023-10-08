/* eslint-disable react/prop-types */

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function AlphabetButtons({ activeFilter, handleFilterClick }) {
  return (
    <div className="alphabet-container">
      {alphabet.map((letter) => (
        <button
          key={letter}
          className={`letter-button ${activeFilter === letter ? "active" : ""}`}
          onClick={() => handleFilterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default AlphabetButtons;
