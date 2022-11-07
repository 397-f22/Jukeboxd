import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDbData, useDbUpdate } from '../utilities/firebase.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingCard from './RatingCard.jsx'
import NewRatingCard from './NewRatingCard.jsx';
import RatingCardFriend from './RatingCardFriend.jsx';
import SubscribeButton from './SubscribeButton.jsx';
import ReviewNext from './ReviewNext.jsx';


const ProfilePage = ({id: pageID, user, data, recentSongs}) => {
    // if data (all db data), data[pageID] (data of person's page we're visiting), or data[user.id] 
    // (our data if we're logged in) are undefined then return a message our data is loading
    if (!data || (!data[pageID] || (user && !data[user.id]))) {
        return <h1>Data is loading...</h1>;
    }

    const listOfRatingData = data[pageID].reviews;
    console.log(recentSongs);
    
    return <div className="container" style={{ marginTop: "2rem", }}>
        {pageID === user.id ? 
            // if it's your page
            <div>
                <div className="card-grid">
                    {recentSongs && recentSongs.map((song, i) =>
                        <ReviewNext user={user} data={song} id={pageID} key = {i}/> )}
                </div>
                <div className="card-grid">
                    <NewRatingCard data={listOfRatingData} id={pageID} newRatingId={listOfRatingData.length}/>

                    {listOfRatingData && listOfRatingData.map((songData, i) =>
                        <RatingCard data={songData} id={pageID} index={i} key={i} />)}
                </div>
            </div> : 

            // viewing someone else's page
            <div>
                <div className="friend-profile-header">
                    <h1 className="text">{`${data[pageID].displayName}'s Profile`}</h1>
                    {/* switch between subscribe and unsub buttons, based on whether subscribed */}
                    {user ? <SubscribeButton data={data} user={user} pageID={pageID} /> : <div/>}
                </div>

                <div className="card-grid">
                    {listOfRatingData && listOfRatingData.map((songData, i) =>
                        <RatingCardFriend user={user} songData={songData} id={pageID} index={i} key={i} data={data}/>)}
                </div>
            </div>}
        <div style={{ height: "100px" }} />
    </div>
}

export default ProfilePage;