import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';

const RatingCardFriend = ({ id, data }) => {
    return (
        <div className="song-card">
            <div className="img-container">
                <img src={data.albumCover} className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{data.songName}</h5>
                <h6 className="card-text">{data.artist}</h6>
                <Rating initialValue={data.stars} style={{ marginBottom: "20px" }} readonly/>
                {data.comment && <div className="friend-comment">{data.comment}</div>}
                {/* <input type="text" className="comment" value={data.comment} onChange={handleComment} /> */}

            </div>
        </div>
    )
};

export default RatingCardFriend;
