import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { CartContext } from "../providers/Context";

const Navbar = () => {
  const {cart}= useContext(CartContext)
  // console.log(cart);
  return (
    <>
      <div className="navbar p-0 bg-base-100 shadow-sm">
        <div className="navbar max-w-screen-xl mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer mr-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-bold" : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-bold" : ""
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-bold" : ""
                    }
                    to="/cart"
                  >
                    <MdShoppingCart size={20} />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-700 font-bold" : ""
                    }
                    to="/favorites"
                  >
                    <MdBookmarkAdd size={20} />
                  </NavLink>
                </li>
              </ul>
            </div>
            <a href="/" className="cursor-pointer font-bold text-xl">
              Flagship
            </a>
          </div>
          <div className="navbar-center hidden lg:flex"></div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 hidden lg:flex">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                  to="/cart"
                >
                  <MdShoppingCart size={20} />
                  <p>{cart.length}</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : ""
                  }
                  to="/favorites"
                >
                  <MdBookmarkAdd size={20} />
                  
                </NavLink>
              </li>
            </ul>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
