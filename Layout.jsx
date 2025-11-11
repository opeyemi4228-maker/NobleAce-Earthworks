'use client';
import React, { useState } from "react";
import AnimatedNavbar from "./components/Navbar";
import Footer from "./components/Footer";
// import other page sections...

const Layout = ({ children }) => {
  const [lang, setLang] = useState("Fr");

  return (
    <>
      <AnimatedNavbar lang={lang} setLang={setLang} />
      {/* Pass lang to all components that need translation */}
      {/* Example: <HomeSection lang={lang} /> */}
      {children && React.cloneElement(children, { lang })}
      <Footer lang={lang} />
    </>
  );
};

export default Layout;