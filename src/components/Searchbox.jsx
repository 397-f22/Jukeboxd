import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useState } from 'react';
import SearchPopup from './SearchPopup.jsx';
import Modal from './Modal.jsx';
import { OutlinedInput, Fab } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Searchbox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSong, setSelectedSong] = useState(undefined);
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const writeSongToDb = () => {
        
    };

    const search = () => {

        fetch(`//www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track`)
            .then(response => response.json())
            .then(d => {
                console.log(d);
                setData(d);

        if(searchTerm){
            fetch(`//www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track`)
                .then(response => response.json())
                .then(d => {
                    //console.log(d);
                    setData(d);

            });
            openModal();
        }
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
            <div>
                <input type="text" placeholder="Search..." value={searchTerm} onChange={updateSearchTerm} className="input"></input>
                <button className='search-button' onClick={() => {
                    search();
                }}>Search</button>
            </div>
            {data.length > 0 && <div className="search-song">
                {data.slice(0, 4).map((song, i) => {
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