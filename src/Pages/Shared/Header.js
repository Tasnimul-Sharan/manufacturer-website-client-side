import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link to="/manufacture/:maufactureId">Manufacture parts</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/myportfolio">My portfolio</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {user ? (
        <button onClick={logOut} className="btn btn-active btn-ghost">
          Log Out
        </button>
      ) : (
        // <span>{user.displayName}</span>
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      <li>{user && <p>{user.displayName}</p>}</li>
    </>
  );

  return (
    <div class="navbar bg-slate-800 text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabindex="1"
          for="dashboard-sidebar"
          class="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
