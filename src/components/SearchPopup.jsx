import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const SearchPopup = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSong, setSelectedSong] = useState(undefined);
    const data = props.data;

    return (
        data.map(song => {
            console.log(data)
            return <div className={song === selectedSong ? "selected-song" : "unselected-song"} onClick={() => setSelectedSong(song)}>
                <div>{song.name}</div>
                <div>{song.artist.name}</div>
                <div>{song.album.name}</div>
                <div>{song.album.image_url}</div>
            </div>
        })
    )

}

export default SearchPopup;