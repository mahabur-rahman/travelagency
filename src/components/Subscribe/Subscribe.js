import React from "react";
// scss
import "./subscribe.scss";

// img
import envelope from "../../images/mail.svg";
import shape1 from "../../images/shape-bg1.png";
import shape2 from "../../images/shape-bg2.png";
import sending from "../../images/sending.png";

const Subscribe = () => {
  return (
    <>
      <section id="subscribe">
        <div className="container">
          <div className="mail">
            <img src={sending} alt="Sending" />
          </div>
          <div className="shape1">
            <img src={shape1} alt="Shape" />
          </div>
          <div className="shape2">
            <img src={shape2} alt="Shape" />
          </div>
          <div className="main">
            <div className="content">
              <h2>Subscribe to get information, latest news and other </h2>
              <h2>interesting offers about Cobham</h2>
            </div>
            <div className="subs_form">
              <img src={envelope} alt="Envelope" />
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  className="form-control"
                />
                <button type="button" className="subs_btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
