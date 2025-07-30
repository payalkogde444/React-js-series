
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import Header from './Header';




const Body = () => { 

  //Normal JS Variable
 const[ListofRestaurants,setListOFRestraunt]=useState([]);
const[filteredRestaurant,setfilteredRestaurant]=useState([]);
useEffect(()=>{
  fetchData();                                                 
},[]);


const[searchText,setSearchText]=useState([]);


const fetchData=async()=>{
  const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

  


   const json=await data.json();

   setListOFRestraunt(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   setfilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   
};



  return ListofRestaurants.length===0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
      <input  type="text" className="search-box" value={searchText} onChange={(e)=>{
         setSearchText(e.target.value);
      }}/>
      <button onClick={()=>{
        const filteredRestaurant=ListofRestaurants.filter(
          (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
               
        );

          setfilteredRestaurant(filteredRestaurant);


      }}
      >
        
        Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
         const filteredList=ListofRestaurants.filter(
           (res)=>res.info.avgRating > 4.5
         );
         console.log(filteredList);
         setListOFRestraunt( filteredList);
        }}> Top Rated Restaurants</button>
      </div>
      <div className="res-container">
       {
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
       }
      </div>
    </div>
  );
};

export default Body;