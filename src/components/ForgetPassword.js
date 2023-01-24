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
const ForgetPassword = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
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

    const { email } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("data added succesfully");
          history("/login");
          localStorage.setItem(
            "useryoutube",
            JSON.stringify([...data, inpval])
          );
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
              <h3 className="col-m-2">Password assistance</h3>
              <p>
                Enter the email address associated with your Amazon account.
              </p>
              <Form>
                <Form.Group
                  className="mb-3 col-lg-12"
                  controlId="formBasicEmail"
                >
                  <Form.Label>
                    <b>Enter your Email Id</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Email ID"
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
                  {/* <NavLink
                    to="/login"
                    style={{ color: "black", textDecoration: "none" }}
                  > */}
                  Continue
                  {/* </NavLink> */}
                </Button>
              </Form>
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

export default ForgetPassword;
