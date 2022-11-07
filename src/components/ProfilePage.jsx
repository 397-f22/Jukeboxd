import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CardGrid from './CardGrid.jsx'
import { useDbData, useDbUpdate } from '../utilities/firebase.js';

const ProfilePage = ({id, user, data}) => {
    // if db has data for both your id and the page's id, show the profile page
    return (data && (data[id] && (!user || data[user.id]))) && <div className="container" style={{ marginTop: "2rem", }}>
        <CardGrid user={user} data={data} id={id} />
        <div style={{ height: "100px" }} />
    </div>;
}

export default ProfilePage;