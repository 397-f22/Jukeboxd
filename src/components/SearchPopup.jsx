import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const SearchPopup = (props) => {
    const data = props.data;

    return (
        <div className="search-song">
            {data.map((song, i) => {
                return <div className={song === props.selectedSong ? "selected" : "unselected"} onClick={() => props.setSelectedSong(song)} key={i}>
                    <img src={song.album.image_url} className="album-cover"/>
                    <div className="info">
                        <div>Song: {song.name}</div>
                        <div>Album: {song.album.name}</div>
                        <div>Artist: {song.artist.name}</div>                    
                    </div>
                </div>
            })}
        </div>
    )

}

export default SearchPopup;