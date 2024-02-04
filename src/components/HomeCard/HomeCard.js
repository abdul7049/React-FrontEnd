import React, { useState, useEffect } from 'react';
import construction from '../../images/construction.png'
import support from '../../images/support.png'
import products from '../../images/products.png'
import './HomeCard.css'
const HomeCard = () => {


    const [currentCard, setCurrentCard] = useState(0);

    const totalCards = 3;

    const nextSlide = () => {
        setCurrentCard((prevCard) => (prevCard + 1) % totalCards);
    };

    const prevSlide = () => {
        setCurrentCard((prevCard) => (prevCard - 1 + totalCards) % totalCards);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Automatically switch every 3 seconds

        return () => clearInterval(intervalId);
    }, [nextSlide]);
    return (
        <>

            <div className='main_card' id='main_card'>
                <div className="home_cardd">
                    <div className="cardd" style={{ display: currentCard === 0 ? 'block' : 'none' }}>
                        <h3>Construction </h3>
                        <img src={construction} />
                        <p>Choose Tropical Pools for expert construction, where <br/>precision meets artistry, turning your pool dreams into a stunning reality.</p>
                    </div>
                    <div className="cardd" style={{ display: currentCard === 1 ? 'block' : 'none' }}>
                        <h3>Products</h3>
                        <img src={products} />
                        <p>Discover top-tier pool products at Tropical Pools, meticulously curated for quality and innovation, adding the perfect finishing touch to your aquatic paradise.</p>
                    </div>
                    <div className="cardd" style={{ display: currentCard === 2 ? 'block' : 'none' }}>
                        <h3>Support</h3>
                        <img src={support} />
                        <p>Experience unparalleled customer support with Tropical Pools - we're here for you at every splash, ensuring your pool journey is seamless and stress-free.</p>
                    </div>
                </div>

                <button className='prev_btn' onClick={prevSlide}><p>&lt;</p></button>
                <button className='next_btn' onClick={nextSlide}><p>&gt;</p></button>
            </div>



        </>
    )
}

export default HomeCard
