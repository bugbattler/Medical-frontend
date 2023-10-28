import React, { useEffect, useState } from "react";
import "./courses.css";
import "./home.css";
import medical_05 from "../images/medical_05.jpg";
import medical_03 from "../images/medical_03.jpg";
import medical_06 from "../images/medical_06.jpg";
import shape_7 from "../images/shape_7.png";
import shape_9 from "../images/shape_9.png";
import shape_10 from "../images/shape_10.png";
import star from "../images/star.png";
import slider_1 from "../images/slider_1.png";
import shape_14 from "../images/shape_14.png";
import shape_5 from "../images/shape_5.png";
import shape_6 from "../images/shape_6.png";
import shape_8 from "../images/shape_8.png";
import google_play from "../images/google_play.png";
import app_store from "../images/app_store.png";
import author_11 from "../images/author_11.jpg";
import shape_23 from "../images/shape_23.png";
import shape_24 from "../images/shape_24.png";
import reward from "../images/reward.png";
import author_01 from "../images/author_01.jpg";
import author_02 from "../images/author_02.jpg";
import author_03 from "../images/author_03.jpg";
import author_04 from "../images/author_04.jpg";
import author_05 from "../images/author_05.jpg";
import author_06 from "../images/author_06.jpg";
import courses_01 from "../images/courses_01.jpg";
import courses_02 from "../images/courses_02.jpg";
import courses_03 from "../images/courses_03.jpg";
import courses_04 from "../images/courses_04.jpg";
import courses_05 from "../images/courses_05.jpg";
import courses_06 from "../images/courses_06.jpg";
import search_icon from "../images/search_icon.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Courses = () => {
  const [course_data, setCourseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://medical-cdt6.onrender.com/api/Course/getAll")
      .then((response) => setCourseData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="">
        <div className="row course-main-page ">
          <div className="col-lg-6 my-course">
            <div class="page-banner-content">
              <ul class="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="active" style={{ fontWeight: 600 }}>
                  Courses
                </li>
              </ul>
              <h2 class="title">
                Courses of <span>Medical Classes</span>
              </h2>
              <img class="shape_23" src={shape_23} alt="Shape" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4">
                <div class="shape-icon-box">
                  {/* <img class="icon-shape-1  animation-right" src={shape_5} alt="Shape" /> */}

                  <div class="box-content d-none d-sm-block">
                    <div class="box-wrapper">
                      <img className="reward-icon" src={reward} />
                    </div>
                    <img class="icon-shape-2" src={shape_6} alt="Shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <img
                  class="shape-author d-none d-sm-block"
                  src={author_11}
                  alt="Shape"
                />
              </div>
              <div className="col-lg-4 ">
                <img
                  class="shape-0 d-none d-sm-block"
                  src={shape_24}
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-padding-02 p-0">
        <div class="container">
          <div class="courses-top">
            <div class="section-title shape-01">
              <h2 class="main-title " style={{ marginTop: 80 }}>
                All Courses of <span>Medical Classes </span>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="row px-5 mt-5">
                <h6 className="text pt-4 ">
                  What Sets Us Apart in the World of Medical Coding Classes?
                </h6>
              </div>

              <div className="row container">
                <h6 className="text-two-3 ">
                  {" "}
                  Expert Instructors: At the Institute of Medical Coding, our
                  expert instructors are well-versed in the latest coding
                  systems and industry best practices, and they are dedicated to
                  providing you with the best education in medical coding
                  classes.
                </h6>
              </div>

              <div className="row container">
                <h6 className="text-two-3">
                  Comprehensive Curriculum: Our institution offers a
                  comprehensive curriculum covering ICD-10, CPT coding,
                  compliance, and more in our medical coding classes. We provide
                  all the necessary tools for your success in your journey of
                  medical coding classes.
                </h6>
              </div>

              <div className="row container">
                <h6 className="text-two-3">
                  Job Opportunities: With the healthcare industry continually
                  growing, there's a constant demand for skilled medical coders
                  who have completed reputable medical coding classes. Our
                  medical coding classes prepare you to enter this high-demand
                  job market.
                </h6>
              </div>
            </div>
          </div>

          <div class="tab-content courses-tab-content pb-5">
            <div class="tab-pane fade show active" id="tabs1">
              <div class="courses-wrapper">
                <div class="row">
                  {
                    course_data.map((item)=>{
                      return(<>
                      
                  <div class="col-lg-4 col-md-6">
                    <div class="single-courses">
                      <div class="courses-images">
                        <a href="courses-details.html">
                          <img src={medical_05} alt="Courses" />
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
                            {item.course_name}
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
                      </>)
                    })
                  }
                  {/* <div class="col-lg-4 col-md-6">
                    <div class="single-courses">
                      <div class="courses-images">
                        <a href="courses-details.html">
                          <img src={medical_03} alt="Courses" />
                        </a>
                      </div>
                      <div class="courses-content">
                        <div class="courses-author">
                          <div class="author">
                            <div class="author-thumb">
                              <a href="#">
                                <img src={author_02} alt="Author" />
                              </a>
                            </div>
                            <div class="author-name">
                              <a class="name" href="#">
                                Pamela Foster
                              </a>
                            </div>
                          </div>
                          <div class="tag">
                            <a href="#">Basic</a>
                          </div>
                        </div>

                        <h4 class="title">
                          <a href="courses-details.html">
                            Online Medical Coding Classes
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
                          <img src={medical_06} alt="Courses" />
                        </a>
                      </div>
                      <div class="courses-content">
                        <div class="courses-author">
                          <div class="author">
                            <div class="author-thumb">
                              <a href="#">
                                <img src={author_03} alt="Author" />
                              </a>
                            </div>
                            <div class="author-name">
                              <a class="name" href="#">
                                Rose Simmons
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
            </div>
            {/* <div class="tab-pane fade" id="tabs2">
              <div class="courses-wrapper">
                <div class="row">
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
            </div>
            <div class="tab-pane fade" id="tabs3">
              <div class="courses-wrapper">
                <div class="row">
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
            </div>
            <div class="tab-pane fade" id="tabs4">
              <div class="courses-wrapper">
                <div class="row">
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
            </div>
            <div class="tab-pane fade" id="tabs5">
              <div class="courses-wrapper">
                <div class="row">
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
            </div>
            <div class="tab-pane fade" id="tabs6">
              <div class="courses-wrapper">
                <div class="row">
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
            </div>
            <div class="tab-pane fade" id="tabs7">
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
        </div>
      </div>

      <div class="section section-padding download-section">
        <div class="app-shape-1"></div>
        <div class="app-shape-2"></div>
        <div class="app-shape-3"></div>
        <div class="app-shape-4"></div>

        <div class="container">
          <div class="download-app-wrapper mt-n6">
            <div class="section-title section-title-white">
              <h5 class="sub-title">Ready to start?</h5>
              <h2 class="main-title">
                Download our mobile app. for easy to start your course.
              </h2>
            </div>
            <img class="shape-1 animation-right" src={shape_14} alt="Shape" />

            <div class="download-app-btn">
              <ul class="app-btn">
                <li>
                  <a href="#">
                    <img src={google_play} alt="Google Play" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={app_store} alt="App Store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
