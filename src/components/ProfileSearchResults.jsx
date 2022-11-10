import { Button } from "@mui/material";

const ProfileSearchResults = ({results}) => {
    if (!results) {
        return <div>Data is loading...</div>;
    }

    const goToProfile = (profile) => {
        window.location.href = `/profile/${profile.userId}`;
    }

    return <div className='profile-search-results'>
        {results.map((profile, i) => 
            <div className='profile' key={i}>
                <span className="profile-name">{profile.displayName}</span>
                <Button variant="outlined" color="success" onClick={()=>goToProfile(profile)}>Go To Profile</Button>
            </div>
        )}
    </div>;
}

export default ProfileSearchResults;