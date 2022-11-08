import { DataArrayOutlined } from "@mui/icons-material";
import CardFeed from "./CardFeed";
// takes: arr
const getReviewsFromSubscriptions = (subscriptions, data) => {
    if (subscriptions == "" || subscriptions == undefined) {
        return 0;
    }


    return subscriptions.map(id => {
        console.log(data[id])
        return data[id].reviews
    }).flat();

}

const reorderReviews = (subscriptions) => {
    return subscriptions.sort((a, b) => b.date - a.date);

}
const Feed = ({ user, data }) => {
    // get list of subscriptions
    if (!data || (user && !data[user.id]) || !user) {
        return <h1>Data is loading...</h1>;
    }
    const subscriptions = getReviewsFromSubscriptions(data[user.id].subscriptions, data); //array of id strings OR ""
    const reviewsToDisplay = reorderReviews(subscriptions)
    console.log(reviewsToDisplay)
    // then display reviews in that order


    //return the subscriptions
    return <div>
        <div className="card-grid" style={{ marginBottom: "2rem" }}>
            {reviewsToDisplay && reviewsToDisplay.map((review, i) =>
                <CardFeed user={user} review={review} key={i} data={data} index={i} />)}
        </div>
    </div>


}

export default Feed;