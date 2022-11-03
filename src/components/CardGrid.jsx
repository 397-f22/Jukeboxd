import RatingCard from './RatingCard.jsx'

import NewRatingCard from './NewRatingCard.jsx';
import "./CardGrid.css"


const CardGrid = ({listOfRatingData, id}) => {
    return listOfRatingData && <div className="card-grid">
      <NewRatingCard data={listOfRatingData} id={id} newRatingId={listOfRatingData.length}/>

      {
        listOfRatingData.map((songData, i) => 
          <RatingCard data={songData} id={id} index={i} key={i}/>
        )
      }
    </div>
  };
  
  export default CardGrid;