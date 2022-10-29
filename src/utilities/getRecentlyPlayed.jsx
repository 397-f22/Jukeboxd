import { getTokenFromnUrl } from "../components/SpotifyLogin";
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";

const getRecentlyPlayed = () => {
    const spotify = new SpotifyWebApi();

    const [spotifyToken, setSpotifyToken] = useState("");

    useEffect(() => {
        console.log("this is what we derived from the URL: ", getTokenFromnUrl())
        //this is for the spotify token
        const _spotifyToken = getTokenFromUrl().access_token;
        //we don't want ot in the URI
        window.location.hash = "";

        console.log("THIS IS OUR SPOTIFY TOKEN ". _spotifyToken)

        if(_spotifyToken){
            setSpotifyToken(_spotifyToken)

            spotify.setAccessToken(_spotifyToken)

            spotify.getMe().then((user) => {
                console.log("DIS YOU: ", user) 
            })
        }
    })
}

export default getRecentlyPlayed;

//TODO: https://javascript.plainenglish.io/how-to-include-spotify-authorization-in-your-react-app-577b63138fd7