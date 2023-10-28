import React, { useEffect, useState } from "react";
import "./header.css";
import facebooks from "../images/facebooks.png";
import twitter from "../images/twitter.png";
import skype from "../images/skype.png";
import instagram from "../images/instagram.png";
import medical_logo from "../images/medical_logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [data, setData] = useState({
    fname: "",
    email: "",
    phone: "",
  });
  const handleInput = (e) => {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  };
  const [showModal, setshowModal] = useState(false);
  const [hidebtn, sethidebtn] = useState(false);

  const [formValue, setFormValue] = useState(data);
  const [errors, setErrors] = useState(false);
  const handleEnquiryForm = (e) => {
    e.preventDefault();
    setErrors(Validation(formValue));
    console.log(data);
    console.log("ok");
    if (data.fname !== "" && data.email !== "" && data.phone !== "") {
      axios
        .post("https://medical-cdt6.onrender.com/api/Contact/create", data)
        .then((response) => {
          const contact = response.data;
          localStorage.setItem('Contact', JSON.stringify(contact));
          alert("Form Submitted");
          setshowModal(false);
        })
        .catch((error) => {
          console.error("", error);
        });
    }
  };
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeCollapse = () => {
    setIsCollapsed(true);
  };

  const Validation = (values) => {
    const errors = {};
    const regex =
      "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
    if (!values.fname) {
      errors.fname = "Name field is required ";
      setErrors(true);
    } else if (!formValue.fname.replace == "") {
      errors.fname = " Empty field are not allowed";
    }
    if (!values.email) {
      errors.email = "Email feild is required";
      setErrors(true);
    } else if (!formValue.email == "") {
      errors.name = " Empty field are not allowed";
    }
    if (!values.phoneNo) {
      errors.phone = "Phone number is required ";
      setErrors(true);
    } else if (values.phoneNo.length < 11) {
      errors.phone = "Phone number must be 10 digit  ";
      setErrors(true);
    } else if (!formValue.phoneNo == "") {
      errors.name = "Empty field are not allowed";
    }

    return errors;
  };

  const triggerModalButton = () => {
    const button = document.querySelector(".btn-primary");
    if (button) {
      console.log("ok");
      button.click(); // Simulate a click event on the button
    }
  };
  useEffect(() => {
    // Delay the button click by 6 seconds (6000 milliseconds)
    const delay = 6000;
    let timeoutId=""
    const storedUser = JSON.parse(localStorage.getItem('Contact'));
    console.log(94,storedUser);
    if (!storedUser) {
      
       timeoutId = setTimeout(triggerModalButton, delay);
    }else{
      console.log("Achived")
    }

    return () => {
      // Clear the timeout if the component unmounts before the timeout is reached
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      {/* {showModal && (
        <>
          <div className="popup " id="myModal" role="dialog">
            <div class="">
              <div class="modal-dialog modal-dialog-centered" id="myModel">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="container-fluid px-4">
                      <div class="formlayout">
                        <div class="form-heading">
                          <label
                            class="form-control form-control-lg text-center"
                            style={{ fontSize: 25 }}
                          >
                            Register
                          </label>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="modal-body ">
                    <form action="" class="form-container">
                      <div className="">
                        <label>
                          <b>
                            Full name<span className="text-danger">*</span>
                          </b>
                        </label>
                        <input
                          type="text"
                          placeholder="Full name"
                          name="name"
                          onChange={(e) => {
                            setData({ ...data, fname: e.target.value });
                            
                          }}
                        />

                        {errors.fname && data.fname.length <= 0 ? (
                          <p
                            className="text-danger"
                            style={{ fontSize: "14px" }}
                          >
                            {errors.fname}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="">
                        <label>
                          <b>
                            Email<span className="text-danger">*</span>
                          </b>
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                            handleInput(e);
                          }}
                        />
                        {errors.email && data.email.length <= 0 ? (
                          <p
                            className="text-danger"
                            style={{ fontSize: "14px" }}
                          >
                            {errors.email}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="">
                        <label>
                          <b>
                            Phone no.<span className="text-danger">*</span>
                          </b>
                        </label>
                        <input
                          type="text"
                          placeholder="Phone no."
                          name="phone"
                          onChange={(e) => {
                            setData({ ...data, phone: e.target.value });
                            handleInput(e);
                          }}
                        />
                        {errors.phone && data.phone.length <= 0 ? (
                          <p
                            className="text-danger"
                            style={{ fontSize: "14px" }}
                          >
                            {errors.phone}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <button
                        type="submit"
                        class="btn Loginbtn"
                        onClick={(e)=>{handleEnquiryForm(e); }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )} */}
      {/* <!-- Button trigger modal --> */}

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      ></button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Register
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="" class="form-container">
                <div className="">
                  <label>
                    <b>
                      Full name<span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    name="fname"
                    onChange={(e) => {
                      setData({ ...data, fname: e.target.value });
                      handleInput(e);
                    }}
                  />

                  {errors.fname && data.fname.length <= 0 ? (
                    <p className="text-danger" style={{ fontSize: "14px" }}>
                      {errors.fname}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="">
                  <label>
                    <b>
                      Email<span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                      handleInput(e);
                    }}
                  />
                  {errors.email && data.email.length <= 0 ? (
                    <p className="text-danger" style={{ fontSize: "14px" }}>
                      {errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="">
                  <label>
                    <b>
                      Phone no.<span className="text-danger">*</span>
                    </b>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone no."
                    name="phone"
                    onChange={(e) => {
                      setData({ ...data, phone: e.target.value });
                      handleInput(e);
                    }}
                  />
                  {errors.phone && data.phone.length <= 0 ? (
                    <p className="text-danger" style={{ fontSize: "14px" }}>
                      {errors.phone}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  type="submit"
                  class="btn Loginbtn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    handleEnquiryForm(e);
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> */}
          </div>
        </div>
      </div>

      <div class="header-top d-none d-lg-block headdderr">
        <div class="container">
          <div class="header-top-wrapper">
            {/* <div class="header-top-left">
                            <p>All course 28% off for <a href="#">Liberian people’s.</a></p>
                        </div> */}

            <div class="header-top-medal">
              <div class="top-info">
                <p>
                  <i class="bi bi-telephone-fill"></i>{" "}
                  <a href="tel:7722073406">Contact - (+91) 7722073406</a>
                </p>
                <p>
                  <i class="bi bi-envelope-open-fill"></i>{" "}
                  <a href="mailto:Medicalcoding@gmail.com">
                    Email Id - Medicalcoding@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div class="header-top-right">
              <ul class="social">
                <li>
                  <a href="#">
                    <img className="icons" src={facebooks} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="icons" src={twitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="icons" src={skype} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="icons" src={instagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid nav-nav">
                    <img className='logo m-0' src={medical_logo} alt="Logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link pe-auto" to="/" style={{ cursor: "pointer" }}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/courses" style={{ cursor: "pointer" }}>All Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/faq" style={{ cursor: "pointer" }}>Faq</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to='/about' style={{ cursor: "pointer" }}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to='/contact' style={{ cursor: "pointer" }}>Contact</Link>
                            </li>

                            <li class="nav-item">
                                <li class="nav-item dropdown service-text">
                                    <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: 700 }}>
                                        Services
                                    </a>
                                    <ul class="dropdown-menu sub-menu">
                                        <li><Link to="/medical-codding-classes">Medical Coding Classes</Link></li>
                                        <li><Link to="/online-medical-codding-classes">Online Medical Classes</Link></li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid nav-nav">
          <img className="logo m-0" src={medical_logo} alt="Logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav all-links mx-auto">
              <li class="nav-item">
                <Link
                  class="nav-link pe-auto"
                  to="/"
                  style={{ cursor: "pointer", color: "#343a40" }}
                  // aria-expanded="true"
                  // aria-label="Toggle navigation"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#navbarSupportedContent"
                  onClick={toggleCollapse}
                  area-expanded={!isCollapsed}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link "
                  to="/about"
                  style={{ cursor: "pointer", color: "#343a40" }}
                  // aria-expanded="true"
                  // aria-label="Toggle navigation"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#navbarSupportedContent"
                  onClick={toggleCollapse}
                  area-expanded={!isCollapsed}
                >
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link "
                  to="/faq"
                  style={{ cursor: "pointer", color: "#343a40" }}
                  // aria-expanded="true"
                  // aria-label="Toggle navigation"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#navbarSupportedContent"
                  onClick={toggleCollapse}
                  area-expanded={!isCollapsed}
                >
                  FAQ's
                </Link>
              </li>

              <li class="service-text dropdown ">
                <a
                  class=""
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: 19, color: "#343a40" }}
                >
                  Courses
                </a>
                <ul class="dropdown-menu sub-menu">
                  <li>
                    <Link
                      to="/medical-codding-classes"
                      // data-bs-target="#navbarSupportedContent"
                      // aria-expanded="true"
                      // aria-label="Toggle navigation"
                      // data-bs-toggle="collapse"
                      onClick={toggleCollapse}
                      area-expanded={!isCollapsed}
                    >
                      Medical Coding Classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/online-medical-codding-classes"
                      // data-bs-target="#navbarSupportedContent"
                      // aria-expanded="true"
                      // aria-label="Toggle navigation"
                      // data-bs-toggle="collapse"
                      onClick={toggleCollapse}
                      area-expanded={!isCollapsed}
                    >
                      Online Medical Classes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses"
                      // data-bs-target="#navbarSupportedContent"
                      // aria-expanded="true"
                      // aria-label="Toggle navigation"
                      // data-bs-toggle="collapse"
                      onClick={toggleCollapse}
                      area-expanded={!isCollapsed}
                    >
                      All Courses
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link "
                  to="/contact"
                  style={{ cursor: "pointer", color: "#343a40" }}
                  // data-bs-target="#navbarSupportedContent"
                  // aria-expanded="true"
                  // aria-label="Toggle navigation"
                  // data-bs-toggle="collapse"
                  onClick={toggleCollapse}
                  area-expanded={!isCollapsed}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
