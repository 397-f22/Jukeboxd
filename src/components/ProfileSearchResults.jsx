import { Button } from "@mui/material";

const getUser = async (userId, spotify) => {
    return await spotify.getUser(userId).then((user) => {
        console.log(user.images[0].url)
        return user.images[0].url
    }).catch((err) => {
        //usually because token expires
        if (err.status == 401) {
            logout();
        }
    })
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
                <span className="profile-name">{profile.displayName}</span>
                <Button variant="outlined" color="success" onClick={()=>goToProfile(profile)}>Go To Profile</Button>
                <img source={getUser(profile.userId, spotify)}></img>
            </div>
        )}
    </div>;
}

export default ProfileSearchResults;