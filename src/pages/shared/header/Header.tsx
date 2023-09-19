import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import BrandLogo from "../../../assets/images/BrandLogo.png";
import "./Header.css";
import WishLists from "../wishList/WishLists";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { setDark, setLight } from "../../../redux/slices/darkModeSlice";
import { useGetProfileQuery } from "../../../redux/api/apiSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetProfileQuery(undefined);
  const { darkMode } = useAppSelector((state) => state.darkMode);

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
          <WishLists />
        </>
      ) : (
        <>
          <NavLink to={"/login"} className={menuClass}>
            Sign in
          </NavLink>
        </>
      )}
      {darkMode ? (
        <button
          onClick={() => dispatch(setLight())}
          className={`${menuClass} group`}
        >
          <HiOutlineSun className={`text-xl group-hover:text-orange-500`} />
        </button>
      ) : (
        <button
          onClick={() => dispatch(setDark())}
          className={`${menuClass} group`}
        >
          <HiOutlineMoon className={"text-xl group-hover:text-orange-500"} />
        </button>
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
          <div className="navbar-end ">
            {user && (
              <div className="flex gap-5 items-center">
                <div className="dropdown dropdown-end  ">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={data?.data?.avatar?.photoUrl} />
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
                <button className={`btn rounded-sm  border-0 group`}>
                  <span className="text-xl">
                    <FiLogOut className={"group-hover:text-orange-500"} />
                  </span>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
