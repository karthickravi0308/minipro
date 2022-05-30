import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title,Specifications, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{Specifications}</p>
       <b> <p>Price : {price} Rs</p></b>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title,Colour, specificarions, price, img