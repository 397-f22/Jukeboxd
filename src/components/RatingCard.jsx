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

    const handleChange = (evt) => {

    }
    
    return (
        <div className="card m-1 p-2">
            <div>
                <img src={data.album.image_url} className="card-img-top"/>
            </div>
            <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.artist.name}</p>
            <div className="rating-star">
                <Rating
                    onClick={handleRating}
                />
            </div>
            <TextField className="comment" multiline label="Comment" variant="outlined" />
            </div>
        </div>
    )
};

export default RatingCard;
