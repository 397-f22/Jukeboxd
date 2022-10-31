import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import Searchbox from './Searchbox';
import Modal from './Modal';

// const formatPrice = new Intl.NumberFormat([], { style: 'currency', currency: 'USD' }).format;


const NewRatingCard = ({ data }) => {

    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);



    return (
        <div>
            <div onClick={openModal} className="card m-1 p-2">
                <h1>+</h1>
            </div>
            <Modal open={open} close={closeModal}><Searchbox /></Modal>
        </div>
    )
};

export default NewRatingCard;
