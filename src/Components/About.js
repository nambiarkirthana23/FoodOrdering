import React from 'react'
import aboutimg from '../Images/food.png'
import foodquality from '../Images/foodQuality.png'
import fastdelivery from '../Images/fast-delivery.png'
import superTaste from '../Images/taste.png'
export default function About() {
  return (
    <div className="about">
        <div className="heading-about">
            ABOUT US
        </div>
        <div className="about-caption" >
            The Only thing we are serious about is food
        </div>
        <div class="footer">
        <div className="about-explanation">Our journey began with a simple yet powerful belief: great food 
        brings people together. From the first sizzle of a skillet to the final flourish on your plate,
         every dish we create is a celebration of flavor, quality, and craftsmanship. Our team of passionate
          chefs and warm-hearted staff work tirelessly to deliver an unforgettable dining experience, where
           each meal is more than just food—it’s a moment of joy, comfort, and connection.
           </div>
           <div className='about-image'>
           <img className="about-image1" src={aboutimg} alt='about-img'></img>
           </div>
           </div>
          
           <div class="about-icon">
            <div className="aboutFoodQuality" >Quality Food <img className="foodquality" src={foodquality} alt="quality food"></img></div>
            <div className="aboutFastDelivery" >Fast Delivery <img className="fastdelivery"src={fastdelivery} alt=""></img></div>
            <div className="aboutSuperTaste">Super Taste <img  className="superTaste" src={superTaste} alt="superTaste"></img></div>
            <p></p>
           </div>
    </div>
  )
}
