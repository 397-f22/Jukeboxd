import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CardGrid from './CardGrid.jsx'
import { useDbData, useDbUpdate } from '../utilities/firebase.js';

const ProfilePage = (props) => {
    const id = props.id;
    const user = props.user;
    const [data, error] = useDbData(`/${id}/Reviews`);
    console.log(user);
    return id === user.id ? <div className="container" style={{ marginTop: "2rem", }}>
        <CardGrid user={user} listOfRatingData={data} id={id} />
        <div style={{ height: "100px" }} />
    </div> : <div>{`Hello ${user.id}!`}</div>;
}

export default ProfilePage;