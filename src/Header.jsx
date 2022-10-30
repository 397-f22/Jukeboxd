import './App.css';
import Searchbox from './components/Searchbox.jsx'
import { loginUrl, getTokenFromUrl} from './utilities/SpotifyLogin.jsx'
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";

const Header = () => {
    const spotify = new SpotifyWebApi();
    const [spotifyToken, setSpotifyToken] = useState("");
    const [user, setUser] = useState({});

    const backToHomepage = () => {
        window.location.href = "/";
    }

    useEffect(() => {
        console.log("this is what we derived from the URL: ", getTokenFromUrl())
        //this is for the spotify token
        const _spotifyToken = getTokenFromUrl().access_token;
        //we don't want it in the URI
        window.location.hash = "";

        console.log("THIS IS OUR SPOTIFY TOKEN ". _spotifyToken)

        if(_spotifyToken){
            setSpotifyToken(_spotifyToken)
            console.log(_spotifyToken)

            spotify.setAccessToken(_spotifyToken)

            spotify.getMe().then((user) => {
                console.log("DIS YOU: ", user) 

                setUser(user);
            })
        }
    })

    return <div className="App-header">
        <div className='logo'>
            <img src="https://i.imgur.com/yi37i4n.png" 
                 style={{width: "50px", marginRight: "10px", cursor: "pointer" }}
                 onClick={backToHomepage}/>
            <h1 className="title">Jukeboxd</h1>
        </div>
        <div className='searchbox-container'>
            {/* <Searchbox/> */}
            {spotifyToken != "" ? "Hi, " + user.display_name : <a href={loginUrl} id='signInButton'> Sign in with Spotify! </a>}
            
        </div>
    </div>
}

export default Header;