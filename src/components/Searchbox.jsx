import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const Searchbox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSong, setSelectedSong] = useState(undefined);
    const [data, setData] = useState(undefined);

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const search = () => {
        fetch(`//www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }

    return (
        <div className="container">
            <input type="text" placeholder="Search..." value={searchTerm} onChange={updateSearchTerm}></input>
            <button className='button-class' onClick={search}>Search</button>
            {data && data.map(song => {
                <div className={song === selectedSong ? "selected-song" : "unselected-song"} onClick={() => setSelectedSong(song)}>
                    <div>{song.name}</div>
                    <div>{song.artist.name}</div>
                    <div>{song.album.name}</div>
                    <div>{song.image.image_url}</div>
                </div>
            })}
        </div>
    );
}

export default Searchbox;