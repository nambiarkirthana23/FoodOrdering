import React, { PureComponent } from 'react'
import image1 from '../Images/chicken_biryani.png'
import image2 from '../Images/burger.jpg'
// import image4 from '../Images/fruitsSalad.jpg'
// import image5 from '../Images/pizza.jpg'
// import image6 from '../Images/food6.jpeg'
// import image7 from '../Images/food6.jpeg'
export default class Services extends PureComponent {
  render() {
    return (
      <div>
       <div>POPULAR DISHES</div>
       <div className="images1">
       <div className="image1">
        <img src={image1} alt="image1"></img>
        <p>Chicken biryani</p>
       </div>
       <div className="image2">
        <img src={image2} alt="image2"></img>
        <p>Burger</p>
       </div>
       <div className="image3">
        <img src={image1} alt="image3"></img>
        <p>Fruits Salad</p>
       </div>
       </div>
        <div className="images2">
       <div className="image4">
        <img src={image1} alt="image4"></img>
        <p>Pizza</p>
       </div>
       <div className="image5">
        <img src={image1} alt="image6"></img>
       </div>
       <div className="image6">
        <img src={image1} alt="image7"></img>
       </div>
       </div> 
      </div>

      //
    )
  }
}
