import 'bootstrap/dist/css/bootstrap.min.css';
import RatingCard from './RatingCard.jsx'
import NewRatingCard from './NewRatingCard.jsx';
import "./CardGrid.css"
import RatingCardFriend from './RatingCardFriend.jsx';
import { useDbData, useDbUpdate } from '../utilities/firebase';

// id is from the url of the page, user 
const CardGrid = ({ data, user, id }) => {
  const listOfRatingData = data ? data[id].reviews : undefined;
  const [update, result] = useDbUpdate(`/${user.id}`);

  const subscribeToProfile = () => {
    console.log(id, !data[user.id].subscriptions);
    if (!data[user.id].subscriptions) {
      update(
        {"subscriptions": [id]}
      );       
    }
    else {
      update(
        {"subscriptions": [id, ...data[user.id].subscriptions]}
      );  
    }
  };

  console.log(data);

  return id === user.id ? 
    <div> {listOfRatingData ?
      <div className="card-grid">
        <NewRatingCard data={listOfRatingData} id={id} newRatingId={listOfRatingData.length}/>

        {listOfRatingData.map((songData, i) =>
          <RatingCard data={songData} id={id} index={i} key={i} />)}
      </div> : 

      <NewRatingCard data={listOfRatingData} id={id} newRatingId={0} />}
    </div> :

    <div>
      <div className="friend-profile-header">
        <h1 className="text">{`${data[id].displayName}'s Profile`}</h1>
        {user && <button className="btn btn-success" onClick={subscribeToProfile}>Subscribe</button>}
      </div>

      {listOfRatingData && <div>
        <div className="card-grid">
          {listOfRatingData.map((songData, i) =>
            <RatingCardFriend data={songData} id={id} index={i} key={i} />)}
        </div>
      </div>}
    </div>    
};

export default CardGrid;