import 'bootstrap/dist/css/bootstrap.min.css';
import RatingCard from './RatingCard.jsx'
import NewRatingCard from './NewRatingCard.jsx';
import "./CardGrid.css"
import RatingCardFriend from './RatingCardFriend.jsx';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import SubscribeButton from './SubscribeButton.jsx';

// id is from the url of the page, user 
const CardGrid = ({ data, user, id: pageID }) => {
  const listOfRatingData = data[pageID].reviews;
  
  return pageID === user.id ? 
    // if it's your page
    <div className="card-grid">
      <NewRatingCard data={listOfRatingData} id={pageID} newRatingId={listOfRatingData.length}/>

      {listOfRatingData && listOfRatingData.map((songData, i) =>
        <RatingCard data={songData} id={pageID} index={i} key={i} />)}
    </div> : 

    // viewing someone else's page
    <div>
      <div className="friend-profile-header">
        <h1 className="text">{`${data[pageID].displayName}'s Profile`}</h1>
        {/* switch between subscribe and unsub buttons, based on whether subscribed */}
        {user ? <SubscribeButton data={data} user={user} pageID={pageID} /> : <div/>}
      </div>

      {listOfRatingData && <div>
        <div className="card-grid">
          {listOfRatingData.map((songData, i) =>
            <RatingCardFriend data={songData} id={pageID} index={i} key={i} />)}
        </div>
      </div>}
    </div>
};

export default CardGrid;