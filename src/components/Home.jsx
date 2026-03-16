import React from "react";
import img1 from "../asset/media/images/hero-slider-img-1.png";
import img2 from "../asset/media/images/Img.png";
import img3 from "../asset/media/images/Hosting_img.png";
import img4 from "../asset/media/images/connect-with-us-img.png";
import img5 from "../asset/media/svg/connect-icon.svg";
import img6 from "../asset/media/svg/connect-icon.svg";
import img7 from "../asset/media/images/slider-profile-image.png";
import img8 from "../asset/media/images/SVG.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ContactUsOne from "./ContactUsOne";

export default function Home() {
  const aboutData = [
    {
      id: 1,
      title: "business name",
      subtitle:
        " Offering both design and construct services under one contract, stream the process and potentially.",
      link: "/",
    },
    {
      id: 2,
      title: "business name",
      subtitle:
        " Offering both design and construct services under one contract, stream the process and potentially.",
      link: "/",
    },
    {
      id: 3,
      title: "business name",
      subtitle:
        " Offering both design and construct services under one contract, stream the process and potentially.",
      link: "/",
    },
    {
      id: 4,
      title: "business name",
      subtitle:
        " Offering both design and construct services under one contract, stream the process and potentially.",
      link: "/",
    },
    {
      id: 5,
      title: "business name",
      subtitle:
        " Offering both design and construct services under one contract, stream the process and potentially.",
      link: "/",
    },
    {
      id: 6,
      title: "business name",
      subtitle:
        " Offering both design and construct services under one contract, stream the process and potentially.",
      link: "/",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    // arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  var settings1 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 9000,
    pauseOnHover: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
  };
  return (
    <>
      {/* -------------------first page------------- */}
      <section id="hero-section">
        <div id="hero-section-slider" className="hero-section-slider">
          <Slider {...settings1}>
            {/* one slide  */}
            <div className="slider-slide">
              <div className="slider-wrapper">
                <div className="image-wrapper">
                  <img src={img1} className="img-fluid w-100" alt="" />
                </div>
                <div className="slider-content-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8 col-md-10 col-sm-11 col-11">
                        <div className="title">
                          <h1>Global</h1>

                          <h2 className="outline">Business</h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to.
                          </p>
                          <a className="hero-btn" href="#">
                            Let's Start
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* two slide */}
            <div className="slider-slide">
              <div className="slider-wrapper">
                <div className="image-wrapper">
                  <img src={img1} className="img-fluid w-100" alt="" />
                </div>
                <div className="slider-content-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-8 col-md-10 col-sm-11 col-11">
                        <div className="title">
                          <h1>Global</h1>

                          <h2 className="outline">Business</h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to.
                          </p>
                          <a className="hero-btn" href="#">
                            Let's Start
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* -------------------second page------------- */}

      <section>
        <div className="container">
          <div className="business-wrapper">
            <div className="row gy-4 align-items-center">
              <div className="col-md-6">
                <div className="section-title">
                  <h5 className="">Welcome to global business inc.</h5>
                  <div className="row justify-content-between align-items-center">
                    <div className="">
                      <h2 className="">
                        Lorem ipsum dolor sit amet, adipisicing
                      </h2>
                    </div>
                    <div>
                      <img src={img2} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img src={img3} alt="" className="img-fluid w-100" />
                </div>
                <div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s. There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form by injected
                    humour.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by injected humour.There are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form by injected humour.
                  </p>
                  <div className="mt-40px">
                    <a href="" className="btn-theme">
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------third  page------------- */}
      <section
        id="business-listing-section"
        className="home-pg-sbusiness-listing-section"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="section-title">
              <h5 className="">business listing</h5>
              <div className="row gy-3 justify-content-between align-items-center">
                <div className="col-md-8 col-xl-6">
                  <h2 className="mb-0">
                    We Provide Our Business All Over The World
                  </h2>
                </div>
                <div className="col-md-4 col-xl-3 text-start text-md-end">
                  <a href="" className="btn-theme">
                    View All Business
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="business-lists-wrapper">
                <div className="row gy-4 justify-content-center">
                  {aboutData.map((card) => (
                    <div key={card.id} className="col-sm-6 col-lg-4">
                      <div className="business-info-wrapper">
                        <h4>{card.title}</h4>
                        <p>{card.subtitle}</p>
                        <Link to={card.link}>Read More</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------fourth  page------------- */}
      <section id="connect-with-us-section">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <div className="content-wrapper">
                <div className="section-title">
                  <h5>WHY Connect with US</h5>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard.
                  </p>
                </div>
              </div>
              <div className="information-wrapper">
                <div className="row align-items-center gx-0 px-0">
                  <div className="col-3 col-sm-2 col-md-2 col-lg-3 col-xl-2">
                    <div className="icon-wrapper">
                      <img src={img5} alt="" />
                    </div>
                  </div>
                  <div className="col-9 col-sm-10 col-md-10 col-lg-9 col-xl-10">
                    <div className="content-wrapper">
                      <h4>Help to Grow Your Profits And Business</h4>
                      <div className="d-flex">
                        <p>
                          Specializes in talent management, recruitment,
                          training, and organizational development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="information-wrapper">
                <div className="row align-items-center gx-0 px-0">
                  <div className="col-3 col-sm-2 col-md-2 col-lg-3 col-xl-2">
                    <div className="icon-wrapper">
                      <img src={img6} alt="" />
                    </div>
                  </div>
                  <div className="col-9 col-sm-10 col-md-10 col-lg-9 col-xl-10">
                    <div className="content-wrapper">
                      <h4>Help to Grow Your Profits And Business</h4>
                      <div className="d-flex">
                        <p>
                          Specializes in talent management, recruitment,
                          training, and organizational development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-img-wrapper">
                <div className="image-wrapper">
                  <img src={img4} alt="" />
                </div>
                {/* <div className="video-wrapper">
                      <video id="myVideo" className="" style="width: 100%; height: 100%">
                        <source
                          src="./asset/media/images/GBG_AI.mp4"
                          type="video/mp4"
                        />
                      </video>
      
                      <div id="playButton" className="play-button" onclick="togglePlay()">
                        <img
                          src="./asset/media/svg/video-play-btn.svg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------fifth  page------------- */}
      <section className="" id="testimonial">
        <div className="contact-us-main-wrapper">
          <div className="container">
            <div className="row align-items-center gy-3">
              <div className="col-lg-12">
                <div className="section-title">
                  <h5 className="text-center">TESTIMONIALS</h5>
                  <h2 className="text-center">
                    What People Say About Our Company
                  </h2>
                </div>
                <div id="testimonial-slider" className="testimonial-slider">
                  <Slider {...settings}>
                    {/*---------------- one slider------------------- */}
                    <div className="slider-slide">
                      <div className="slider-wrapper">
                        <div className="card cardhover">
                          <div className="card-body mb-4">
                            <div className="d-flex align-items-center">
                              <img
                                src={img7}
                                className="avatar avatar-50 job-icon me-10px d-inline-block"
                                loading="lazy"
                                alt="img"
                              />
                              <div>
                                <h5 className="fw-bold slider-head-text">
                                  Jane Johnson
                                </h5>
                                <small>2 hour ago</small>
                              </div>
                            </div>

                            <div className="mt-2">
                              <p className="mb-10px">
                                Offering both design and construct services
                                under one contract, stream the process and
                                potentially.
                              </p>
                            </div>
                            <div className="d-flex justify-content-end border-grays">
                              <img src={img8} alt="" />
                            </div>
                            <span className="text-warning d-block line-height mt-0">
                              <p className="text-warning d-flex align-items-center mt-0 mb-0">
                                <span className="material-symbols-outlined">
                                  star
                                </span>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <span className="material-symbols-outlined">
                                  star_half
                                </span>
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*---------------- two slider------------------- */}
                    <div className="slider-slide">
                      <div className="slider-wrapper">
                        <div className="card cardhover">
                          <div className="card-body mb-4">
                            <div className="d-flex align-items-center">
                              <img
                                src={img7}
                                className="avatar avatar-50 job-icon me-10px d-inline-block"
                                loading="lazy"
                                alt="img"
                              />
                              <div>
                                <h5 className="fw-bold slider-head-text">
                                  Jane Johnson
                                </h5>
                                <small>2 hour ago</small>
                              </div>
                            </div>

                            <div className="mt-2">
                              <p className="mb-10px">
                                Offering both design and construct services
                                under one contract, stream the process and
                                potentially.
                              </p>
                            </div>
                            <div className="d-flex justify-content-end border-grays">
                              <img src={img8} alt="" />
                            </div>
                            <span className="text-warning d-block line-height mt-0">
                              <p className="text-warning d-flex align-items-center mt-0 mb-0">
                                <span className="material-symbols-outlined">
                                  star
                                </span>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <span className="material-symbols-outlined">
                                  star_half
                                </span>
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*---------------- three slider------------------- */}
                    <div className="slider-slide">
                      <div className="slider-wrapper">
                        <div className="card cardhover">
                          <div className="card-body mb-4">
                            <div className="d-flex align-items-center">
                              <img
                                src={img7}
                                className="avatar avatar-50 job-icon me-10px d-inline-block"
                                loading="lazy"
                                alt="img"
                              />
                              <div>
                                <h5 className="fw-bold slider-head-text">
                                  Jane Johnson
                                </h5>
                                <small>2 hour ago</small>
                              </div>
                            </div>

                            <div className="mt-2">
                              <p className="mb-10px">
                                Offering both design and construct services
                                under one contract, stream the process and
                                potentially.
                              </p>
                            </div>
                            <div className="d-flex justify-content-end border-grays">
                              <img src={img8} alt="" />
                            </div>
                            <span className="text-warning d-block line-height mt-0">
                              <p className="text-warning d-flex align-items-center mt-0 mb-0">
                                <span className="material-symbols-outlined">
                                  star
                                </span>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <span className="material-symbols-outlined">
                                  star_half
                                </span>
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*---------------- four slider------------------- */}
                    <div className="slider-slide">
                      <div className="slider-wrapper">
                        <div className="card cardhover">
                          <div className="card-body mb-4">
                            <div className="d-flex align-items-center">
                              <img
                                src={img7}
                                className="avatar avatar-50 job-icon me-10px d-inline-block"
                                loading="lazy"
                                alt="img"
                              />
                              <div>
                                <h5 className="fw-bold slider-head-text">
                                  Jane Johnson
                                </h5>
                                <small>2 hour ago</small>
                              </div>
                            </div>

                            <div className="mt-2">
                              <p className="mb-10px">
                                Offering both design and construct services
                                under one contract, stream the process and
                                potentially.
                              </p>
                            </div>
                            <div className="d-flex justify-content-end border-grays">
                              <img src={img8} alt="" />
                            </div>
                            <span className="text-warning d-block line-height mt-0">
                              <p className="text-warning d-flex align-items-center mt-0 mb-0">
                                <span className="material-symbols-outlined">
                                  star
                                </span>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <span className="material-symbols-outlined">
                                  star_half
                                </span>
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*---------------- five slider------------------- */}
                    <div className="slider-slide">
                      <div className="slider-wrapper">
                        <div className="card cardhover">
                          <div className="card-body mb-4">
                            <div className="d-flex align-items-center">
                              <img
                                src={img7}
                                className="avatar avatar-50 job-icon me-10px d-inline-block"
                                loading="lazy"
                                alt="img"
                              />
                              <div>
                                <h5 className="fw-bold slider-head-text">
                                  Jane Johnson
                                </h5>
                                <small>2 hour ago</small>
                              </div>
                            </div>

                            <div className="mt-2">
                              <p className="mb-10px">
                                Offering both design and construct services
                                under one contract, stream the process and
                                potentially.
                              </p>
                            </div>
                            <div className="d-flex justify-content-end border-grays">
                              <img src={img8} alt="" />
                            </div>
                            <span className="text-warning d-block line-height mt-0">
                              <p className="text-warning d-flex align-items-center mt-0 mb-0">
                                <span className="material-symbols-outlined">
                                  star
                                </span>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <i className="material-symbols-outlined md-18 me-1">
                                  star
                                </i>
                                <span className="material-symbols-outlined">
                                  star_half
                                </span>
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------six page------------- */}
      <ContactUsOne/>

    </>
  );
}
