import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "../src/components/firebase";
import { useStateValue } from "./StateProvider";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ForgetPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/home" element={<Home />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
