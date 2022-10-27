import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const Searchbox = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const updateSearchTerm = (event) => {

        setSearchTerm(event.target.value);
    }

    const search = () => {
        fetch(`//www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

    }

    return (
        <div className="container">
            <input type="text" placeholder="Search..." value={searchTerm} onChange={updateSearchTerm}></input>
            <button className='button-class' onClick={search}>Search</button>
        </div>
    );
}

export default Searchbox;