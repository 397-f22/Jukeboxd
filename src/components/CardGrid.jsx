import 'bootstrap/dist/css/bootstrap.min.css';
import RatingCard from './RatingCard.jsx'
import NewRatingCard from './NewRatingCard.jsx';
import "./CardGrid.css"
import RatingCardFriend from './RatingCardFriend.jsx';
import ReviewNext from './ReviewNext.jsx';


const CardGrid = ({ data, user, id, recentSong, setRecentSong }) => {
  const listOfRatingData = data ? data[id].reviews : undefined;

  const subscribeToProfile = () => {

  };

  return id === user.id ?
    <div> {listOfRatingData ?
      <div className="card-grid">

        <NewRatingCard data={listOfRatingData} id={id} newRatingId={listOfRatingData.length} />
        {listOfRatingData.map((songData, i) =>
          <RatingCard data={songData} id={id} index={i} key={i} />)}
        <ReviewNext user={user} data={recentSong} id={id} />
      </div> :
      <NewRatingCard data={listOfRatingData} id={id} newRatingId={0} />}
    </div> :
    listOfRatingData && <div>
      <div className="friend-profile-header">
        <h1 className="text">{`${data[id].displayName}'s Profile`}</h1>
        {user && <button className="btn btn-success" onClick={subscribeToProfile}>Subscribe</button>}
      </div>
      <div className="card-grid">
        {listOfRatingData.map((songData, i) =>
          <RatingCardFriend data={songData} id={id} index={i} key={i} />)}
      </div>
    </div>
};

export default CardGrid;