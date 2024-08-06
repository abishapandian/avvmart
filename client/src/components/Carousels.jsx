import React from 'react'
import "./style/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
export default function Carousels({isData}) {
  return (
    <>
    <Carousel autoplay={true}showThumbs={false} showArrows={true} infiniteLoop={true}>
      {isData.map((item,index)=>(
      <div className='slide' key={index}>
        <img src={item.image}/>
        <div className={item.className}>
      {item.text}
      </div>
      </div>
      ))}
    </Carousel>

    </>
      
  )
}

