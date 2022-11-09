import 'bootstrap/dist/css/bootstrap.min.css';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { Button } from "@mui/material";

const DeleteReviewButton = ({id, reviewList, review}) => {
    const [update, result] = useDbUpdate(`/${id}/`);

    const removeReview = () => {
        const newReviewsList = reviewList.filter((element) => element !== review);
        //console.log(reviewList, newReviewsList)
        update(
            {"reviews": newReviewsList.length > 0 ? newReviewsList : ""}
        );  
    }

    return <div>
        <Button style={{ marginTop: "5px" }} onClick={removeReview} variant="contained" color="error">Remove</Button>
    </div>
}

export default DeleteReviewButton;