import React from "react";

const CategoryCard = ({ img, title, text }) => {
  return (
    <>
      <div className="col-4 col-sm-6">
        <div className="card">
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
