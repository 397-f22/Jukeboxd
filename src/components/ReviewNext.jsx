import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import { TextField } from "@mui/material";
import './RatingCard.css';
import { useDbUpdate } from '../utilities/firebase';

const ReviewNext = ({ id, data, index }) => {
    const [rating, setRating] = useState(data.stars);
    const [comment, setComment] = useState(data.comment);
    const [update, result] = useDbUpdate(`/${id}/reviews/${index}`);
    const handleRating = (rating) => {
        // update({
        //     "stars": rating,
        //     "date": Date.now()
        // });
        setRating(rating);
    }


    const handleComment = (event) => {
        // update({
        //     "comment": event.target.value,
        //     "date": Date.now()
        // });
        setComment(event.target.value);
    }


    return (
        <div className="song-card">
            <h1>Review Next?</h1>
            <div className="img-container">
                <img src={data.album.images[0].url} className="card-img-top" />
            </div>
            <div className="card-body">

                <h5 className="card-title">{data.name}</h5>
                <h6 className="card-text">{data.artists[0].name}</h6>
                <Rating initialValue={rating} onClick={handleRating} style={{ marginBottom: "20px" }} />
                <TextField className="comment"
                    label="Comment"
                    multiline
                    variant="outlined"
                    value={data.comment}
                    onChange={handleComment} />
                {/* <input type="text" className="comment" value={data.comment} onChange={handleComment} /> */}

            </div>
        </div>
    )
};

export default ReviewNext;
