import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import home_cover from '../../images/home_cover.png'
import pool1 from '../../images/pool1.jpg'
import pool2 from '../../images/pool2.jpg'
import pool3 from '../../images/pool3.jpg'
import pool4 from '../../images/pool4.jpg'
import pool5 from '../../images/pool5.jpg'
import water_bg from '../../images/water_bg.png'
import construction from '../../images/construction.png'
import support from '../../images/support.png'
import products from '../../images/products.png'
import './Home.css'
import PoolCard from '../PoolCard/PoolCard';

import { Carousel } from 'react-carousel-minimal';
import HomeCard from '../HomeCard/HomeCard';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to a different page
    navigate('/about');
  };
  const handleClick2 = () => {
    // Navigate to a different page
    navigate('/contact');
  };
  const handleClick3 = () => {
    // Navigate to a different page
    navigate('/poolgallary');
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

  const words = ['Construction', 'Products', 'Maintenance'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [words.length]);

  const currentWord = words[currentWordIndex];

  return (
    <>
      <div className='banner_card'>
        <img src={home_cover} />
        <div className='banner_text'>
          <h1>Tropical <span className='h1_span'>Pools</span></h1>
          <h3>Your Complete Pool <span className='h1_span'>{currentWord}</span></h3>
          <button className='banner_btn' onClick={handleClick2}>Get A Quote</button>
        </div>
      </div>

      <div className='home__section '>
        <h1>About Us</h1>
        <div className='home__card'>
          <div className='home__left'>
            <div className="App">
              <div style={{ textAlign: "center" }}>
                <div style={{
                  padding: "0 20px"
                }}>
                  <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"

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
              </div>
            </div>
          </div>
          <div className='home__right'>
            <p>Welcome to Tropical Pools, your premier destination for all things related to pools! At Tropical Pools,
              we take pride in offering a comprehensive range of services dedicated to the construction, maintenance,
              and enhancement of your aquatic oasis. With a team of skilled professionals committed to excellence,
              we bring your dream pool to life with meticulous construction services. Our commitment doesn't end there;
              we ensure the longevity and beauty of your investment through top-notch maintenance services.
              Additionally, explore our curated selection of high-quality pool products, from cutting-edge
              technology to stylish accessories, designed to elevate your pool experience. Dive into a world of
              unparalleled expertise and customer satisfaction with Tropical Pools, where we transform your
              vision into a reality,
              creating a refreshing haven for you to enjoy for years to come.</p>
              <button className='banner_btn' onClick={handleClick}>More Info </button>
          </div>
        </div>
      </div>
      <div className='home__info'>
          <img src={water_bg} />
          <div className='home__text'>
            <h1>Why Tropical Pools <span>?</span> </h1>
            <div className='home_card' id='home_card'>
              <div className="cardd">
                <h3>Construction</h3>
                <img src={construction} />
                <p>Choose Tropical Pools for expert construction, where precision meets artistry, turning your pool dreams into a stunning reality.</p>
              </div>
              <div className="cardd" >
                <h3>Products</h3>
                <img src={products} />
                <p>Discover top-tier pool products at Tropical Pools, meticulously curated for quality and innovation, adding the perfect finishing touch to your aquatic paradise.</p>
              </div>
              <div className="cardd">
                <h3>Support</h3>
                <img src={support} />
                <p>Experience unparalleled customer support with Tropical Pools - we're here for you at every splash, ensuring your pool journey is seamless and stress-free.</p>
              </div>
            </div>
            <HomeCard/>
          </div>
        </div>
      <div className='pool_design '>
        <h1>Pool Details</h1>
        <div className='pool_card '>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        </div>
        <button className='banner_btn' onClick={handleClick3}>More</button>
      </div>
      <div className='customer_reviewmain'>
        <h1>Customer's Review</h1>
        <div className='pool_card'>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        </div>
        
      </div>
    </>
  )
}

export default Home
