import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import Searchbox from './Searchbox';
import Modal from './Modal';

const NewRatingCard = ({data, id, newRatingId}) => {
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <div>
            <div onClick={openModal} className="song-card">
                <h1>+</h1>
            </div>
            <Modal open={open} close={closeModal}>
                <Searchbox id={id} newRatingId={newRatingId} data={data} close={closeModal}/>
            </Modal>
        </div>
    )
};

export default NewRatingCard;
