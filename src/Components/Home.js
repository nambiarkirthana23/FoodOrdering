import React from 'react';
import foodImage from '../Images/food.png'; 

export default function Home() {
 
  console.log(foodImage);

  return (
  
      <div className="heading_home">
        <div className="del">Delicious</div>
      
        <div className="food">Food</div>
        
        <div className="dish">Dishes</div>
        <div className="image">
          <img src={foodImage} alt="Delicious food" />
        </div>
      </div>
      
    
  );
}
