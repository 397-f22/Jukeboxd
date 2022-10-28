import RatingCard from './RatingCard.jsx'
import './CardGrid.css';

const CardGrid = ({listOfRatingData}) => (
    <div className="card-grid">
      {
        listOfRatingData.map(songData => <RatingCard data={songData}/>)
      }
    </div>
  );
  
  export default CardGrid;