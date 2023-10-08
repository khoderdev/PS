// import "./Hero.css";
import { EmileBitar } from "../assets";
import { BitarQuote } from "../assets";
import "./Hero.css";

const Hero = () => {
  return (
    // Hero Section START
    <section
      id="hero-section"
      className="flex flex-col  w-[90%] h-auto p-2  ml-8 m-0 justify-around items-center sm:flex-row  md:flex-row  overflow-y-auto "
    >
      {/* Bitar Quote Conatiner START */}
      <div id="bitarQuote-cont" className="mt-[-10%]  m-0">
        <img
          id="bitarImg"
          className=""
          src={BitarQuote}
          alt="Emile Bitar Quote"
        />
      </div>
      {/* Bitar Quote Conatiner END */}

      {/* Bitar IMAGE Conatiner START */}
      <div id="bitarImg-cont" className="flex justify-center items-center m-0 ">
        <img src={EmileBitar} alt="Emile Bitar" />
      </div>
      {/* Bitar IMAGE Conatiner END */}
    </section>
    // Hero Section END
  );
};

export default Hero;

/* <h1 className="BitarQuote leading-normal md:text-7xl sm:text-6xl text-4xl md:py-6	">
          لا يجوز أن يكون الدواء أكثر مرارة من المرض
        </h1>
        <div>
          <p className="BitarName text-4xl">إميل بيطار</p>
        </div> */
