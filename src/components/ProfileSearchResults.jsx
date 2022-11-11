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

    const [highlighted, setHighlighted] = useState(-1);

    return <div className='profile-search-results'>
        {results.map((profile, i) => {
            const profilePicture = getUser(profile.userId, spotify);
            const defaultPicture = "https://i.pinimg.com/originals/f4/ad/6b/f4ad6b120817d2eecae26e07d415de97.jpg";

            const onClick = (event) => {
                if (event.detail === 1) {
                    setHighlighted(i);
                }
                else if (event.detail >= 2) {
                    goToProfile(profile);
                }
                return;
            }
        
            return <div className='profile' key={i} onClick={onClick} 
                        style={highlighted === i ? 
                            {border: "solid", color: "red", borderRadius: "5px", padding: "5px", cursor: "pointer"} : 
                            {padding: "5px", cursor: "pointer"}}>
                <img className="profile-image" src={profilePicture !== "" ? profilePicture : defaultPicture}></img>
                <span className="profile-name">{profile.displayName}</span>
            </div>
        })}
    </div>;
}

export default ProfileSearchResults;