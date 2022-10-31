import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import { useDbUpdate } from '../utilities/firebase';

const RatingCard = ({id, data, index}) => {
    console.log(data);
    const [rating, setRating] = useState(data.stars);
    const [comment, setComment] = useState(data.comment);
    const [update, result] = useDbUpdate(`/${id}/Reviews/${index}`);
    const handleRating = (rating) => {
        update({
            "stars": rating
        });
        setRating(rating);
    }

    const handleComment = (event) => {
        update({
            "comment": event.target.value
        });
        setComment(event.target.value);
    }
    
    return (
        <div className="song-card">
            <div>
                <img src={data.albumCover} className="card-img-top"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{data.songName}</h5>
                <h6 className="card-text">{data.artist}</h6>
                <Rating initialValue={rating} onClick={handleRating} style={{marginBottom: "20px"}}/>

                <input type="text" className="comment" value={data.comment} onChange={handleComment} />
            </div>
        </div>
    )
};

export default RatingCard;
