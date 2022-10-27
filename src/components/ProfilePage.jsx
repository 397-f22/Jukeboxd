import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import RatingCard from './RatingCard.jsx';
import Searchbox from './Searchbox.jsx';

const ProfilePage = () => {
  
    return( 
        <div className="container">
            <RatingCard />
            <Searchbox/>




        </div>  
    );
}

export default ProfilePage;