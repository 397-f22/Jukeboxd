import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import LikeButton from './LikeButton';
import { formatDateDifference } from '../utilities/formatDate';

const CardFeed = ({ review, user, data, index }) => {
    if (!data || !data[review.author]) {
       return <div/>;
    }

    const id = review.author;
    return (
        <div className="song-card">
            <div>
                <h4>{data[review.author].displayName}</h4>
                <h5>{formatDateDifference(Date.now(), review.date)}</h5>
                <div className="img-container">
                    <img src={review.albumCover} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{review.songName}</h5>
                    <h6 className="card-text">{review.artist}</h6>
                    <Rating initialValue={review.stars} style={{ marginBottom: "20px" }} readonly />
                    {review.comment && <div className="friend-comment">{review.comment}</div>}
                </div>
            </div>
            {(data && user) ? <LikeButton pageID={id} user={user} data={data} review={review} style={{alignSelf: "flex-end"}}/> : <div/>}
        </div>
    )
};

export default CardFeed;
