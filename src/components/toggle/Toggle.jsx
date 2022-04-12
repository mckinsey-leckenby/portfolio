import React from 'react'
import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"

export const Toggle = () => {
  return (
    <div className="t">
    <img src={Sun} alt="sun" className="t-icon"/>
    <img src={Moon} alt="moon" className="t-icon"/>
    <div className='t-button'></div>
    </div>
  )
}

export default Toggle 