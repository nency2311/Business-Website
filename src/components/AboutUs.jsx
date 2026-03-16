import React from 'react';
import img1 from "../asset/media/images/about-pg-img.png";
import HeadingDescription from './HeadingDescription';

export default function AboutUs(props) {
  return (
    <>
     {/* -------------------first page------------- */}
     <HeadingDescription one={props.one} onemain={props.onemain} />
      {/* -------------------second page------------- */}
    <section id="about-us-pg-section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="section-title">
              <h5>about us</h5>
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
            </div>

            {/* <div className="image-wrapper text-center d-md-none mb-3">
              <img
                src={img1}
                className="img-fluid"
                alt=""
                srcSet=""
              />
            </div> */}
            <div className="content-wrapper">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour words which don't look even slightly believable.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard. There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour words which don't look even
                slightly believable.
              </p>
            </div>
          </div>

          <div className="col-lg-6 my-xl-4 my-md-auto d-none d-md-block">
            <div className="image-wrapper text-center">
              <img
                src={img1}
                className="img-fluid"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
