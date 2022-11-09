import { DataArrayOutlined } from "@mui/icons-material";
import CardFeed from "./CardFeed";
// takes: arr
const getReviewsFromSubscriptions = (subscriptions, data) => {
    if (subscriptions == "" || subscriptions == undefined) {
        return [];
    }

    return subscriptions.map(id => {
        return data[id].reviews
    }).flat();

}

const reorderReviews = (reviews) => {

    reviews = reviews.filter(function (el) {
        return el != '';
    });
    
    return reviews.sort((a, b) => b.date - a.date);
}

const Feed = ({ user, data }) => {
    if(!user){
        return <h1>Please Login first</h1>;
    }

    if (!data || (user && !data[user.id])) {
        return <h1>Data is loading...</h1>;
    }

    // get list of subscriptions
    const subscriptions = getReviewsFromSubscriptions(data[user.id].subscriptions, data); //array of id strings OR ""
    // then display reviews in that order
    const reviewsToDisplay = reorderReviews(subscriptions)
    

    //return the subscriptions
    return <div>
        <div className="card-grid" style={{ marginBottom: "2rem", marginTop: "2rem" }}>
            {reviewsToDisplay && reviewsToDisplay.map((review, i) =>
                <CardFeed user={user} review={review} key={i} data={data} index={i} />)}
        </div>
    </div>


}

export default Feed;