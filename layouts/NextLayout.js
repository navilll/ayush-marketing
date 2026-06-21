"use client";
import { nextUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const NextLayout = ({ children }) => {
  useEffect(() => {
      if (
        document.querySelector("body").classList.contains("home-5-body-color")
      ) {
        document.querySelector("body").classList.remove("home-5-body-color");
      }
  }, []);
  useEffect(() => {
    nextUtility.scrollAnimation();
  }, []);

  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
export default NextLayout;
