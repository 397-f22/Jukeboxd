import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { TextField } from "@mui/material";
import './RatingCard.css';
import Searchbox from './Searchbox';
import Modal from './Modal';

const NewRatingCard = ({data, id, newRatingId, user}) => {
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const [songData, setSongData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const closeModal = () => {
        setOpen(false);
        setSongData([]);
        setSearchTerm('');
    };

    return (
        <div>
            <div onClick={openModal} className="new-song-card">
                <h1>+</h1>
            </div>
            <Modal open={open} close={closeModal}>
                <Searchbox user = {user} id={id} newRatingId={newRatingId} data={data} close={closeModal}
                           songData={songData} setSongData={setSongData}
                           searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </Modal>
        </div>
    )
};

export default NewRatingCard;
