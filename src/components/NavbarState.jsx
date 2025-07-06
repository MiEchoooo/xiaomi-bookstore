import React from "react";
import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";

function NavbarState() {
  const [isSearchBtn, setIsSearchBtn] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const toggleSearch = () => {
    setIsSearchBtn((prev) => !prev);
  };

  const handleLinkClick = (page) => {
    setActivePage(page);
  };
  return (
    <>
      <header id="navbar-header">
        <nav id="navbar-nav">
          <div id="navbar-grid" className="grid grid-cols-3 py-5 items-center">
            <div id="navbar-links" className="text-sm">
              <ul
                id="navbar-ul"
                className="flex gap-8 justify-center items-center"
              >
                <li
                  id="nav-home"
                  className={
                    activePage === "home" ? "font-semibold-dot" : "text-white"
                  }
                  onClick={() => handleLinkClick("home")}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </li>
                <li
                  id="nav-shop"
                  className={
                    activePage === "shop" ? "font-semibold-dot" : "text-white"
                  }
                  onClick={() => handleLinkClick("shop")}
                  style={{ cursor: "pointer" }}
                >
                  Shop
                </li>
                <li
                  id="nav-about"
                  className={
                    activePage === "about" ? "font-semibold-dot" : "text-white"
                  }
                  onClick={() => handleLinkClick("about")}
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </li>
              </ul>
            </div>
            <div id="navbar-logo" className="flex justify-center">
              <span className="logo font-bold text-lg">XIAOMI</span>
            </div>
            <div
              id="navbar-icons"
              className="flex justify-center gap-10 items-center"
            >
              <span id="search-form-span">
                <form
                  id="search-form"
                  action="#"
                  className={`${isSearchBtn ? "show-search" : ""} search`}
                >
                  <input
                    id="search-input"
                    type="search"
                    placeholder="Type something..."
                    className="search-inp"
                  />
                  <div
                    id="search-btn"
                    className="search-btn"
                    onClick={toggleSearch}
                  >
                    {!isSearchBtn ? (
                      <ion-icon
                        id="search-icon"
                        name="search-outline"
                        className="search-icon"
                      ></ion-icon>
                    ) : (
                      <ion-icon
                        id="close-icon"
                        name="close-outline"
                        className="close-icon"
                      ></ion-icon>
                    )}
                  </div>
                </form>
              </span>
              <span id="nav-heart-icon">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
              <span id="nav-bag-icon">
                <ion-icon name="bag-outline"></ion-icon>
              </span>
              <span id="nav-person-icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </div>
          </div>
        </nav>
      </header>
      {activePage === "home" && <Home />}
      {activePage === "about" && <About />}
      {activePage === "shop" && <Shop />}
    </>
  );
}

export default NavbarState;
