'use client'
import React, { useState } from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NatureNavbar from "@/components/NatureNavbar";
import EnvironmentalProtectionSection from "@/components/EnvironmentalProtectionSection";
import Footer1 from "@/components/Footer1";
import FAQSection from "@/components/FAQSection";

const Home = ({ children }) => {
    const [lang, setLang] = useState("Fr");
  return (
    <>
 
      <div className="px-5 md:px-5">
  <Navbar lang={lang} setLang={setLang} />  

        <HeaderSlider />
        <HomeProducts />
        <EnvironmentalProtectionSection />
        <FAQSection/>
        <Banner />
        <NewsLetter />
      </div>
      
      {children && React.cloneElement(children, { lang })}
    
      <Footer1/>
    </>
  );
};

export default Home;
