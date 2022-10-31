export const authEndpoint = "https://accounts.spotify.com/authorize";

//different by machine
const redirectUri = 'http://localhost:5173/'

// so here is the problem: because we are in development mode,
// users must be explicitly added under the section "Users and Access" in Spotify Dashborad before they can authenticate.
// therefore, we can only access user's data when their emails are added to Spotify Dashborad
const clientId = "0a5700cefade42268aefab52223fbc63"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=mysecretKey&name=somerandomname
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1])
      // console.log(initial)

      return initial
    }, {})
}