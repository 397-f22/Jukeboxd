import 'bootstrap/dist/css/bootstrap.min.css';
import { useDbData, useDbUpdate } from '../utilities/firebase';
import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteReviewButton = ({id, reviewList, review}) => {
    const [update, result] = useDbUpdate(`/${id}/`);

    const removeReview = () => {
        const newReviewsList = reviewList.filter((element) => element !== review);
        //console.log(reviewList, newReviewsList)
        update(
            {"reviews": newReviewsList.length > 0 ? newReviewsList : ""}
        );  
    }

    return <IconButton onClick={removeReview} style={{ marginTop: "5px" }}>
        <DeleteIcon />
    </IconButton>
    // <Button   variant="contained" color="error">Remove</Button>
}

export default DeleteReviewButton;