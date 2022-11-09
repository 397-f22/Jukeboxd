export const formatDateDifference = (currentDate, olderDate) => {
    const diff = olderDate - currentDate;
    const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'always' });
    var returnValue; 

    if (diff < -31536000000) {
        returnValue = formatter.format(Math.round(diff / 31536000000), 'year');
    }

    else if (diff < -604800000) {
        returnValue = formatter.format(Math.round(diff / 604800000), 'week');
    }

    else if (diff < -86400000) {
        returnValue = formatter.format(Math.round(diff / 86400000), 'day');
    }

    else if (diff < -3600000) {
        returnValue = formatter.format(Math.round(diff / 3600000), 'hour');
    }

    else if (diff < -60000) {
        returnValue = formatter.format(Math.round(diff / 60000), 'minute');
    }

    else if (diff < -1000) {
        returnValue = formatter.format(Math.round(diff / 60000), 'second');
    }

    return returnValue;
} 