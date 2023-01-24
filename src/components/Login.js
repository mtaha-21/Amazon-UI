import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AmazonImg from "./Amazon_img";
import SignUp from "./SignUp";
const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/home");
        }
      }
    }
  };

  return (
    <>
      <div
        style={{
          border: "solid 1px",
          height: "100vh",
          width: "100vw",
          background: "#EEEEEE",
        }}
      >
        <AmazonImg />
        <div className="container mt-3">
          {/* <section className="d-flex justify-content-between"> */}
          <section
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div
              className="left_data mt-3 p-4"
              style={{
                width: "30%",
                border: "1px solid",
                borderRadius: "4px",
                background: "white",
              }}
            >
              <h3 className="col-m-2">Sign in</h3>
              <Form>
                <Form.Group
                  className="mb-3 col-lg-12"
                  controlId="formBasicEmail"
                >
                  <Form.Label>
                    <b>Enter your Email and Password</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Email ID"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-12"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="col-lg-12"
                  onClick={addData}
                  style={{
                    background: "#f0c14b",
                    color: "black",
                    borderColor: "#a88734 #9c7e31 #846a29",
                  }}
                  type="submit"
                >
                  Continue
                </Button>
                <p style={{ fontSize: "12px" }}>
                  By continuing, you agree to Amazon's Conditions of Use and
                  Privacy Notice.
                </p>
              </Form>
              <NavLink
                to="/resetPassword"
                // style={{ color: "black", textDecoration: "none" }}
              >
                forget password?
              </NavLink>
              <hr />
              <p
                className="mt-3"
                style={{ textAlign: "center", fontSize: "12px" }}
              >
                New to Amazon?
              </p>

              <Button
                variant="primary"
                className="col-lg-12"
                // onClick={<SignUp />}
                style={{
                  background: "#e7e9ec",
                  color: "black",
                  borderColor: "#adb1b8 #a2a6ac #8d9096",
                  borderRadius: "3px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                }}
                type="submit"
              >
                <NavLink
                  to="/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Create your Amazon account
                </NavLink>
              </Button>
              {/* <div
                style={{
                  content: "",
                  width: "20%",
                  borderColor: "transparent",
                  display: "block",
                  height: "1px",
                  borderTop: "1px solid black",
                  position: "absolute",
                  top: "50%",
                  marginBottom: "-1px",
                  zIndex: "1",
                }}
              ></div> */}
            </div>
            <div>
              <SIgn_img />
            </div>
          </section>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
