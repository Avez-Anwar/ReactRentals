import React, { Component } from "react";
import "./landLord.css";
import Rent from "../../../images/ddv.png";
import Rents from "../../../images/swift.png";
import House from "../../../images/house.png";
import image from "../../../images/dds.png";
import sss from "../../../images/ddk.png";

class Landlord extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="forRenters">
          <a className="forRents">FOR LANDLORDS</a>
        </div>
        <div>
          <div className="letBox">
            <a>
              Simple and streamlined rental management all under a single roof
            </a>
          </div>

          <div className="list">
            <div className="listr">
              <h3 className="headerList">List your rental property</h3>
              <img className="sss" src={Rent} alt="" />
              <p className="post">
                Post your rental property in minutes to reach millions of
                <br /> potential renters.
              </p>
              <button className="startsButton">Add Listing</button>
            </div>
          </div>

          <div className="lista">
            <div className="listra">
              <h3 className="headerLista">Screen potential tenants for FREE</h3>
              <img className="sssa" src={image} alt="" />
              <p className="posta">
                Completed applications and reports are generated
                <br /> instantly and immediately shared with landlords.
                <br />
                drastically reducing cycle times and empowering
                <br /> renters to receive a decision in hours instead of days.
              </p>
              <button className="startsButton1">Screen Tenants</button>
            </div>
          </div>

          <div className="list">
            <div className="listr">
              <h3 className="headerList">Collect rent online for FREE</h3>
              <img className="sss" src={sss} alt="" />
              <p className="postz">
                Ready to never deposit a rent check again?
                <br />
                Sign up for RentPay and receive rent on time <br />
                each month from all your tenants.
              </p>
              <button className="startsButton2">Collect Rent</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landlord;
