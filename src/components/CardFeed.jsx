import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import LikeButton from './LikeButton';

const CardFeed = ({ review, user, data, index }) => {
    const id = review.author;
    return (
        <div className="song-card">
            <h3>{data[review.author].displayName}</h3>
            <div className="img-container">
                <img src={review.albumCover} className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{review.songName}</h5>
                <h6 className="card-text">{review.artist}</h6>
                <Rating initialValue={review.stars} style={{ marginBottom: "20px" }} readonly />
                {review.comment && <div className="friend-comment">{review.comment}</div>}
                {/* <input type="text" className="comment" value={data.comment} onChange={handleComment} /> */}
                {data && <LikeButton pageID={id} user={user} data={data} review={review}/>}
            </div>
        </div>
    )
};

export default CardFeed;
