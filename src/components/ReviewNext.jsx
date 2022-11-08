import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './RatingCard.css';
import { useDbUpdate } from '../utilities/firebase';
import { writeSongToDb } from '../utilities/writeSongToDb';

const ReviewNext = ({ id, songData, index, user, listOfRatingData }) => {
    const [update, result] = useDbUpdate(`/${id}`);

    const addReview = () => {
        writeSongToDb(listOfRatingData, update, {
            "name": songData.name,
            "artist": {"name": songData.artists[0].name},
            "album": {"image_url": songData.album.images[0].url}
        }, user);
    }

    return (
        <div>
            {songData ? <div className="song-card">
                <div className="img-container">
                    <img src={songData.album.images[0].url} className="card-img-top" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{songData.name}</h5>
                    <h6 className="card-text">{songData.artists[0].name}</h6>
                    <button className="btn btn-outline-secondary" onClick={addReview}>Add Review</button>
                </div>
            </div>: <div className="song-card"></div>}
        </div>
    )
};

export default ReviewNext;
