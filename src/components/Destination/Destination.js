import React from "react";
// scss
import "./destination.scss";
// comp
import DesCard from "./DesCard";
// data
import DesData from "./DesData";
// img
import ringImg from "../../images/ring-shape.svg";

const Destination = () => {
  return (
    <>
      <section id="destinations">
        <div className="container">
          {/* title */}
          <div className="title text-center">
            <h4>Top Selling </h4>
            <h2>Top Destinations</h2>
          </div>
          <a href="/">
            <div className="main_div">
              {DesData.map((elem) => (
                <DesCard key={elem.id} {...elem} />
              ))}
            </div>
          </a>
          {/* ring img */}
          <div className="ring_img">
            <img src={ringImg} alt="Ring Shape" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
