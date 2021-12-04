import React from "react";
// banner css
import "./banner.scss";
// img

import bannerImg from "../../images/banner.png";
import playBtn from "../../images/playbtn.png";
import decore from "../../images/decore.png";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="main_div">
            {/* banner content */}
            <div className="banner_content">
              <h3>Best Destinations around the world</h3>
              <img src={decore} alt="Decore" className="decoreImg" />
              <h2>Travel, enjoy and live a new and full life</h2>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div>
                <div className="find_btn flex">
                  <button className="findMoreBtn">Find out more</button>
                  <a href="/" className="mt flex">
                    <img src={playBtn} alt="Play Button" className="playImg" />
                    <span className="playText">Play Demo</span>
                  </a>
                </div>
              </div>
            </div>
            {/* banner img */}
            <div className="banner_img">
              <img src={bannerImg} alt="Banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
