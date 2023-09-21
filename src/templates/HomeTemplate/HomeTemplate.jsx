// rfc
import React from "react";

import { Outlet } from "react-router-dom";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function HomeTemplate(props) {
  return (
    <div id="back_totop">
      <BackToTop />
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
