import React, { useState } from 'react';
import './PoolInfo.css'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-carousel-minimal';
import pool1 from '../../images/pool1.jpg'
import pool2 from '../../images/pool2.jpg'
import pool3 from '../../images/pool3.jpg'
import pool4 from '../../images/pool4.jpg'
import pool5 from '../../images/pool5.jpg'
import PoolSpec from '../PoolSpec/PoolSpec';
import PoolMod from '../PoolMod/PoolMod';
const PoolInfo = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const handleClick2 = () => {
        // Navigate to a different page
        navigate('/contact');
      };
    //carousel
    const data = [
        {
            image: pool1,

        },
        {
            image: pool2,

        },
        {
            image: pool3,

        },
        {
            image: pool4,

        },
        {
            image: pool5,

        },
        {
            image: pool1,

        },
        {
            image: pool2,

        },
        {
            image: pool3,

        }

    ];


    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (


        <>
          <div className='master_container'>
          <div className=' pool_info_container'>
                <div className='pool_info_grid'>
                    <div className='grid__left'>
                        <Carousel
                            data={data}
                            time={2000}
                            width="50rem"
                            height="30rem"

                            radius="10px"
                            slideNumber={true}
                            slideNumberStyle={slideNumberStyle}

                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            thumbnails={true}
                            thumbnailWidth="100px"
                            style={{
                                textAlign: "center",
                                maxWidth: "850px",
                                maxHeight: "500px",
                                margin: "40px auto",
                            }}
                        />
                    </div>
                    <div className='grid__right'>
                        <div className='right__text'>
                            <h1>Arialla Pool</h1>
                            <p>The Ariella is a petite, free-form fiberglass swimming pool. We recommend this pool for homeowners who
                                live in urban environments with small backyards.
                                Its also a great choice for swimmers who want to enjoy a shallow swimming pool.</p>
                            <div className='right__detail'>
                                <div className='right__detail_text'>
                                    <h2>Depth</h2>
                                    <h3>4'11"</h3>
                                </div>
                                <div className='right__detail_text'>
                                    <h2>Width</h2>
                                    <h3>21'0"</h3>
                                </div>
                                <div className='right__detail_text'>
                                    <h2>Volume</h2>
                                    <h3>4600 G</h3>
                                </div>
                                <div className='right__detail_text'>
                                    <h2>Length</h2>
                                    <h3>20'9"</h3>
                                </div>
                            </div>
                            <button className='poolinfo_btn' onClick={handleClick2}>Get A Quote</button>
                        </div>

                    </div>
                </div>
            </div>
            <hr></hr>
            <div className=''>
                <div className='poolinfo_nav '>
                    <ul>
                        <li onClick={() => handleButtonClick('button1')}>Pool Specifications</li>
                        <li onClick={() => handleButtonClick('button2')}>3D Image</li>
                    </ul>
                </div>
                <div className=''>


                    {activeButton === 'button1' && <PoolSpec />}
                    {activeButton === 'button2' && <PoolMod />}
                </div>
            </div>
          </div>
        </>
    )
}

export default PoolInfo
