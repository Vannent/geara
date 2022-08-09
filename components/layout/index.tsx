import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-[#DBDED5] ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
