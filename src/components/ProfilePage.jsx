import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import RatingCard from './RatingCard.jsx';
import Searchbox from './Searchbox.jsx';
import CardGrid from './CardGrid.jsx'

const ProfilePage = () => {
    const dummydata = {
        "id": "1xzi1Jcr7mEi9K2RfzLOqS",
        "name": "CUFF IT",
        "preview_url": "https://p.scdn.co/mp3-preview/a94e147cf3614420c220cf40d46de1bf1a76f9dc?cid=9697a3a271d24deea38f8b7fbfa0e13c",
        "album": {
        "id": "6FJxoadUE4JNVwWHghBwnb",
        "name": "RENAISSANCE",
        "image_url": "https://i.scdn.co/image/ab67616d0000b2730e58a0f8308c1ad403d105e7"
        },
        "artist": {
        "id": "6vWDO969PvNqNYHIOW5v0m",
        "name": "Beyoncé"
        }
      }
  
    return( 
        <div className="container"> 
            <CardGrid listOfRatingData={[dummydata, dummydata, dummydata, dummydata, dummydata]}/>
        </div>  
    );
}

export default ProfilePage;