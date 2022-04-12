import React from 'react'
import "./about.css"

export const About = () => {
  return (
    <div className='a'>
    <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
            <img 
                src = "https://images.pexels.com/photos/3052400/pexels-photo-3052400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt = ''
                className='a-img'
            />
        </div>
    </div>
    <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
       <p className='a-sub'>
           A reader will read this
       </p>
       <p className='a-desc'>
       Lorem ipsum dolor sit, amet 
       consectetur adipisicing elit. Repellendus, 
       eligendi dolore consectetur iure accusamus quod 
       laudantium repudiandae perspiciatis doloremque, 
       harum, minima voluptates similique nisi adipisci
        aspernatur aliquid est veniam quaerat!
       </p>

    </div>
    </div>

  )
}
export default About