import React from "react";
// scss
import "./company.scss";
import item1 from "../../images/1.png";
// data
import data from "./ComData/ComData";

const Company = () => {
  return (
    <>
      <section id="company">
        <div className="container">
          <div className="company_logo">
            {data.map((elem) => {
              return (
                <div className="item" key={elem.id}>
                  <img src={elem.img} alt="Item" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
