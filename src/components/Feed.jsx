import { DataArrayOutlined } from "@mui/icons-material";


// takes: arr
const getReviewsFromSubscriptions = (subscriptions, data) => {
    if (subscriptions == "" || subscriptions == undefined) {
        return 0;
    }
    
    
    return subscriptions.map(id => data[id].reviews).flat();
    
}

const reorderReviews = () => {

}


const Feed = ({user, data}) => {
// get list of subscriptions
    if (!data || (user && !data[user.id])) {
        return <h1>Data is loading...</h1>;
    }

    const subscriptions = getReviewsFromSubscriptions(data[user.id].subscriptions, data); //array of id strings OR ""
    console.log(subscriptions)
    // const reviewsToDisplay = reorderReviews(subscriptions)

    // then display reviews in that order


}

export default Feed;