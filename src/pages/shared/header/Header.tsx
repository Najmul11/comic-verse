import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import BrandLogo from "../../../assets/images/BrandLogo.png";
import "./Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const user = "g";

  const menuClass = "btn  btn-ghost hover:bg-base-200 lg:px-6 rounded-sm";
  const menu = (
    <>
      <NavLink to={"/all-books"} className={menuClass}>
        All Books
      </NavLink>
      {user ? (
        <>
          <NavLink to={"/add-new-book"} className={menuClass}>
            Add New Book
          </NavLink>
          <button className={`${menuClass}`}>
            <span className="text-xl">
              <FiLogOut />
            </span>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to={"/signin"} className={menuClass}>
            Sign in
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className=" shadow-sm  w-full bg-white z-10 sticky top-0">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <AiOutlineMenu />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu}
              </ul>
            </div>
            <Link to={"/"}>
              <img src={BrandLogo} alt="" className="h-20 dark:bg-orange-500" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>
          <div className="navbar-end">
            <div className="mr-5">
              {darkMode ? (
                <HiOutlineSun
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl mr-4 hover:fill-white cursor-pointer"
                />
              ) : (
                <HiOutlineMoon
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl mr-4 hover:fill-black cursor-pointer"
                />
              )}
            </div>

            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
