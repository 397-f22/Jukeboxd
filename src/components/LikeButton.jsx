import 'bootstrap/dist/css/bootstrap.min.css';
import { useDbData, useDbUpdate } from '../utilities/firebase';

const LikeButton = ({user, pageID, review, data}) => {
    const reviewIndex = data[pageID].reviews.findIndex((element) => element.date === review.date)
    //console.log("reviewIndex", reviewIndex)

    const [update, result] = useDbUpdate(`/${pageID}/reviews/${reviewIndex}`);
    
    const findTimestamp = () => {
      
    }

    const likeReview = () => {
      if (!data[pageID].reviews[reviewIndex].likes) {
        update(
          {"likes": [user.id]}
        );       
      }
      else {
        update(
          {"likes": [user.id, ...data[pageID].reviews[reviewIndex].likes]}
        );  
      }
    };
  
    const unlikeReview = () => {
      const new_likes_list = data[pageID].reviews[findTimestamp()].likes.filter((element) => {element !== user.id})
      update(
        {"likes": new_likes_list.length > 0 ? new_likes_list : ""}
      );  
    }

    const isLiking = user ? data[pageID].reviews[reviewIndex].likes.includes(user.id) : false;  

    return isLiking ? <button className="btn btn-danger btn-sm" onClick={unlikeReview}>Unlike</button> : 
                      <button className="btn btn-success btn-sm" onClick={likeReview}>Like</button>
}

export default LikeButton;