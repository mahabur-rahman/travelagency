import React from "react";
// category css
import "./category.scss";
// img
import shape from "../../images/shape.svg";
// category card comp
import CategoryCard from "./CategoryCard";
// card data
import CardData from "./CardData";

const Category = () => {
  return (
    <>
      <section id="category">
        <div className="container">
          {/* shape img */}
          <div className="shape_img">
            <img src={shape} alt="Shape" />
          </div>
          <div className="cat_title text-center">
            <h4>CATEGORY </h4>
            <h2>We Offer Best Services</h2>
          </div>
          {/* category card */}
          <div className="card_main">
            {CardData.map((card) => {
              return <CategoryCard key={card.id} {...card} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
