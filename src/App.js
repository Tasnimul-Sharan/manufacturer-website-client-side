import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Manufactures from "./Pages/Manufacture/Manufactures";
import ManufacturePurchases from "./Pages/ManufacturePurchases/ManufacturePurchases";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";

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
          element={<ManufacturePurchases />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
