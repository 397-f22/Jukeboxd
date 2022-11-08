import stringSimilarity from 'string-similarity';

const getDisplayNames = (data) => {
    return Object.keys(data).map(id => data[id].displayName);
};

const getIdFromDisplayName = (data, displayName) => {
    return Object.keys(data).map(id => data[id]).filter(person => person.displayName === displayName)[0];
};

export const getBestSearchMatch = (data, searchTerm) => {
    const matches = stringSimilarity.findBestMatch(searchTerm, getDisplayNames(data)).ratings;
    return matches.sort((a, b) => b.rating-a.rating).map((rating) => getIdFromDisplayName(data, rating.target));
};