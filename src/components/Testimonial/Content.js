import React from "react";

const Content = ({ img, name, text, place }) => {
  return (
    <>
      <div className="card">
        <div className="client_img">
          <img src={img} alt="Client" />
          <div className="card_body">
            <p>{text}</p>
            <h2>{name}</h2>
            <h4>{place}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
