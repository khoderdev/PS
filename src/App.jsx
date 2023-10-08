import SideBar from "./components/Nav/SideBar.jsx";
import NavBar from "./components/Nav/NavBar.jsx";
import GridSection from "./components/GridSection.jsx";
import Search from "./components/Search/Search.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Hero />
      <GridSection />
      <Search />
      <Section-3 />
    </div>
  );
};

export default App;
