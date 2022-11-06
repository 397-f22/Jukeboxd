import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CardGrid from './CardGrid.jsx'
import { useDbData, useDbUpdate } from '../utilities/firebase.js';

const ProfilePage = ({id, user, data}) => {
    return data && <div className="container" style={{ marginTop: "2rem", }}>
        <CardGrid user={user} data={data} id={id} />
        <div style={{ height: "100px" }} />
    </div>;
}

export default ProfilePage;