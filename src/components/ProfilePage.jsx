import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CardGrid from './CardGrid.jsx'
import { useDbData, useDbUpdate } from '../utilities/firebase.js';
import NewRatingCard from './NewRatingCard.jsx';

const ProfilePage = ({id, user, data, recentSong, setRecentSong}) => {
    return <div className="container" style={{ marginTop: "2rem", }}>
        <CardGrid user={user} data={data} id={id} recentSong = {recentSong} setRecentSong = {setRecentSong}/>
        <div style={{ height: "100px" }} />
    </div>;
}

export default ProfilePage;