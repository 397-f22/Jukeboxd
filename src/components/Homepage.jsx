import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Feed from './Feed.jsx'

const Homepage = ({data, user}) => {
    if (!data || (user && !data[user.id])) {
        return <h1>Data is loading...</h1>;
    }

    return( 
        <div className="container">
            <h2 style={{marginTop: "2rem"}}>Recent reviews</h2>
            <Feed data={data} user={user} subscriptionIDs={Object.keys(data)}/>
        </div>  
    );
}

export default Homepage;