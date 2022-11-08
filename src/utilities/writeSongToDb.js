import { useRadioGroup } from "@mui/material";

export const writeSongToDb = (data, update, song, user) => {
    // if db has no entries
    if (data === null) {
        update(
            {reviews: [{
                "songName": song.name,
                "artist": song.artist.name,
                "albumCover": song.album.image_url,
                "stars": 0,
                "comment": "",
                "date": Date.now(),
                "likes": "", 
                "author": user.id
            }]}
        );
    }
    else {
        update(
            {reviews: [{
                "songName": song.name,
                "artist": song.artist.name,
                "albumCover": song.album.image_url,
                "stars": 0,
                "comment": "",
                "date": Date.now(),
                "likes": "", 
                "author": user.id
            }, ...data]}
        );
    }
}