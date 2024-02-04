import React from 'react'
import arialla from '../../images/arialla.jpg'
import { useNavigate } from 'react-router-dom';
import './PoolCard.css'

const PoolCard = () => {

    const navigate = useNavigate();
const handleClick = () => {
  // Navigate to a different page
  navigate('/poolinfo');
};
    return (

        <>
            <div className='containerr'>
                <div className='cardd'>
                    <img src={arialla} />
                    <div className='intro'>
                        <h1>Arialla Pool</h1>
                        <p>The Ariella is a petite, free-form fiberglass swimming pool. We recommend this pool for homeowners who live in urban environments with small backyards.
                            Its also a great choice for swimmers who want to enjoy a shallow swimming pool.</p>
                    </div>
                    
                    
                </div>
              
              <button className='pro_btn' onClick={handleClick}>More Info</button>
             
            </div>
        </>
    )
}

export default PoolCard
