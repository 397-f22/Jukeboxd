import RatingCard from './RatingCard.jsx'

const CardGrid = ({listOfRatingData}) => (
    <div className="card-grid">
      {
        listOfRatingData.map(songData => <RatingCard data={songData}/>)
      }
    </div>
  );
  
  export default CardGrid;