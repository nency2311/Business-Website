import React from "react";
import img1 from "../asset/media/svg/Logo-white.svg";
import img2 from "../asset/media/svg/facebook.svg";
import img3 from "../asset/media/svg/twitter.svg";
import img4 from "../asset/media/svg//youtube.svg";
import img5 from "../asset/media/svg/linkedin.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container px-0">
          <div className="footer-wrapper">
            <div className="row gy-3 justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div className="footer-logo-wrapper">
                  <Link className="py-0 logo" to="/">
                    <img src={img1} className="img-fluid" alt="" />
                  </Link>

                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by injected humour.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-menu-links">
                  <h4>Useful Links</h4>

                  <ul>
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/tearm">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-menu-links">
                  <h4>Office Address</h4>

                  <ul>
                    <li>
                      <a
                        href="https://www.google.com/maps?q=Ahmedabad, Gujarat, India"
                        target="_blank"
                        className="address-link"
                      >
                        42 Mamnoun Street, Saba Carpet and Antiques Store, UK
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu-links mt-4">
                  <h4>Email Address</h4>
                  <p>Interested in working with us?</p>
                  <ul>
                    <li className="mt-0">
                      <Link to="mailto:support.bandco@gmail.com">
                        support.bandco@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column justify-content-between">
                  <div className="footer-menu-links">
                    <h4>Phone Number</h4>
                    <Link to="tel:+971 551 579 261">+971 551 579 261</Link>
                    <br />
                    <Link to="tel:+97 155 596 1659">+97 155 596 1659</Link>
                  </div>

                  <div className="social-media-links">
                    <h5>Follow Us</h5>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img src={img2} alt="facbook" />
                        </a>
                      </li>
                      <li>
                        <Link to="https://twitter.com/" target="_blank">
                          <img src={img3} alt="twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.youtube.com/" target="_blank">
                          <img src={img4} alt="youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/" target="_blank">
                          <img src={img5} alt="linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyrights-wrapper">
          <div className="container">
            <div className="footer-rights-wrapper">
              <div className="copyrights-wrapper">
                <p>© 2024 Global Business Inc. All Right Reserved.</p>
                <div>
                  <Link
                    to="/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Terms &amp; Conditions
                  </Link>
                  <span>and</span>
                  <Link
                    to="/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
