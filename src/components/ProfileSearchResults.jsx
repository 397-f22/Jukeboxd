const ProfileSearchResults = ({results}) => {
    if (!results) {
        return <div>Data is loading...</div>;
    }

    return <div className='profile-search-results'>
        {results.map((profile) => 
            <div className='profile'>
                {profile.displayName}
            </div>
        )}
    </div>;
}

export default ProfileSearchResults;