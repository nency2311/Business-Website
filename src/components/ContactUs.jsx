import React from "react";
// import img1 from "../asset/media/svg/location-icon.svg";
// import img2 from "../asset/media/svg/call-icon.svg";
// import img3 from "../asset/media/svg/email-icon.svg";
import { Link } from "react-router-dom";
import ContactUsOne from "./ContactUsOne";
import HeadingDescription from "./HeadingDescription";

export default function ContactUs(props) {
  return (
    <>
      {/* -------------------first page------------- */}
      <HeadingDescription one={props.one} onemain={props.onemain} />
      
      {/* -------------------second page------------- */}

      

      <ContactUsOne/>
    </>
  );
}
