import 'bootstrap/dist/css/bootstrap.min.css';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { Button } from "@mui/material";

const DeleteReviewButton = ({id, index, reviewList}) => {
    const [update, result] = useDbUpdate(`/${id}/`);

    const removeReview = () => {
        reviewList.splice(index, 1);

        update(
            {reviews: reviewList}
        );
    }

    return <div>
        <Button style={{ marginTop: "5px" }} onClick={removeReview} variant="contained" color="error">Remove</Button>
    </div>
}

export default DeleteReviewButton;