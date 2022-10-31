import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CardGrid from './CardGrid.jsx'
import { useDbData, useDbUpdate } from '../utilities/firebase.js';

const ProfilePage = (props) =>  {
    const id = props.id;
    const [data, error] = useDbData(`/${id}/Reviews`);
    console.log(data, error, `/${id}/Reviews`);
  
    return <div className="container">
        {data && <CardGrid listOfRatingData={data} id={id}/>}
    </div>;
}

export default ProfilePage;