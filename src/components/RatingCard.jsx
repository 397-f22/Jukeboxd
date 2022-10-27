import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';

// const formatPrice = new Intl.NumberFormat([], { style: 'currency', currency: 'USD' }).format;

const RatingCard = ({data}) => {

    const [rating, setRating] = useState(0);
    const handleRating = (rating) => {
        setRating(rate);
    }


    
    return (
        <div className="card m-1 p-2">
            <div>
                <img src={data.album.image_url} className="card-img-top"/>
            </div>
            <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.artist.name}</p>
            <Rating
                onClick={handleRating}
            />

            <TextField className="comment" label="Comment" variant="outlined" />

            {/* <p className="card-text">{formatPrice(product.price)}</p> */}
            </div>
        </div>
    )
};

export default RatingCard;
