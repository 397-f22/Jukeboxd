import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { writeSongToDb } from '../utilities/writeSongToDb';

const Searchbox = ({data, id, newRatingId, close, songData, setSongData, searchTerm, setSearchTerm}) => {
    
    const [selectedSong, setSelectedSong] = useState(undefined);
    
    const [update, result] = useDbUpdate(`/${id}`);

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const createReview = () => {
        console.log(selectedSong)
        writeSongToDb(data, update, selectedSong);
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
        <div className='searchbox-container'>
            <div className='search-box' style={{marginBottom: "10px"}}>
                <input className='input' type='text' placeholder='Song Name' value={searchTerm} onChange={updateSearchTerm}></input>
                <button className='search-button' onClick={search}>Search</button>
            </div>
            {songData.length > 0 && <div className='search-song'>
                {songData.slice(0, 4).map((song, i) => {
                    return <div className={song === selectedSong ? 'selected' : 'unselected'} onClick={() => setSelectedSong(song)} key={i}>
                        <img src={song.album.image_url} className='album-cover' />
                        <div className='info'>
                            <div>{song.name}</div>
                            <div>{song.artist.name}</div>
                        </div>
                    </div>
                })}
                <button className='search-button' onClick={createReview} style={{marginTop: "10px"}}>
                    Create Review
                </button>
            </div>}
        </div>
    );
}

export default Searchbox;