import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import 'isomorphic-unfetch'
import { getPreview } from 'spotify-url-info'; 

const Searchbox = ({data, id, close}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState(undefined);
    const [albumData, setAlbumData] = useState([]);
    const [update, result] = useDbUpdate(`/${id}`);

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const writeSongToDb = () => {
        update(
            {Reviews: [{
                "songName": selectedAlbum.title,
                "artist": selectedAlbum.artist,
                "albumCover": selectedAlbum.image,
                "stars": 0,
                "comment": "",
                "date": Date.now()
            }, ...data]}
        );
        close();
    };

    const search = () => {
        fetch(`//www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=album`)
            .then(response => response.json())
            .then(d => {
                console.log(getPreview)
                getPreview(d.spotify_url).then(data => {
                    console.log(data);
                    //setAlbumData(data);
                });
            });
    }

    useEffect(() => {
        const keyDownHandler = event => {
          console.log('User pressed: ', event.key);
    
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
            {albumData.length > 0 && <div className="search-song">
                {albumData.slice(0, 4).map((song, i) => {
                    return <div className={song === selectedAlbum ? "selected" : "unselected"} onClick={() => setSelectedAlbum(song)} key={i}>
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