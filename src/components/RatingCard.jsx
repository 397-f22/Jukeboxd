import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import './RatingCard.css';

// const formatPrice = new Intl.NumberFormat([], { style: 'currency', currency: 'USD' }).format;

const RatingCard = ({data}) => {

    const [rating, setRating] = useState(0);
    const handleRating = (rating) => {
        setRating(rate);
    }


    
    return (
        <div className="card m-1 p-2">
            {/* <img src={data.thumbnail} className="card-img-top"/> */}
            <div className="card-body">
            <h5 className="card-title">title</h5>
            <p className="card-text">artist</p>
            <Rating
                onClick={handleRating}
            />

            {/* <p className="card-text">{formatPrice(product.price)}</p> */}
            </div>
        </div>
    )
};

export default RatingCard;
