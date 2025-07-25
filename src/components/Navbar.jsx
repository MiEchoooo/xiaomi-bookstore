import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ searchQuery, setSearchQuery }) {
  const [isSearchBtn, setIsSearchBtn] = useState(false);
  const navigate = useNavigate();

  // 切换放大镜/关闭按钮
  const toggleSearch = () => {
    setIsSearchBtn((prev) => !prev);
  };

  // 输入变化时更新搜索关键词
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // 点击搜索按钮或回车提交表单
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/shop");
  };

  return (
    <header id="navbar-header">
      <nav id="navbar-nav">
        <div id="navbar-grid" className="grid grid-cols-3 py-5 items-center">
          {/* 左侧导航链接 */}
          <div id="navbar-links" className="text-sm">
            <ul id="navbar-ul" className="flex gap-8 justify-center items-center">
              <li id="nav-home">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "font-semibold-dot" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li id="nav-shop">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "font-semibold-dot" : "text-white"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li id="nav-about">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "font-semibold-dot" : "text-white"
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 中间 logo */}
          <div id="navbar-logo" className="flex justify-center">
            <span className="logo font-bold text-lg">BIBILIO</span>
          </div>

          {/* 右侧图标 + 搜索栏 */}
          <div id="navbar-icons" className="flex justify-center gap-10 items-center">
            <span id="search-form-span">
              <form
                id="search-form"
                onSubmit={handleSubmit}
                className={`${isSearchBtn ? "show-search" : ""} search`}
              >
                <input
                  id="search-input"
                  type="search"
                  placeholder="Type something..."
                  className="search-inp"
                  value={searchQuery}
                  onChange={handleInputChange}
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
  );
}

export default Navbar;
