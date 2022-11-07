import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useDbData, useDbUpdate } from '../utilities/firebase';

const Searchbox = ({data, id, newRatingId, close}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSong, setSelectedSong] = useState(undefined);
    const [songData, setSongData] = useState([]);
    const [update, result] = useDbUpdate(`/${id}`);

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const writeSongToDb = () => {
        console.log(selectedSong)
        // if db has no entries
        if (data === null) {
            update(
                {reviews: [{
                    "songName": selectedSong.name,
                    "artist": selectedSong.artist.name,
                    "albumCover": selectedSong.album.image_url,
                    "stars": 0,
                    "comment": "",
                    "date": Date.now(),
                    "likes": ""
                }]}
            );
        }
        else {
            update(
                {reviews: [{
                    "songName": selectedSong.name,
                    "artist": selectedSong.artist.name,
                    "albumCover": selectedSong.album.image_url,
                    "stars": 0,
                    "comment": "",
                    "date": Date.now(),
                    "likes": ""
                }, ...data]}
            );
        }
        close();
    };

    const search = () => {
        fetch(`//www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track`)
            .then(response => response.json())
            .then(d => {
                setSongData(d);
            });
    }

    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Enter') {
            search();
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

    return (
        <div className="searchbox-container">
            <div style={{display: "flex", flexDirection: "row"}}>
                <input type="text" placeholder="Song Name" value={searchTerm} onChange={updateSearchTerm} className="input"></input>
                <button className='search-button' onClick={() => {
                    search();
                }}>Search</button>
            </div>
            {songData.length > 0 && <div className="search-song">
                {songData.slice(0, 4).map((song, i) => {
                    return <div className={song === selectedSong ? "selected" : "unselected"} onClick={() => setSelectedSong(song)} key={i}>
                        <img src={song.album.image_url} className="album-cover" />
                        <div className="info">
                            <div>{song.name}</div>
                            <div>{song.artist.name}</div>
                        </div>
                    </div>
                })}
                <button className='search-button' onClick={writeSongToDb}>
                    Create Review
                </button>
            </div>}
        </div>
    );
}

export default Searchbox;