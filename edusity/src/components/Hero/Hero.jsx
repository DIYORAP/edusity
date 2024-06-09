import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure education for a better world</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dignissimos iusto quaerat blanditiis quisquam laudantium vero inventore harum repudiandae necessitatibus obcaecati, beatae molestiae minima optio repellendus voluptatem provident odio officia?
      </p>
      <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
