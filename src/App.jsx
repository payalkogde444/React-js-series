import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";


const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
       {
         reslist.map((restaurant)=>(
         <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))
       }
      </div>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
