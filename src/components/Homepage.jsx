import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Feed from './Feed.jsx'

const Homepage = ({data, user}) => {
    if (!data || (user && !data[user.id])) {
        return <h1>Data is loading...</h1>;
    }

    return( 
        <div className="container">
           <Feed data={data} user={user} subscriptionIDs={Object.keys(data)}/>
        </div>  
    );
}

export default Homepage;