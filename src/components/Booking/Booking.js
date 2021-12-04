import React from "react";
import "./booking.scss";
import { Link } from "react-router-dom";
// images
import icon1 from "../../images/group1.png";
import icon2 from "../../images/group2.png";
import icon3 from "../../images/group3.png";
import bookingMainImg from "../../images/booking-img.jpg";
import leaf from "../../images/leaf.svg";
import map from "../../images/map.svg";
import send from "../../images/send.svg";
import buildImg from "../../images/building.svg";
import heart from "../../images/heart.svg";
import progress from "../../images/progress.png";
import place from "../../images/place.png";
import bg from "../../images/bg.png";

const Booking = () => {
  return (
    <>
      <section id="booking">
        <div className="container">
          <div className="main_div">
            <div className="col-7">
              <div className="heading">
                <h5>Easy and Fast</h5>
                <h2>Book your next trip</h2>
                <h2>in 3 easy steps</h2>
              </div>
              <div className="icon_content flex">
                <div className="img">
                  <img src={icon1} alt="icon" />
                </div>
                <div className="content px-3">
                  <h4>Choose Destination</h4>
                  <p>
                    Choose your favourite place. No matter where you travel
                    inside the World.
                  </p>
                </div>
              </div>
              <div className="icon_content flex py-4">
                <div className="img">
                  <img src={icon2} alt="icon" />
                </div>
                <div className="content px-3">
                  <h4>Make Payment</h4>
                  <p>
                    After find your perfect spot, make your payment and get
                    ready to travel.
                  </p>
                </div>
              </div>
              <div className="icon_content flex">
                <div className="img">
                  <img src={icon3} alt="icon" />
                </div>
                <div className="content px-3">
                  <h4>Reach Airport on Selected Date</h4>
                  <p>
                    Lastly, you have to arrive at the airport on time and enjoy
                    the vacation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              {/* absolute img */}
              <img src={bg} alt="Absolute" className="absolute_img" />
              <div className="card_box">
                <div className="box_img">
                  <img src={bookingMainImg} alt="booking" />
                </div>
                <div className="content">
                  <h4>Trip To Greece</h4>
                  <p>14-29 June | by Robbin joseph</p>
                </div>
                <div className="box_icon flex">
                  <div className="icon">
                    <Link to="/">
                      <img src={leaf} alt="" />
                    </Link>
                  </div>
                  <div className="icon  mx-3">
                    <Link to="/">
                      <img src={map} alt="" />
                    </Link>
                  </div>
                  <div className="icon">
                    <Link to="/">
                      <img src={send} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="box_bottom">
                  <div className="bottom_part">
                    <img src={buildImg} alt="building" />
                    <span className="peopleText">24 people going</span>
                  </div>
                  <div className="heart dropdown">
                    <Link to="/" className="dropbtn">
                      <img src={heart} alt="" />
                    </Link>
                    {/* hover effect on image */}
                    <div>
                      <div className="dropdown-content">
                        <div className="hover_box flex">
                          <div className="placeImg">
                            <img src={place} alt="Place" />
                          </div>
                          <div>
                            <h5>Ongoing</h5>
                            <h3>Trip to rome</h3>
                            <h6>
                              <span className="percent">40%</span> completed
                            </h6>
                            <img src={progress} alt="Progress" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
