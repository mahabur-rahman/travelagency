import React from "react";
// scss
import "./testimonial.scss";

// images
import client1 from "../../images/client1.png";
import client2 from "../../images/client2.png";
// carousel
import Carousel from "../Carousel/Carousel";
import Content from "./Content";

const Testimonial = () => {
  const clientOne = client1;
  const name = "Mike taylor";
  const text = `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`;
  const place = "Lahore, Pakistan";

  const clientTwo = client2;
  const title = "John Doe";
  const para = `"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."`;
  const city = "England, Berminghum";

  return (
    <>
      {/* ==============================  */}
      <section id="testimonial">
        <div className="container">
          <div className="main_div">
            <div className="col-6">
              <div className="test_content">
                <h3>Testimonials </h3>
                <h2>What people say</h2>
                <h2>about Us.</h2>
              </div>
            </div>

            <div className="col-6">
              <Carousel>
                <Content
                  img={clientOne}
                  name={name}
                  text={text}
                  place={place}
                />
                <Content
                  img={clientTwo}
                  name={title}
                  text={para}
                  place={city}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* ==============================  */}
    </>
  );
};

export default Testimonial;
