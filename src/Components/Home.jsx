import React, { useEffect, useState } from "react";
import "./home.css";
import slider_1 from "../images/slider_1.png";
import medical_01 from "../images/medical_01.jpeg";
import medical_04 from "../images/medical_04.avif";
import medical_02 from "../images/medical_02.jpg";
import courses_01 from "../images/courses_01.jpg";
import author_01 from "../images/author_01.jpg";
import author_06 from "../images/author_06.jpg";
import shape_6 from "../images/shape_6.png";
import shape_14 from "../images/shape_14.png";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import star from "../images/star.png";
import author_07 from "../images/author_07.jpg";
import quote from "../images/quote.png";
import axios from "axios";
import about from "../images/about.jpg";
import logoicon from "../images/logoicon.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [course_data, setCourseData] = useState([]);
  const [showModal, setshowModal] = useState(false);

  const [formValue, setFormValue] = useState();
  const [errors, setErrors] = useState(false);

  console.log(54, course_data);
  const handleInput = (e) => {
    const newObj = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newObj);
  };

  const Validation = (values) => {
    const errors = {};
    const regex =
      "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$";
    if (!values.name) {
      errors.name = "Name field is required ";
      setErrors(true);
    } else if (!formValue.name.replace == "") {
      errors.name = " Empty field are not allowed";
    }
    if (!values.email) {
      errors.email = "Email feild is required";
      setErrors(true);
    } else if (!formValue.email == "") {
      errors.name = " Empty field are not allowed";
    }
    if (!values.phoneNo) {
      errors.phoneNo = "Phone number is required ";
      setErrors(true);
    } else if (values.phoneNo.length < 11) {
      errors.phoneNo = "Phone number must be 10 digit  ";
      setErrors(true);
    } else if (!formValue.phoneNo == "") {
      errors.name = "Empty field are not allowed";
    }

    return errors;
  };
  useEffect(() => {
    axios
      .get("https://medical-cdt6.onrender.com/api/Course/getAll")
      .then((response) => setCourseData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="row ">
        <div className="col-lg-6 slider-content ">
          <div class="slider-sec ">
            <h4 class="sub-title">Start your favourite course</h4>
            <h2 class="main-title">
              Welcome to the Institute of
              <span> Medical Coding.</span>
            </h2>

            <p className=" mt-5 p-2" style={{ fontSize: 17 }}>
              our gateway to a promising career in the world of healthcare. If
              you are seeking a reputable institution to embark on your journey
              in this field, look no further! At the Institute of Medical Coding
              (IMC), we provide unparalleled opportunities for individuals
              interested in pursuing a career in medical coding.
            </p>
            <Link
              class="btn btn-primary btn-hover-dark"
              to="/medical-codding-classes"
            >
              Know More
            </Link>
          </div>
        </div>

        <div className="col-lg-6">
          <div className=" slider-course-sec">
            <div class="slider-courses-box d-none d-sm-block">
              <div class="box-content">
                <div class="box-wrapper">
                  <i class="flaticon-open-book"></i>
                  <span class="count">1,235</span>
                  <p>Courses</p>
                </div>
              </div>
              <img class="shape-2" src={shape_6} alt="Shape" />
            </div>
            <img
              className="slider_pic_1 d-none d-sm-block"
              src={slider_1}
              alt="Slider"
            />
          </div>

          <div class="slider-rating-box">
            <div class="box-rating d-none d-sm-block">
              <div class="box-wrapper pt-5">
                <span class="count">
                  4.8
                  <img className="star_1" src={star} />
                </span>
                <p>Rating (86K)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-padding-02 ">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="about-images">
                  <div class="images">
                    <img src={about} alt="About" />
                  </div>

                  <div class="about-years">
                    <div class="years-icon">
                      <img src={logoicon} alt="About" />
                    </div>
                    <p>
                      <strong>28+</strong> Years Experience
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-content">
                  <h5 class="sub-title">Welcome to Medical Classes.</h5>
                  <h2 class="main-title">
                    You can join with the institute of medical classes and
                    upgrade your skill for your <span>bright future.</span>
                  </h2>
                  <p className="mt-3">
                    Online Medical Coding Classes: We understand the importance
                    of flexibility. That's why we offer online medical coding
                    classes, allowing you to study at your own pace and
                    convenience. It's the modern way to access our medical
                    coding classes.
                  </p>
                  {/* <a href="#" class="btn btn-primary btn-hover-dark">Start A Course</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding-02">
        <div class="container">
          <div class="courses-top">
            <div class="section-title shape-01">
              <h2 class="main-title">
                Courses of <span>Medical Classes</span>{" "}
              </h2>
            </div>
          </div>
          <div className="row container">
            <div className="col-lg-12">
              <h6 className="texttt">
                Are you looking for a reputable institution to kickstart your
                journey into the world of healthcare? Look no further! The
                Institute of Medical Coding offers exceptional opportunities for
                those interested in a career in the field of medical coding
                classes.
              </h6>
            </div>
          </div>

          <div class="courses-tabs-menu courses-active">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner ">
                <div class="carousel-item active" data-bs-interval="10000">
                  <ul class="nav nav-justified">
                    <li class="nav-item mx-2">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#tab2"
                      >
                        Online Medical Class
                      </button>
                    </li>
                    <li class="nav-item mx-2">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#tab3"
                      >
                        Medical Codding Class
                      </button>
                    </li>
                    {/* <li class="nav-item mx-2">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        Course name 3
                      </button>
                    </li> */}
                  </ul>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <ul class="nav nav-justified">
                    <li class="nav-item mx-2">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        Medical Codding Class
                      </button>
                    </li>
                    <li class="nav-item mx-2">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        Online Medical Class
                      </button>
                    </li>
                    {/* <li class="nav-item mx-2">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#tab1"
                      >
                        Course name 6
                      </button>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev swiper-button-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next swiper-button-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="tab-content courses-tab-content">
            <div class="tab-pane fade show active" id="tabs1">
              <div class="courses-wrapper">
                <div class="row justify-content-center">
                  {course_data.map((item) => {
                    return (
                      <>
                        <div class="col-lg-4 col-md-6">
                          <div class="single-courses">
                            <div class="courses-images">
                              <a href="courses-details.html">
                                <img src={medical_02} alt="Courses" />
                              </a>
                            </div>
                            <div class="courses-content">
                              <div class="courses-author">
                                <div class="author">
                                  {/* <div class="author-thumb">
                                    <a href="#">
                                      <img src={author_01} alt="Author" />
                                    </a>
                                  </div>
                                  <div class="author-name">
                                    <a class="name" href="#">
                                      Jason Williams
                                    </a>
                                  </div> */}
                                </div>
                                <div class="tag">
                                  <a href="#">Advanced</a>
                                </div>
                              </div>

                              <h4 class="title">
                                <a href="courses-details.html">
                                  {item.course_name}
                                </a>
                              </h4>
                              <div class="courses-meta">
                                <span>
                                  {" "}
                                  <i class="icofont-clock-time"></i> 08 hr 15
                                  mins
                                </span>
                                <span>
                                  {" "}
                                  <i class="icofont-read-book"></i> 29 Lectures{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  {/* <div class="col-lg-4 col-md-6">
                    <div class="single-courses">
                      <div class="courses-images">
                        <a href="courses-details.html">
                          <img src={medical_04} alt="Courses" />
                        </a>
                      </div>
                      <div class="courses-content">
                        <div class="courses-author">
                          <div class="author">
                            <div class="author-thumb">
                              <a href="#">
                                <img src={author_01} alt="Author" />
                              </a>
                            </div>
                            <div class="author-name">
                              <a class="name" href="#">
                                Jason Williams
                              </a>
                            </div>
                          </div>
                          <div class="tag">
                            <a href="#">Basic</a>
                          </div>
                        </div>

                        <h4 class="title">
                          <a href="courses-details.html">
                            Online Medical Coding classes.
                          </a>
                        </h4>
                        <div class="courses-meta">
                          <span>
                            {" "}
                            <i class="icofont-clock-time"></i> 08 hr 15 mins
                          </span>
                          <span>
                            {" "}
                            <i class="icofont-read-book"></i> 29 Lectures{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="single-courses">
                      <div class="courses-images">
                        <a href="courses-details.html">
                          <img src={medical_01} alt="Courses" />
                        </a>
                      </div>
                      <div class="courses-content">
                        <div class="courses-author">
                          <div class="author">
                            <div class="author-thumb">
                              <a href="#">
                                <img src={author_01} alt="Author" />
                              </a>
                            </div>
                            <div class="author-name">
                              <a class="name" href="#">
                                Jason Williams
                              </a>
                            </div>
                          </div>
                          <div class="tag">
                            <a href="#">Advanced</a>
                          </div>
                        </div>

                        <h4 class="title">
                          <a href="courses-details.html">
                            Medical Coding Classes
                          </a>
                        </h4>
                        <div class="courses-meta">
                          <span>
                            {" "}
                            <i class="icofont-clock-time"></i> 08 hr 15 mins
                          </span>
                          <span>
                            {" "}
                            <i class="icofont-read-book"></i> 29 Lectures{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/********************** If tabs are needed *************************/}

              {/* <div class="tab-pane fade" id="tabs7">
                <div class="courses-wrapper">
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="single-courses">
                        <div class="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/courses-04.jpg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div class="courses-content">
                          <div class="courses-author">
                            <div class="author">
                              <div class="author-thumb">
                                <a href="#">
                                  <img
                                    src="assets/images/author/author-01.jpg"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div class="author-name">
                                <a class="name" href="#">
                                  Jason Williams
                                </a>
                              </div>
                            </div>
                            <div class="tag">
                              <a href="#">Science</a>
                            </div>
                          </div>

                          <h4 class="title">
                            <a href="courses-details.html">
                              Data Science and Machine Learning with Python -
                              Hands On!
                            </a>
                          </h4>
                          <div class="courses-meta">
                            <span>
                              {" "}
                              <i class="icofont-clock-time"></i> 08 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i class="icofont-read-book"></i> 29 Lectures{" "}
                            </span>
                          </div>
                          <div class="courses-price-review">
                            <div class="courses-price">
                              <span class="sale-parice">$385.00</span>
                              <span class="old-parice">$440.00</span>
                            </div>
                            <div class="courses-review">
                              <span class="rating-count">4.9</span>
                              <span class="rating-star">
                                <span class="rating-bar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="single-courses">
                        <div class="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/courses-02.jpg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div class="courses-content">
                          <div class="courses-author">
                            <div class="author">
                              <div class="author-thumb">
                                <a href="#">
                                  <img
                                    src="assets/images/author/author-02.jpg"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div class="author-name">
                                <a class="name" href="#">
                                  Pamela Foster
                                </a>
                              </div>
                            </div>
                            <div class="tag">
                              <a href="#">Science</a>
                            </div>
                          </div>

                          <h4 class="title">
                            <a href="courses-details.html">
                              Create Amazing Color Schemes for Your UX Design
                              Projects
                            </a>
                          </h4>
                          <div class="courses-meta">
                            <span>
                              {" "}
                              <i class="icofont-clock-time"></i> 08 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i class="icofont-read-book"></i> 29 Lectures{" "}
                            </span>
                          </div>
                          <div class="courses-price-review">
                            <div class="courses-price">
                              <span class="sale-parice">$420.00</span>
                            </div>
                            <div class="courses-review">
                              <span class="rating-count">4.9</span>
                              <span class="rating-star">
                                <span class="rating-bar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="single-courses">
                        <div class="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/courses-06.jpg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div class="courses-content">
                          <div class="courses-author">
                            <div class="author">
                              <div class="author-thumb">
                                <a href="#">
                                  <img
                                    src="assets/images/author/author-03.jpg"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div class="author-name">
                                <a class="name" href="#">
                                  Rose Simmons
                                </a>
                              </div>
                            </div>
                            <div class="tag">
                              <a href="#">Science</a>
                            </div>
                          </div>

                          <h4 class="title">
                            <a href="courses-details.html">
                              Culture & Leadership: Strategies for a Successful
                              Business
                            </a>
                          </h4>
                          <div class="courses-meta">
                            <span>
                              {" "}
                              <i class="icofont-clock-time"></i> 08 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i class="icofont-read-book"></i> 29 Lectures{" "}
                            </span>
                          </div>
                          <div class="courses-price-review">
                            <div class="courses-price">
                              <span class="sale-parice">$295.00</span>
                              <span class="old-parice">$340.00</span>
                            </div>
                            <div class="courses-review">
                              <span class="rating-count">4.9</span>
                              <span class="rating-star">
                                <span class="rating-bar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="single-courses">
                        <div class="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/courses-05.jpg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div class="courses-content">
                          <div class="courses-author">
                            <div class="author">
                              <div class="author-thumb">
                                <a href="#">
                                  <img
                                    src="assets/images/author/author-04.jpg"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div class="author-name">
                                <a class="name" href="#">
                                  Jason Williams
                                </a>
                              </div>
                            </div>
                            <div class="tag">
                              <a href="#">Finance</a>
                            </div>
                          </div>

                          <h4 class="title">
                            <a href="courses-details.html">
                              Finance Series: Learn to Budget and Calculate your
                              Net Worth.
                            </a>
                          </h4>
                          <div class="courses-meta">
                            <span>
                              {" "}
                              <i class="icofont-clock-time"></i> 08 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i class="icofont-read-book"></i> 29 Lectures{" "}
                            </span>
                          </div>
                          <div class="courses-price-review">
                            <div class="courses-price">
                              <span class="sale-parice">Free</span>
                            </div>
                            <div class="courses-review">
                              <span class="rating-count">4.9</span>
                              <span class="rating-star">
                                <span class="rating-bar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="single-courses">
                        <div class="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/courses-01.jpg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div class="courses-content">
                          <div class="courses-author">
                            <div class="author">
                              <div class="author-thumb">
                                <a href="#">
                                  <img
                                    src="assets/images/author/author-05.jpg"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div class="author-name">
                                <a class="name" href="#">
                                  Jason Williams
                                </a>
                              </div>
                            </div>
                            <div class="tag">
                              <a href="#">Marketing</a>
                            </div>
                          </div>

                          <h4 class="title">
                            <a href="courses-details.html">
                              Build Brand Into Marketing: Tackling the New
                              Marketing Landscape
                            </a>
                          </h4>
                          <div class="courses-meta">
                            <span>
                              {" "}
                              <i class="icofont-clock-time"></i> 08 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i class="icofont-read-book"></i> 29 Lectures{" "}
                            </span>
                          </div>
                          <div class="courses-price-review">
                            <div class="courses-price">
                              <span class="sale-parice">$136.00</span>
                            </div>
                            <div class="courses-review">
                              <span class="rating-count">4.9</span>
                              <span class="rating-star">
                                <span class="rating-bar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="single-courses">
                        <div class="courses-images">
                          <a href="courses-details.html">
                            <img
                              src="assets/images/courses/courses-03.jpg"
                              alt="Courses"
                            />
                          </a>
                        </div>
                        <div class="courses-content">
                          <div class="courses-author">
                            <div class="author">
                              <div class="author-thumb">
                                <a href="#">
                                  <img
                                    src="assets/images/author/author-06.jpg"
                                    alt="Author"
                                  />
                                </a>
                              </div>
                              <div class="author-name">
                                <a class="name" href="#">
                                  Jason Williams
                                </a>
                              </div>
                            </div>
                            <div class="tag">
                              <a href="#">Design</a>
                            </div>
                          </div>

                          <h4 class="title">
                            <a href="courses-details.html">
                              Graphic Design: Illustrating Badges and Icons with
                              Geometric Shapes
                            </a>
                          </h4>
                          <div class="courses-meta">
                            <span>
                              {" "}
                              <i class="icofont-clock-time"></i> 08 hr 15 mins
                            </span>
                            <span>
                              {" "}
                              <i class="icofont-read-book"></i> 29 Lectures{" "}
                            </span>
                          </div>
                          <div class="courses-price-review">
                            <div class="courses-price">
                              <span class="sale-parice">$237.00</span>
                            </div>
                            <div class="courses-review">
                              <span class="rating-count">4.9</span>
                              <span class="rating-star">
                                <span class="rating-bar"></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div class="courses-btn text-center">
              <a href="/courses" class="btn btn-secondary btn-hover-primary">
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div class="section section-padding download-section">
            <div class="app-shape-1"></div>
            <div class="app-shape-2"></div>
            <div class="app-shape-3"></div>
            <div class="app-shape-4"></div>
            <div class="container">
              <div class="download-app-wrapper mt-n6">
                <div class="section-title section-title-white">
                  <h5 class="sub-titlee">Ready to start?</h5>
                  <h2 class="main-title">
                    Download our mobile app. for easy to start your course.
                  </h2>
                </div>
                <img
                  class="shape-1 animation-right"
                  src={shape_14}
                  alt="Shape"
                />
                <div class="download-app-btn">
                  <ul class="app-btn ">
                    <li>
                      <a href="">
                        <img src={google_play} alt="Google Play" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={app_store} alt="App Store" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section section-padding-02 mt-n1 p-5">
          <div class="container">
            <div class="section-title shape-03 text-center">
              <h5 class="sub-title">Student Testimonial</h5>
              <h2 class="main-title">
                Feedback From <span> Student</span>
              </h2>
            </div>

            <div class="testimonial-wrapper testimonial-active ">
              <div class="swiper-container">
                <div class="courses-wrapper">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div class="single-testimonial">
                        <div class="testimonial-author">
                          <div class="author-thumb">
                            <img className="" src={author_06} alt="Author" />
                            <i class="icofont-quote-left">
                              <img className="" src={quote}></img>
                            </i>
                          </div>

                          <span class="rating-star">
                            <ul className="rating_stars">
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                            </ul>
                          </span>
                        </div>
                        <div class="testimonial-content">
                          <p>
                            "Grateful for the incredible journey of becoming a
                            medical student, where every challenge is a step
                            closer to making a difference in the world of
                            healthcare.{" "}
                          </p>
                          <h4 class="name">Sara Alexander</h4>
                          {/* <span class="designation">Product Designer, USA</span> */}
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 ">
                      <div class="single-testimonial ">
                        <div class="testimonial-author">
                          <div class="author-thumb">
                            <img src={author_07} alt="Author" />

                            <i class="icofont-quote-left">
                              <img src={quote}></img>
                            </i>
                          </div>

                          <span class="rating-star">
                            <ul className="rating_stars">
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                              <li>
                                <i class="bi bi-star-fill"></i>
                              </li>
                            </ul>
                          </span>
                        </div>
                        <div class="testimonial-content">
                          <p>
                            "Exploring the intricacies of the human body, one
                            textbook at a time. 📚🩺 #MedicalStudentLife
                            #OnThePathToHealing"
                          </p>
                          <h4 class="name">Melissa Roberts</h4>
                          {/* <span class="designation">Product Designer, USA</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
