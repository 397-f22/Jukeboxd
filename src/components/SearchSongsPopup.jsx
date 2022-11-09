import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { writeSongToDb } from '../utilities/writeSongToDb';
import { Fab, TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchSongsPopup = ({data, id, newRatingId, close, songData, setSongData, searchTerm, setSearchTerm, user}) => {
    const [selectedSong, setSelectedSong] = useState(undefined);
    const [update, result] = useDbUpdate(`/${id}`);

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const createReview = () => {
        //console.log(selectedSong)
        writeSongToDb(data, update, selectedSong, user);
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
                <TextField
                    hiddenLabel
                    id="searchbox-song"
                    placeholder="Song Name"
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
                {/* <input className='input' type='text' placeholder='Song Name' value={searchTerm} onChange={updateSearchTerm}></input> */}
                {/* <button className='search-button' onClick={search}>Search</button> */}
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
                <Button variant="outlined" color="success" onClick={createReview} style={{marginTop: "10px"}}>
                    Create Review
                </Button>
                {/* <button className='search-button' onClick={createReview} style={{marginTop: "10px"}}>
                    Create Review
                </button> */}
            </div>}
        </div>
    );
}

export default SearchSongsPopup;