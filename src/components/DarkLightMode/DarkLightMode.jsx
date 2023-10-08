import { useLayoutEffect, useState } from "react";
import switchdarklight from "../../assets/DarkLightMode.svg";

const DarkLightMode = (props) => {
  const [iconTheme, setIconTheme] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function getCurrentTheme() {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("ess.theme");
      if (savedTheme !== null) {
        return savedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light"; // Default theme if window is undefined
  }

  function loadTheme(theme) {
    if (typeof window !== "undefined") {
      const root = document.querySelector(":root");
      root.setAttribute("color-scheme", theme);
    }
  }

  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ess.theme", newTheme);
    setIconTheme(newTheme);
    loadTheme(newTheme);

    // Toggle the sidebar
    setIsSidebarOpen(!isSidebarOpen);
  }

  useLayoutEffect(() => {
    const initialTheme = getCurrentTheme();
    setIconTheme(initialTheme);
    loadTheme(initialTheme);
  }, []);

  return (
    <>
      <div onClick={toggleTheme} className="switcharabic">
        <img src={switchdarklight} alt="switchdarklight" />
      </div>
    </>
  );
};

export default DarkLightMode;
