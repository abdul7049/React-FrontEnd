import React, { useState } from 'react'
import './About.css'
import about_cover from '../../images/about_cover.png'
import about_cover2 from '../../images/about_cover2.png'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
const About = () => {
  const [modal, setmodal] = useState(false)
  return (
    <>
      <div className='about_card'>
        <img src={about_cover} />
        <div className='about_text'>
          <h1>Tropical <span className='h1_span'>Pools</span></h1>
          <p>With over <span>10 years</span> of experience, quality, and integrity is the difference that sets us apart from others.</p>

        </div>
      </div>
      <div className='about__section'>

        <div className='abthead'>
        <h1>About Us</h1>
        </div>
        <img src={about_cover} />
        <div className='aboutinfo_card'>
          <div className='abtcard_left'>
            <h1>Tropical <span className='h1_span'>Pools</span></h1>
            <p>Tropical Pools is one of such company that can satisfy all of the above criteria and more. Come in now and see what we can do for you.</p>

          </div>
          <div className='abtcard__right'>
          <div className='info_left'>
          <h3><span>01</span> &nbsp;Have been around for a while.</h3>
            <h3><span>02</span>&nbsp;Providing alowing references</h3>
            <h3><span>03</span>&nbsp;Are easy to work with</h3>
          </div>
            <div className='info_right'>
            <h3><span>04</span>&nbsp;Have friendly,honest employees</h3>
            <h3><span>05</span>&nbsp;Stick to their promised timeframe to complete the job</h3>
            <h3><span>06</span>&nbsp;Are still customer oriented after the sale</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <Modal size='lg'
          isOpen={modal}
          toggle={() => setmodal(!modal)}>
          <ModalHeader toggle={() => setmodal(!modal)}>
            Drop Your Queries
          </ModalHeader>
          <ModalBody>
            <form>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor='name'>Name :</label>
                    <input type='text'
                      className='form-control'
                      placeholder='Enter your name' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor='name'>Phone no :</label>
                    <input type='number'
                      className='form-control'
                      placeholder='Enter your Phone no' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor='name'>E-mail :</label>
                    <input type='email'
                      className='form-control'
                      placeholder='Enter your email' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div>
                    <textarea
                      className='form-control mt-3'
                      placeholder='Type your message'
                      rows={3}
                    />
                  </div>

                </Col>
              </Row>
            </form>
            <button type="button" class="btn btn-primary mt-3  btn-block">Send</button>
          </ModalBody>
        </Modal>
      </div>
      <div className='about_servicesmain'>
        <h1>Our Services</h1>
        <div className='services_card'>
          <div className='services_cardbody'>
          <i class="fa-solid fa-truck-fast"></i>
                <h3>Fast Delivery</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
          </div>

          <div className='services_cardbody'>
          <i class="fa-solid fa-rotate-left"></i>
                <h3>Replacement Warranty</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
          </div>

          <div className='services_cardbody'>
          <i class="fa-solid fa-headset"></i>
                <h3>24 x 7 Support</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
          </div>
        </div>
      </div>
      <div className='abt__contact containere'>
        <p>If you would like to schedule an appointment for
          more information or a bid contact us at</p>
        <div className='abt_cnt_card'>
          <div >
            <h3>+9200000000000</h3>
          </div>
          <div><button className='banner_btn' onClick={() => setmodal(true)}>Drop Email</button></div>
        </div>

      </div>
    </>
  )
}

export default About
