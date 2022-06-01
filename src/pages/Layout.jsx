import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const Layout = ({ cartChanges }) => {
  return (
    <>
      <Header cartChanges={cartChanges} />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
