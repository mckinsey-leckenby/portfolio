import React, { useRef, useState, useContext } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Location from "../../img/location.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";


export const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_89gxs2w',
            'template_d0nfkxi', 
            formRef.current, 
            'af0FbTldF0WEMf0Zd')
            .then((result) => {
                console.log('result', result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };


return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Let's Discuss Your Project</h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img src={Phone} alt="phone" className='c-icon' />
                        +1 360 918 3885
                    </div>
                    <div className='c-info-item'>
                        <img src={Email} alt="email" className='c-icon' />
                        mckinsey.leckenby@gmail.com
                    </div>
                    <div className='c-info-item'>
                        <img src={Location} alt="location" className='c-icon' />
                        Chicago, IL
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    <b>Whats your story?</b> Get in touch. Always open to
                    freelancing if the right project comes along.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    {done && "Thank You..."}
                </form>
            </div>
        </div>
    </div>
)
}

export default Contact
