import React from 'react'
import './ReviewCard.css'
import avatar from '../../images/avatar.png'
const ReviewCard = () => {
    return (
        <>
  <div class="review_box">
            <div class="review_card">
                <div class="card_top">
                    <div class="profile">

                        <div class="profile_image">
                            <img src={avatar}/>
                        </div>

                        <div class="name">
                            <strong>Ranidi Lochana</strong>

                            <div class="like">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="comment">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum 
                        architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa 
                        repellat numquam atque dolores!
                    </p>
                </div>
            </div>   

           
            

        </div>
        </>

    )
}

export default ReviewCard
