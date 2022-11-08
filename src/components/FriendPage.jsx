import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Feed from './Feed.jsx'

const FriendPage = ({data, user}) => {
    return( 
        <div className="container">
            <Feed data={data} user={user}/>
        </div>  
    );
}

export default FriendPage;