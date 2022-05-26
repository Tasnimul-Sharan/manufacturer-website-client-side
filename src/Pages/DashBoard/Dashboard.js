import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl font-bold text-blue-700">
          Welcome to the Dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-slate-800 text-white text-base-content">
          <li>
            <Link to="/dashboard">My profile</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/order">My Orders</Link>
              <Link to="/dashboard/review">Add a review</Link>
            </li>
          )}

          {admin && (
            <li>
              <Link to="/dashboard/users">Make Admin</Link>
              <Link to="/dashboard/addproduct">Add Product</Link>
              <Link to="/dashboard/manageproducts">Manage Products</Link>
              {/* <Link to="/dashboard/myprofile">My Profile</Link> */}
              <Link to="/dashboard/manageallproduct">Manage All Product</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
