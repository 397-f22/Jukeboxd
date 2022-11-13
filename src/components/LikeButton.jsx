import 'bootstrap/dist/css/bootstrap.min.css';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { Button, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LikeButton = ({user, pageID, review, data}) => {
    const reviewIndex = data[pageID].reviews.findIndex((element) => element.date === review.date);
    const likes = data[pageID].reviews[reviewIndex].likes;
    const isLiking = user ? likes.includes(user.id) : false;  
    //console.log("reviewIndex", reviewIndex)

    const [update, result] = useDbUpdate(`/${pageID}/reviews/${reviewIndex}`);

    const likeReview = () => {
      if (!user) {
        return;
      }

      if (!likes) {
        update(
          {"likes": [user.id]}
        );       
      }
      else {
        update(
          {"likes": [user.id, ...likes]}
        );  
      }
    };
  
    const unlikeReview = () => {
      if (!user) {
        return;
      }

      const new_likes_list = likes.filter((element) => element !== user.id);

      update(
        {"likes": new_likes_list.length > 0 ? new_likes_list : ""}
      );  
    }

    return <div style={{marginTop: "5px", display: "flex", flexDirection: "row", alignItems: "center"}}>
      {isLiking ? 
          <IconButton onClick={unlikeReview} color={"error"} style={{width: "fit-content", alignSelf: "center"}}>
            <FavoriteIcon />
          </IconButton> : 
          <IconButton onClick={likeReview} color={"error"} style={{width: "fit-content", alignSelf: "center"}}>
            <FavoriteBorderIcon />
          </IconButton>} 
      {likes.length ? <div style={{fontSize: "14px"}}>
          {`Liked by ${data[likes[likes.length-1]].displayName} ${likes.length > 1 ? (likes.length == 2 ? `and 1 other` : `and ${likes.length-1} others`) : ``}`}
        </div> : <div/>}
    </div>;
}

export default LikeButton;