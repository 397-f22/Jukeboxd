import 'bootstrap/dist/css/bootstrap.min.css';
import { useDbData, useDbUpdate } from '../utilities/firebase';

const SubscribeButton = ({data, user, pageID}) => {
    const [update, result] = useDbUpdate(`/${user.id}`);

    const subscribeToProfile = () => {
      if (!data[user.id].subscriptions) {
        update(
          {"subscriptions": [pageID]}
        );       
      }
      else {
        update(
          {"subscriptions": [pageID, ...data[user.id].subscriptions]}
        );  
      }
    };
  
    const unsubscribeToProfile = () => {
      // remove current page's id from your subscriptions in db
      const new_subscriptions_list = data[user.id].subscriptions.filter((element) => {element !== pageID})
      update(
        {"subscriptions": new_subscriptions_list.length > 0 ? new_subscriptions_list : ""}
      );  
    }
  
    const isSubscribedTo = user ? data[user.id].subscriptions.includes(pageID) : false;  

    return <div>
        {isSubscribedTo 
            ? <button className="btn btn-danger btn-lg" onClick={unsubscribeToProfile}>Unsubscribe</button>
            : <button className="btn btn-success btn-lg" onClick={subscribeToProfile}>Subscribe</button>}
    </div>
}

export default SubscribeButton;