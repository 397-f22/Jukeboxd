import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Feed from './Feed.jsx'

const FriendPage = ({data, user}) => {
    if(!user){
        return <h1>Please Login first</h1>;
    }

    if (!data || (user && !data[user.id])) {
        return <h1>Data is loading...</h1>;
    }

    return( 
        <div className="container">
            <Feed data={data} user={user} subscriptionIDs={data[user.id].subscriptions}/>
        </div>  
    );
}

export default FriendPage;