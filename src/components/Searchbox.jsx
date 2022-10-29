import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SearchPopup from './SearchPopup.jsx'
import Modal from './Modal.jsx'


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

    const search = () => {
        fetch(`//www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track`)
            .then(response => response.json())
            .then(d => {
                //console.log(d);
                setData(d);
            });
    }

    return (
        <div className="searchbox-container">
            <input type="text" placeholder="Search..." value={searchTerm} onChange={updateSearchTerm}></input>
            <button className='button-class' onClick={() => {
                search();

            }}>Search</button>
            {data.length > 0 && <div className="search-song">
                {data.slice(0, 4).map((song, i) => {
                    return <div className={song === selectedSong ? "selected" : "unselected"} onClick={() => props.setSelectedSong(song)} key={i}>
                        <img src={song.album.image_url} className="album-cover" />
                        <div className="info">
                            <div>Song: {song.name}</div>
                            <div>Album: {song.album.name}</div>
                            <div>Artist: {song.artist.name}</div>
                        </div>
                    </div>
                })}
            </div>}
        </div>
    );
}

export default Searchbox;