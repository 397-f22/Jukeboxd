import RatingCard from './RatingCard.jsx'

import NewRatingCard from './NewRatingCard.jsx';

import './CardGrid.css';


const CardGrid = ({listOfRatingData}) => (
    <div className="card-grid">
      {
        listOfRatingData.map(songData => <RatingCard data={songData}/>)

      }
      <NewRatingCard/>
    </div>
  );
  
  export default CardGrid;