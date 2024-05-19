import React, { useState } from "react";
import { Restaurants } from "../../Data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [Data] = useState(Restaurants);

  return (
    <div className="body">
      <div className="searchBox">
        <input className="search" placeholder="Search" />
        {/* <div className="searchBtn">Search</div> */}
      </div>
      <div className="rest-container">
        {Data?.map((item, i) => (
          <RestaurantCard item={item} key={item?.info?.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
