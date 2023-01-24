import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
function Header() {
  const [{ basket, user }] = useStateValue();
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      // const userbirth = logindata.map((el, k) => {
      //   return el.date === todayDate;
      // });

      // if (userbirth) {
      //   setTimeout(() => {
      //     console.log("ok");
      //     handleShow();
      //   }, 3000);
      // }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);
  // const handleAuthenticaton = () => {
  //   if (user) {
  //     firebase.auth().signOut();
  //   }
  // };
  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <div className="header">
          <Link to="/home">
            <img src="./amazon-logo-main.png" className="header-logo" />
          </Link>

          <div className="header-search">
            <input className="header-searchInput" type="text" />
            <SearchIcon className="header-search-icon" />
          </div>

          <div className="header-nav">
            <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
              <div onClick={userlogout} className=" header-option-main">
                <span className="header-option-one">
                  {/* Hello {!user ? "Guest" : user.email} */}
                  Hello {logindata[0].name}
                </span>
                <span className="header-option-two">
                  {/* {user ? "Sign Out" : "Sign In"} */}
                  Sign Out
                </span>
              </div>
            </Link>
            <div className="header-option">
              <span className="header-option-one">Returns</span>
              <span className="header-option-two">& Orders</span>
            </div>

            <div className="header-option">
              <span className="header-option-one">Your</span>
              <span className="header-option-two">Prime</span>
            </div>
          </div>

          <Link to="/checkout" className="link">
            <div className="header-option-basket">
              <ShoppingCartOutlinedIcon className="header-basket-icon" />
              <span className="header-option-two header-basket-count">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;
