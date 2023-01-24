import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AmazonImg from "./Amazon_img";
const SignUp = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    // phone: "",
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

    const { name, email, password } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "bottom-right",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "bottom-right",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "bottom-right",
      });
      // } else if (phone === "") {
      //   toast.error("phone number is requred", {
      //     position: "bottom-right",
      //   });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "bottom-right",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "bottom-right",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
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
              <h3 className="col-m-2">Create Account</h3>
              <Form>
                <Form.Group
                  className="mb-3 col-lg-12"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={getdata}
                    placeholder="First and last name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-12"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Email"
                  />
                </Form.Group>
                {/* <Form.Group className="mb-4 col-lg-10" controlId="formBasicEmail">
                <Form.Control
                type="number"
                name="name"
                onChange={getdata}
                placeholder="Mobile Number"
                />
            </Form.Group> */}
                {/* <Form.Group
                  className="mb-3 col-lg-12"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control
                    onChange={getdata}
                    name="phone"
                    type="phone"
                    placeholder="Mobile Number"
                  />
                </Form.Group> */}

                <Form.Group
                  className="mb-3 col-lg-12"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="At least 6 characters"
                  />
                </Form.Group>
                <p style={{ fontSize: "10px" }}>
                  By enrolling your mobile phone number, you consent to receive
                  automated security notifications via text message from Amazon.
                  Message and data rates may apply.
                </p>
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
              </Form>
              <p className="mt-3">
                Already Have an Account?{" "}
                <span>
                  <NavLink to="/login">SignIn</NavLink>
                </span>{" "}
              </p>
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

export default SignUp;
