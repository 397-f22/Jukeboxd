import { Button } from "@mui/material";
import { useState } from "react";

const getUser = (userId, spotify) => {
    const [url, setUrl] = useState("");
    spotify.getUser(userId).then((user) => {
        setUrl(user.images.length > 0 ? user.images[0].url : "");
    }).catch((err) => {

    })
    
    return url;
}

const ProfileSearchResults = ({results, spotify}) => {
    if (!results) {
        return <div>Data is loading...</div>;
    }
    const goToProfile = (profile) => {
        window.location.href = `/profile/${profile.userId}`;
    }

    return <div className='profile-search-results'>
        {results.map((profile, i) => {
            const profilePicture = getUser(profile.userId, spotify);
            const defaultPicture = "https://i.pinimg.com/originals/f4/ad/6b/f4ad6b120817d2eecae26e07d415de97.jpg";
            return <div className='profile' key={i}>
                <img className="profile-image" src={profilePicture !== "" ? profilePicture : defaultPicture}></img>
                <span className="profile-name">{profile.displayName}</span>
                <Button variant="outlined" color="success" onClick={()=>goToProfile(profile)}>Go To Profile</Button>
            </div>
        })}
    </div>;
}

export default ProfileSearchResults;