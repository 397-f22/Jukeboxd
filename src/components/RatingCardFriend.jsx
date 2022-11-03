import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import { useDbUpdate } from '../utilities/firebase';

const RatingCardFriend = ({ id, data, index }) => {
    const [rating, setRating] = useState(data.stars);
    const [comment, setComment] = useState(data.comment);


    return (
        <div className="song-card">
            <div className="img-container">
                <img src={data.albumCover} className="card-img-top" />
            </div>
            <div className="card-body">

                <h5 className="card-title">{data.songName}</h5>
                <h6 className="card-text">{data.artist}</h6>
                <Rating initialValue={rating} style={{ marginBottom: "20px" }} />
                <TextField className="comment"
                    label="Comment"
                    multiline
                    variant="outlined"
                    value={data.comment} />
                {/* <input type="text" className="comment" value={data.comment} onChange={handleComment} /> */}

            </div>
        </div>
    )
};

export default RatingCardFriend;
