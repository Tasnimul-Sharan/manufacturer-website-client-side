import "./App.css";
import Header from "./Pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Manufactures from "./Pages/Manufacture/Manufactures";
import ManufacturePurchases from "./Pages/ManufacturePurchases/ManufacturePurchases";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/DashBoard/Dashboard";
import MyProfile from "./Pages/DashBoard/MyProfile";
import MyOrders from "./Pages/DashBoard/MyOrders";
import AddReview from "./Pages/DashBoard/AddReview";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Users from "./Pages/DashBoard/Users";
import NotFound from "./Pages/Shared/NotFound";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/DashBoard/AddProduct";
import ManageProduct from "./Pages/DashBoard/ManageProduct";
import Payment from "./Pages/DashBoard/Payment";
import ManageAllProducts from "./Pages/DashBoard/ManageAllProducts";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/manufacture/:maufactureId"
          element={<Manufactures />}
        ></Route>
        <Route
          path="/purchases/:maufactureId"
          element={
            <RequireAuth>
              <ManufacturePurchases />
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />}></Route>
          <Route path="order" element={<MyOrders />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproducts"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageallproduct"
            element={
              <RequireAdmin>
                <ManageAllProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route path="myprofile/:id" element={<MyProfile />}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
