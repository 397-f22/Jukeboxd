import 'bootstrap/dist/css/bootstrap.min.css';
import RatingCard from './RatingCard.jsx'
import NewRatingCard from './NewRatingCard.jsx';
import "./CardGrid.css"
import RatingCardFriend from './RatingCardFriend.jsx';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { FlashOnRounded } from '@mui/icons-material';

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

  const unsubscribeToProfile = () => {
    // remove current page's id from your subscriptions in db
    const new_subscriptions_list = data[user.id].subscriptions.filter((element) => {element !== id})
    console.log("new subs:", new_subscriptions_list.length > 0 ? true : false)
    update(
      {"subscriptions": new_subscriptions_list.length > 0 ? new_subscriptions_list : ""}
    );  
  }

  const isSubscribedTo = data[user.id].subscriptions.includes(id);
  console.log("USER ID", user.id);
  console.log("DATA [ USER ID ]", data[user.id]);
  console.log(isSubscribedTo);

  return id === user.id ? 
    // if it's your page
    <div> {listOfRatingData ?
      <div className="card-grid">
        <NewRatingCard data={listOfRatingData} id={id} newRatingId={listOfRatingData.length}/>

        {listOfRatingData.map((songData, i) =>
          <RatingCard data={songData} id={id} index={i} key={i} />)}
      </div> : 

      <NewRatingCard data={listOfRatingData} id={id} newRatingId={0} />}
    </div> :

    // viewing someone else's page
    <div>
      <div className="friend-profile-header">
        <h1 className="text">{`${data[id].displayName}'s Profile`}</h1>
        {/* switch between subscribe and unsub buttons, based on whether subscribed */}
        {user && 
          <div>
            {isSubscribedTo 
              ? <button className="btn btn-danger" onClick={unsubscribeToProfile}>Unsubscribe</button>
              : <button className="btn btn-success" onClick={subscribeToProfile}>Subscribe</button>}
          </div>
        }
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