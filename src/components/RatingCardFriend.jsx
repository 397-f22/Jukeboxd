import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import LikeButton from './LikeButton';

const RatingCardFriend = ({ id, songData, user, index, data }) => {
    return (
        <div className="song-card">
            <div>
                <div className="img-container">
                    <img src={songData.albumCover} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{songData.songName}</h5>
                    <h6 className="card-text">{songData.artist}</h6>
                    <Rating initialValue={songData.stars} style={{ marginBottom: "20px" }} readonly/>
                    {songData.comment && <div className="friend-comment">{songData.comment}</div>}
                </div>
            </div>
            {(data && user) ? <LikeButton pageID={id} user={user} data={data} review={songData} style="icon-card-button"/> : <div/>}
        </div>
    )
};

export default RatingCardFriend;
