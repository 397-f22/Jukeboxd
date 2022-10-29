import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';

// const formatPrice = new Intl.NumberFormat([], { style: 'currency', currency: 'USD' }).format;

const searchRatingCard = () => {

    return ( 
        <div className='searchbox-container'>
            <Searchbox/>
        </div>
    )
};

const newRatingCard = ({data}) => {

    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);


    
    return (
        <div onClick = {searchRatingCard}className="card m-1 p-2">
            <h1>+</h1>
        </div>
    )
};

export default newRatingCard;
