
const SpotifyLogin = ({accessToken}) => {
    var Spotify = require('spotify-web-api-js');
    var s = new Spotify();


    var spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken({accessToken});
    spotifyApi
    .getUserPlaylists() // note that we don't pass a user id
    .then(
        function (data) {
        console.log('User playlists', data);
        },
        function (err) {
        console.error(err);
        }
  );

}
