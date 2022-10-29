import './App.css';
import Searchbox from './components/Searchbox.jsx'
import {loginUrl} from './components/SpotifyLogin.jsx'

const Header = () => {

    const backToHomepage = () => {
        window.location.href = "/";
    }

    return <div className="App-header">
        <div className='logo'>
            <img src="https://i.imgur.com/yi37i4n.png" 
                 style={{width: "50px", marginRight: "10px", cursor: "pointer" }}
                 onClick={backToHomepage}/>
            <h1 className="title">Jukeboxd</h1>
        </div>
        <div className='searchbox-container'>
            {/* <Searchbox/> */}
            <a href={loginUrl} id='signInButton'> Sign in with Spotify! </a>
        </div>
    </div>
}

export default Header;