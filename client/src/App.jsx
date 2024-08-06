import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Carousels from './components/Carousels'
import carouselimg from './assets/Carousel.png';
import Card from './components/Card'
export default function App() {
  const [slides,setslides]=useState([])
  const data=[
    {text:<div><h2>Delightful Strawberries</h2>
      <h2>20% off</h2> <h2>BUYNOW</h2>
    </div>,className:'slide1',image:carouselimg},
    {text:'',className:'slide2',image:carouselimg},
    {text:'',className:'slide3',image:carouselimg},
  ]
  useEffect(()=>{
    const fetchslides=()=>{
      setslides(data)
    }
    fetchslides()
  },[])
  return (
    <>
    <Navbar/>
    <Carousels isData={slides}></Carousels>
    <Card></Card>
`    </>
  )
}
