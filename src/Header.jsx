import './App.css';
import SearchSongsPopup from './components/SearchSongsPopup.jsx'
import { loginUrl, getTokenFromUrl } from './utilities/SpotifyLogin.jsx'
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";
import { Fab, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from './components/Modal';
import { searchProfiles } from './utilities/searchProfiles.js'
import ProfileSearchResults from './components/ProfileSearchResults'
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ user, setUser, data, recentSongs, setRecentSongs }) => {
    const spotify = new SpotifyWebApi();
    const [spotifyToken, setSpotifyToken] = useState("");
    //check if needs login aggain because every token expires in one hour;
    const [spotifyAuth, setSpotifyAuth] = useState(false);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState();
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => {
        setOpen(false);
        setSearchTerm('');
    };
    
    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const search = () => {
        if(searchTerm != ""){
            const profiles = searchProfiles(data, searchTerm);
            setSearchResults(profiles);
            openModal();
        }
    }

    const backToHomepage = () => {
        window.location.href = "/";
    }

    const login = () => {
        window.location.href = loginUrl;
    }

    const logout = () => {
        setSpotifyAuth(false);
        setSpotifyToken("");
        setUser("");
        window.localStorage.removeItem("spotifyToken");
    }

    //reference: https://javascript.plainenglish.io/how-to-include-spotify-authorization-in-your-react-app-577b63138fd7
    //another reference: https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn
    useEffect(() => {
        //console.log("this is what we derived from the URL: ", getTokenFromUrl())
        //this is for the spotify token
        const hash = window.location.hash
        let spotifyToken = window.localStorage.getItem("spotifyToken")

        if (!spotifyToken && hash) {
            spotifyToken = getTokenFromUrl().access_token;
            //console.log("THIS IS OUR SPOTIFY TOKEN ". spotifyToken)

            //we don't want it in the URI
            window.location.hash = ""
            //store the ttoken in local storage so that every page can access
            window.localStorage.setItem("spotifyToken", spotifyToken)
        }

        if (spotifyToken) {
            setSpotifyToken(spotifyToken)
            setSpotifyAuth(true);
        }

        //get user info
        if (!user && spotifyAuth) {
            spotify.setAccessToken(spotifyToken)
            spotify.getMe().then((user) => {
                //console.log("DIS YOU: ", user)
                setUser(user);

            }).catch((err) => {
                //usually because token expires
                if (err.status == 401) {
                    logout();
                }
            })

            //Just an example to get recentlyplayedtracks
            spotify.getMyRecentlyPlayedTracks().then((data) => {
                recentSongs = data.items.map(song => song.track).slice(0, 4);
                setRecentSongs(recentSongs);
                //console.log(recentSongs);
                //console.log("RECENTLY PLAYED: ", data);
            })
        }
    })

    return <div className="App-header">
        <div className='logo' onClick={backToHomepage} style={{flex: 1}}>
            <img src="https://i.imgur.com/yi37i4n.png"
                style={{ width: "50px", marginRight: "10px", cursor: "pointer" }}
                onClick={backToHomepage} />
            <h1 className="title">Jukeboxd</h1>
        </div>

        <div className='searchbox-container' style={{flex: 1}}>
            <div className='header-search-box'>
                <TextField
                    hiddenLabel
                    id="searchbox-friend"
                    placeholder="Find Friends"
                    value={searchTerm}
                    variant="filled"
                    size="small"
                    color="success"
                    fullWidth
                    onChange={updateSearchTerm}
                />
                <Fab color="success"
                     aria-label="search" 
                     onClick={search} 
                     size="small"
                     style={{ marginLeft: "10px" }}>
                    <SearchIcon />
                </Fab>
                {/* <input className='text-field' type='text' placeholder='Find Friends' value={searchTerm} onChange={updateSearchTerm} style={{flex: 4}}/> */}
                {/* <button className='search-button' onClick={search} style={{flex: 1}}>Search</button> */}
            </div>

            <Modal open={open} close={closeModal} title="Results">
                <ProfileSearchResults results={searchResults}/>
            </Modal>
        </div>

        <div className='searchbox-container' style={{flex: 1}}>
            {/* <Searchbox/> */}
            {spotifyAuth ?
                <div className="authBtn">
                    <div style={{ marginRight: "10px", fontSize: "22px" }}>{"Hi, " + user.display_name}</div>
                    <div>
                        <Fab variant="extended" color="success" onClick={logout} id='logoutButton'>
                            <LogoutIcon sx={{ mr: 1 }} />
                            Log out
                        </Fab>
                    </div>
                </div> :
                <div className="authBtn">
                    <Fab variant="extended" color="success" onClick={login} id='signInButton'>
                        <LoginIcon sx={{ mr: 1 }} />
                        Sign in with Spotify
                    </Fab>
                </div>
            }
        </div>

    </div>
}

export default Header;