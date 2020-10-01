import React, { Fragment } from "react";
import Banner from "../Home/banner/banner";
import Banner2 from "../Home/banner2/banner2";
import App1 from "../Home/bannerimg/bannerimg";
import Landlord from "../Home/LandLord/LandLord";
import Footer from "../Home/footer/footer";

const HomePage = () => (
  <Fragment>
    <h1>Home</h1>

    <Banner />
    <Banner2 />
    <Landlord />
    <Footer />
  </Fragment>
);

export default HomePage;
