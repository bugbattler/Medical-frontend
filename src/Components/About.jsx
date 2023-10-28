import React from "react";
import "./about.css";
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
import about from "../images/about.jpg";
import logoicon from "../images/logoicon.png";
import icon_training from "../images/icon_training.png";
import icon_increase from "../images/icon_increase.png";
import icon_coding from "../images/icon_coding.png";
import shape_12 from "../images/shape_12.png";
import shape_013 from "../images/shape_013.svg";
import author_01 from "../images/author_01.jpg";
import author_02 from "../images/author_02.jpg";
import author_03 from "../images/author_03.jpg";
import author_04 from "../images/author_04.jpg";
import author_05 from "../images/author_05.jpg";
import author_06 from "../images/author_06.jpg";
import author_07 from "../images/author_07.jpg";
import author_08 from "../images/author_08.jpg";
import author_09 from "../images/author_09.jpg";
import author_10 from "../images/author_10.jpg";
import star from "../images/star.png";
import { Link } from "react-router-dom";

const About = () => {
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
                  About
                </li>
              </ul>
              <h2 class="title">
                About<span> Medical Classes</span>
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
              <div className="col-lg-4 d-none d-sm-block">
                <img class="shape-author" src={author_11} alt="Shape" />
              </div>
              <div className="col-lg-4 d-none d-sm-block">
                <img class="shape-0 " src={shape_24} alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content-down">
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
                      Online Medical Coding Classes: We understand the
                      importance of flexibility. That's why we offer online
                      medical coding classes, allowing you to study at your own
                      pace and convenience. It's the modern way to access our
                      medical coding classes.
                    </p>
                    {/* <a href="#" class="btn btn-primary btn-hover-dark">Start A Course</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-padding-02 mt-n6">
            <div class="container">
              <div class="about-items-wrapper">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_training} />
                        </div>
                        <div class="item-title">
                          <h3 class="title">Medical Coding Classes</h3>
                        </div>
                      </div>
                      <p className="" style={{ fontSize: 16 }}>
                        Our beginner medical coding classes are tailored to
                        those new to the field. They provide a solid foundation
                        to start your journey into the world of medical coding
                        classes.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_coding} alt="About" />
                        </div>
                        <div class="item-title">
                          <h3 class="title">
                            {" "}
                            Advanced Medical Coding Classes
                          </h3>
                        </div>
                      </div>
                      <p style={{ fontSize: 16 }}>
                        If you already have some experience, our advanced
                        medical coding classes will help you take your skills to
                        the next level.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="about-item">
                      <div class="item-icon-title">
                        <div class="item-icon">
                          <img src={icon_increase} alt="About" />
                        </div>
                        <div class="item-title">
                          <h3 class="title">Certification Programs</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: 16 }}>
                        Our certification programs are designed to help you
                        stand out in the competitive job market in the realm of
                        medical coding classes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-padding-02 ">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="about-content">
                    <h5 class="sub-title">Welcome to Medical Classes.</h5>
                    <h2 class="main-title">
                      Your Gateway to a Promising Career in Medical Coding
                      Classes
                    </h2>
                    <p className="mt-3">
                      Are you looking for a reputable institution to kickstart
                      your journey into the world of healthcare? Look no
                      further! The Institute of Medical Coding offers
                      exceptional opportunities for those interested in a career
                      in the field of medical coding classes.
                    </p>
                    {/* <a href="#" class="btn btn-primary btn-hover-dark">Start A Course</a> */}
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="about-images">
                    <div class="images">
                      <img src={about} alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section section-padding-02">
            <div class="container">
              <div class="call-to-action-wrapper">
                <img
                  class="cat-shape-01 animation-round"
                  src={shape_12}
                  alt="Shape"
                />
                <img class="cat-shape-02" src={shape_013} alt="Shape" />
                <img
                  class="cat-shape-03 animation-round"
                  src={shape_12}
                  alt="Shape"
                />

                <div class="row align-items-center ">
                  <div class="col-md-6">
                    <div class="section-title shape-02">
                      <h5 class="sub-title">Become A Instructor</h5>
                      <h2 class="main-title">
                        You can join with Medical Classes as{" "}
                        <span>a instructor?</span>
                      </h2>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="call-to-action-btn">
                      <Link
                        class="btn btn-primary btn-hover-dark"
                        to="/Contact"
                      >
                        Drop Information
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section section-padding mt-n1">
            <div class="container">
              <div class="section-title shape-03 text-center">
                <h5 class="sub-title">Team Member’s</h5>
                <h2 class="main-title">
                  Medical Classes Skilled <span> Instructor</span>
                </h2>
              </div>

              <div class="team-wrapper">
                <div class="row row-cols-lg-5 row-cols-sm-3 row-cols-2 ">
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_01} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Margarita James</h4>
                        <span class="designation">MSC, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_02} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Mitchell Colon</h4>
                        <span class="designation">BBA, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_03} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Sonya Gordon</h4>
                        <span class="designation">MBA, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_04} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Archie Neal</h4>
                        <span class="designation">BBS, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_05} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Randal Ramsey</h4>
                        <span class="designation">MBBS, Instructor</span>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_06} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Rochelle Thomas</h4>
                        <span class="designation">MSC, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_07} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Della Salazar</h4>
                        <span class="designation">BBA, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_08} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Ricardo Patrick</h4>
                        <span class="designation">MBA, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_09} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Kurt Stewart</h4>
                        <span class="designation">BBS, Instructor</span>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="single-team">
                      <div class="team-thumb">
                        <img src={author_10} alt="Author" />
                      </div>
                      <div class="team-content">
                        <div class="rating">
                          <span class="count">4.9</span>
                          <img className="star" src={star} />
                          <span class="text">(rating)</span>
                        </div>
                        <h4 class="name">Rodney Terry</h4>
                        <span class="designation">MBBS, Instructor</span>
                      </div>
                    </div>
                  </div> */}
                </div>
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

                <img
                  class="shape-1 animation-right"
                  src={shape_14}
                  alt="Shape"
                />

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
        </div>
      </div>
    </>
  );
};

export default About;
