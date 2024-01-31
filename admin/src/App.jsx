import React, { useState, Fragment, useEffect } from "react";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
function App() {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const Main = ({ children, isNavbar, isFooter }) => (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      {isNavbar && <Navbar theme={theme} setTheme={setTheme} />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route, i) => {
              const Page = route.page;
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={
                    <Main isNavbar={route.isNavbar} isFooter={route.isFooter}>
                      <Page theme={theme} />
                    </Main>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  );
}

export default App;
