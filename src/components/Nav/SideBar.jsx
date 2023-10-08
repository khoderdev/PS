import { BsHouseFill, BsSearch } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { IoLibrary } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";

const SideBar = () => {
  return (
    <div className="SideBar flex fixed top-100 sm:top-100 lg:max-lg:bg-red-500  md:top-14 lg:top-52 xl:top-0 ">
      <a href="#hero-section">
        <SideBarIcon icon={<BsHouseFill size="27" />} />
      </a>
      <a href="#section-1">
        <SideBarIcon icon={<RiDashboardLine size="29" />} />
      </a>
      <a href="#section-2">
        <SideBarIcon icon={<BsSearch size="22" />} />
      </a>
      <a href="#section-3">
        <SideBarIcon icon={<IoLibrary size="22" />} />
      </a>
      <div className="switcharabic">
        <SideBarIcon icon={<LiaLanguageSolid size="22" />} />
      </div>
      <a className="ThemeMode">
        <SideBarIcon icon={<MdOutlineDarkMode size="22" />} />
      </a>
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);
export default SideBar;
