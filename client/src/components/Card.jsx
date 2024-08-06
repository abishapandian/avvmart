import React from 'react'
import "./style/card.css";
import onions from "../assets/onions.png";
import star from "../assets/Star.png";
import potatos from "../assets/potatos.png";
import tomatos from "../assets/tomatos.png";
import carrots from "../assets/carrots.png";
export default function Card() {
  return (
    <>
    <h1 class="organicDelights">
            Organic Delights
        </h1>
    <section id="card_design">
        
    <div class="my_card">
        <div class="card">
          <img src={potatos}/>
          <h2>onions</h2>
          <h5>(Rs.30/kg)</h5>
          <div class="ratings">
            <ul>
              <li>
                <img src={star}/>
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star} />
              </li>
              <li>
                <img src={star}/>
              </li> 
              <li>
                <img src={star} />
              </li>
              <li>
                    (30)
              </li>
            </ul>
          </div>
          <div class="quantity">
            <ul>
                <li>
                    1kg
                </li>
                <li>
                    0.5kg
                </li>
            </ul>
          </div>
          <div class="buynow">
            <ul>
                <li>
                    Add to cart
                </li>
                <li>
                    Buy Now
                </li>
            </ul>
          </div>
        </div>

      </div>
          </section>
    </>
      )
}
