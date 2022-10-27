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
        <div className="container">
            <input type="text" placeholder="Search..." value={searchTerm} onChange={updateSearchTerm}></input>
            <button className='button-class' onClick={() => {
                search();
                openModal();
            }}>Search</button>
            <Modal open={open} close={closeModal} title="Select Song">
                <SearchPopup data={data} selectedSong={selectedSong} setSelectedSong={setSelectedSong}/>
            </Modal>
        </div>
    );
}

export default Searchbox;