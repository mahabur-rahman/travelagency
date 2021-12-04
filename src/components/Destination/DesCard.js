import React from "react";
// img

const DesCard = ({ img, title, view, icon, days }) => {
  return (
    <>
      <div className="col-4">
        <div className="card px">
          <div className="card_img text-center">
            <img src={img} alt={title} />
          </div>
          <div className="card_title">
            <div className="sub_title">
              <h4>{title}</h4>
            </div>
            <div className="view">
              <h4>{view}</h4>
            </div>
          </div>
          <div className="tripDays">
            <img src={icon} alt="Trip of Journey" />
            <span>{days}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesCard;
