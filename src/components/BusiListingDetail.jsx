import React from 'react'
import HeadingDescription from './HeadingDescription';
import { Link } from 'react-router-dom';
import img1 from "../asset/media/images/gallery-img-1.png";
import img2 from "../asset/media/images/gallery-img-2.png";
import img3 from "../asset/media/images/gallery-img-3.png";

export default function BusiListingDetail(props) {
  return (
    <>
    <HeadingDescription one={props.one} onemain={props.onemain}/>

   <section id="business-listing-detail-section">
      <div className="container">
        <div className="connect-btn-wrapper d-flex justify-content-end">
          <Link to="/">Connect with me</Link>
        </div>
        <div className="business-information-wrapper">
          <div className="business-information-row">
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Company logo:</h6>
                    </div>
                    <div className="col-8">
                      <p>
                        <img
                          src="./asset/media/svg/comany-logo.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Company Name:</h6>
                    </div>
                    <div className="col-8">
                      <p>InnovateTech Solutions</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Company Email:</h6>
                    </div>
                    <div className="col-8">
                      <p>bnijohn@gmail.com</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Industry:</h6>
                    </div>
                    <div className="col-8">
                      <p>Technology</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Core Industry:</h6>
                    </div>
                    <div className="col-8">
                      <p>Software Development</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Website:</h6>
                    </div>
                    <div className="col-8">
                      <p>https://www.innovatetech.com</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Phone Number:</h6>
                    </div>
                    <div className="col-8">
                      <p>+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Company Size:</h6>
                    </div>
                    <div className="col-8">
                      <p>50-100 employees</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Specialities:</h6>
                    </div>
                    <div className="col-8">
                      <p>
                        Custom Software Development, Cloud Solutions, AI and
                        Machine Learning and IT Consulting
                      </p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Address:</h6>
                    </div>
                    <div className="col-8">
                      <p>123 Innovation Drive, Suite 200</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Country:</h6>
                    </div>
                    <div className="col-8">
                      <p>United States</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>City:</h6>
                    </div>
                    <div className="col-8">
                      <p>San Francisco</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Zip:</h6>
                    </div>
                    <div className="col-8">
                      <p>94107</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Where do you practice most of your business:</h6>
                    </div>
                    <div className="col-8">
                      <p>North America</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Startup:</h6>
                    </div>
                    <div className="col-8">
                      <p>Yes</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>No of years in industry:</h6>
                    </div>
                    <div className="col-8">
                      <p>5</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>No of projects completed in last 5 yrs:</h6>
                    </div>
                    <div className="col-8">
                      <p>120</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-4">
                      <h6>Company Overview:</h6>
                    </div>
                    <div className="col-8">
                      <p>
                        InnovateTech Solutions is a cutting-edge technology
                        company specializing in custom software development,
                        cloud solutions, AI and machine learning, and mobile app
                        development. Founded in 2019, we have rapidly grown to
                        become a trusted partner for businesses seeking
                        innovative and reliable IT solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="brochure-btn-wrapper">
            <Link to="/">Download Brochure</Link>
          </div>
        </div>
      </div>
    </section>

    <section id="image-gallery-section">
      <div className="container">
        <div className="gallery-wrapper">
          <div className="title-wrapper">
            <h4>Image Gallerys</h4>
          </div>
          <div className="images-wrapper">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="image-wrapper">
                  <img
                    src={img1}
                    className="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="image-wrapper">
                  <img
                    src={img2}
                    className="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="image-wrapper">
                  <img
                    src={img3}
                    className="img-fluid"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
