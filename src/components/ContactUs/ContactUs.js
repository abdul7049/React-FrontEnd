import React from 'react'
import contactus from '../../images/contactus.png'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <>
            <div className='main_contact_container'>
                <img src={contactus} />
                <div className='contact_container'>
                    <h1>Contact Us</h1>
                    <div className='contact_form'>

                        <div className='contact_form_left'>
                            <h2>Contact Us</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk.Lorem
                                Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unk</p>
                            <div className='contact_icons_main'>
                                <div className='contact_icons_out'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>2195 Alamosa Drive Washington, UT 84780</p>
                                </div>

                                <div className='contact_icons_out'>

                                    <i class="fa-solid fa-phone-volume"></i>
                                    <p>435-817-0782</p>
                                </div>

                                <div className='contact_icons_out'>

                                    <i class="fa-regular fa-envelope"></i>
                                    <p>Contact@tropicalpools.com</p>
                                </div>

                                <div className='contact_icons_out'>

                                    <i class="fa-regular fa-clock"></i>
                                    <p>Monday - Saturday
                                        10:00 a.m. to 6:00 p.m.</p>
                                </div>
                            </div>
                        </div>
                        <div className='contact_form_right'>
                            <h1>Get In Touch</h1>
                            <h2>Write A Message</h2>
                            <form >

                                <input
                                    type="text"
                                    placeholder='Name'

                                /><br/>
                                <input
                                    type="text"
                                    placeholder='Email'

                                /><br/>
                                <input
                                    type="number"
                                    placeholder='Phone Number'

                                /><br/>
                                <textarea type='text' placeholder='Message' rows="4" cols="50" /><br/>


                                <button>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
