import { Button } from "@mui/material";
import { useState } from "react";

const getUser = (userId, spotify) => {
    const [url, setUrl] = useState("");
    spotify.getUser(userId).then((user) => {
        setUrl(user.images[0].url);
        console.log(user)
        console.log(user.images[0].url)
    }).catch((err) => {

    })
    return url;
}

const ProfileSearchResults = ({results, spotify}) => {
    console.log()
    if (!results) {
        return <div>Data is loading...</div>;
    }
    const goToProfile = (profile) => {
        window.location.href = `/profile/${profile.userId}`;
    }

    return <div className='profile-search-results'>
        {results.map((profile, i) => 
            <div className='profile' key={i}>
                <img className="profile-image" src={getUser(profile.userId, spotify)}></img>
                <span className="profile-name">{profile.displayName}</span>
                <Button variant="outlined" color="success" onClick={()=>goToProfile(profile)}>Go To Profile</Button>
            </div>
        )}
    </div>;
}

export default ProfileSearchResults;