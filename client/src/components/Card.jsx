import React from "react";
import "./style/card.css";
import star from "../assets/Star.png";
export default function Card({isCarddata}) {
  return (
    <>
      <h1 class="organicDelights">Organic Delights</h1>
      <section id="card_design">
        {isCarddata.map((item, index) => (
          <div class="my_card" key={index}>
            <img src={item.image} />
            <h2>{item.productname}</h2>

            <h5>Rs{item.price}</h5>
            <div class="ratings">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              (30)
            </div>
            <div class="quantity">
              {item.quantity.map((data, index) => (
                <h5 key={index}>{data}</h5>
              ))}
            </div>
            <div class="buttons">
              <button>Add to cart</button>

              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
