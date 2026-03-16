import React from "react";
import "./asset/css/style.css";
import "./asset/css/responsive.css";
import "./asset/font/google-icons/material.css";
// import './asset/css/slick.css';
import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import TermCondition from "./components/TermCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Route, Routes } from "react-router-dom";
import Requirements from "./components/Requirements";
import BusinessListing from "./components/BusinessListing";
import Scroll from "./components/ScrollTop";
import NoteState from "./context/notes/NoteState";
import Blog from "./components/Blog";
import BusinessData from "./components/BusinessData";
import BusiListingDetail from "./components/BusiListingDetail";

export default function App() {
  return (
    <>
      <NoteState>
        <Header headerone="Home" headertwo="About Us" headerthree="Contact Us" headerfour="Terms & Condition" headerfive="Privacy Policy" headersix="Blog" />
        {/* <Home/> */}
        {/* <AboutUs/> */}
        {/* <ContactUs/> */}
        {/* <TermCondition/> */}
        {/* <PrivacyPolicy/> */}
        {/* <Blog/> */}
        {/* <BusinessData/> */}
        {/* <BusiListingDetail/> */}


        <Scroll />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs one="About Us"  onemain="About Us"/>} />
          <Route path="/contact" element={<ContactUs one="Contact Us"  onemain="Contact Us" />} />
          <Route path="/tearm" element={<TermCondition one="Tearm Condition"  onemain="Tearm Condition" />} />
          <Route path="/privacy" element={<PrivacyPolicy one="Privacy & Policy"  onemain="Privacy & Policy" />} />
          <Route path="/blog" element={<Blog one="Blog"  onemain="Blog" />} />
          <Route path="/requirements" element={<Requirements one="Requirement"  onemain="Requirement" />} />
          <Route path="/business_listing" element={<BusinessListing one="Business Listing"  onemain="Business Listing" />} />
          <Route path="/business_listing_detail" element={<BusiListingDetail one="Business Listing Detail"  onemain="Business Listing Detail" />} />
          <Route path="/business_Data" element={ <BusinessData one="Business Data"  onemain="Business Data" />} />
        </Routes>
        <Footer />
      </NoteState>
    </>
  );
}
