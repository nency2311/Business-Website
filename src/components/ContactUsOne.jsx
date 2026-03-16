import React from 'react'
import img1 from "../asset/media/svg/location-icon.svg";
import img2 from "../asset/media/svg/call-icon.svg";
import img3 from "../asset/media/svg/email-icon.svg";
import { Link } from "react-router-dom";

export default function ContactUsOne() {
  return (
    <>
      <section id="contact-us-section">
              <div className="contact-us-main-wrapper">
                <div className="container">
                  <div className="row align-items-center gy-3">
                    <div className="col-lg-6">
                      <div className="section-title">
                        <h5>CONTACT</h5>
                        <h2>Lorem ipsum dolor sit amet, Contact With Us</h2>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form by injected humour.
                        </p>
                      </div>
                      <div className="contact-info-main-wrapper">
                        <div className="row gy-4">
                          <div className="col-md-6">
                            <div className="information-wrapper">
                              <div className="row align-items-center gx-0 px-0">
                                <div className="col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3">
                                  <div className="icon-wrapper">
                                    <img src={img1} alt="" srcSet="" />
                                  </div>
                                </div>
                                <div className="col-9 col-sm-10 col-md-9 col-lg-8 col-xl-9">
                                  <div className="content-wrapper">
                                    <h4>new york</h4>
                                    <div className="d-flex">
                                      <a to="#">
                                        42 Mamnoun Street, Saba Carpet and Antiques
                                        Store, UK
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="information-wrapper">
                              <div className="row align-items-center">
                                <div className="col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3">
                                  <div className="icon-wrapper">
                                    <img src={img2} alt="" srcSet="" />
                                  </div>
                                </div>
                                <div className="col-9 col-sm-10 col-md-9 col-lg-8 col-xl-9">
                                  <div className="content-wrapper">
                                    <h4>Phone Number</h4>
                                    <div className="d-flex flex-column">
                                      <a to="tel:+971 551 579 261">
                                        +971 551 579 261
                                      </a>
                                      <a to="tel:+97 155 596 1659">
                                        +97 155 596 1659
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="information-wrapper">
                              <div className="row align-items-center">
                                <div className="col-3 col-sm-2 col-md-3 col-lg-4 col-xl-3">
                                  <div className="icon-wrapper">
                                    <img src={img3} alt="" srcSet="" />
                                  </div>
                                </div>
                                <div className="col-9 col-sm-10 col-md-9 col-lg-8 col-xl-9">
                                  <div className="content-wrapper">
                                    <h4>Email Address</h4>
                                    <div className="d-flex">
                                      <a to="mailto:support.bandco@gmail.com">
                                        support.bandco@gmail.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div className="col-lg-6">
                      <div className="contact-us-form-wrapper">
                        <div className="section-title">
                          <h5>get in touch</h5>
                          <p>The point of using Lorem Ipsum that it has morenormal</p>
                        </div>
                        <form action="" method="post">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-field">
                                <label htmlFor="first_name">
                                  First Name <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  name=""
                                  placeholder="First Name"
                                  id="first_name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-field">
                                <label htmlFor="last_name">
                                  Last Name <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Last Name"
                                  id="last_name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-field">
                                <label htmlFor="email">
                                  Email <span>*</span>
                                </label>
                                <input
                                  type="email"
                                  name=""
                                  placeholder="Email"
                                  id="email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-field">
                                <label htmlFor="phone_number">
                                  Phone Number <span>*</span>
                                </label>
                                <input
                                  type="text"
                                  name=""
                                  placeholder="Phone Number"
                                  id="phone_number"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-field">
                                <label htmlFor="phone_number">
                                  Message <span>*</span>
                                </label>
                                <textarea
                                  name=""
                                  id=""
                                  cols="30"
                                  placeholder="There are many variations ..."
                                  rows="3"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-subnit-btn">
                                <input type="submit" value="Send Message" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>
    </>
  )
}
