import React from "react";

const RestaurantCard = ({ item }) => {
  return (
    <div className="rest-card">
      <img
        className="rest-image"
        alt=""
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          item?.info?.cloudinaryImageId
        }
      />
      <div className="rest-title">
        <h3>{item?.info?.name}</h3>
        <h5>{item?.info?.avgRating} ⭐️</h5>
      </div>
      <h5>{item?.info?.cuisines?.join(", ")}</h5>
      <h5>{item?.info?.costForTwo}</h5>
      <h5>{item?.info?.sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
