let userAccessToken = "";
const clientID = "83c122ad75084a728a71fe501e36dab2";
const redirectURI = "https://my-jammming-codecademy.surge.sh/";

const Spotify = {
  getAccessToken() {
    //gets a access token if none or if token is not in URL
    if (
      userAccessToken === "" &&
      window.location.href === "https://my-jammming-codecademy.surge.sh/"
    ) {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
    //matches string in the URL
    let matchToken = window.location.href.match(/access_token=([^&]*)/);
    let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
    userAccessToken = matchToken[1];
    //sets token expiration time
    window.setTimeout(() => (userAccessToken = ""), expiresIn[1] * 1000);
    window.history.pushState("Access Token", null, "/");
  },
  //get request for the tracks matching the search term
  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${userAccessToken}` },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        const tracks = data.tracks.items.map(item => {
          return {
            id: item.id,
            name: item.name,
            artist: item.artists[0].name,
            album: item.album.name,
            URI: item.uri,
          };
        });
        return tracks;
      })
      .catch(error => {
        console.log(error);
      });
  },
  async savePlaylist(playlistName, URIarr) {
    if (playlistName === "" && URIarr === []) return;

    const currentToken = userAccessToken;
    const headers = { headers: { Authorization: `Bearer ${currentToken}` } };
    let userID;
    let playlistID;
    let snapshotID;
    //fetch user ID
    try {
      const resData = await fetch("https://api.spotify.com/v1/me", headers);
      const data = await resData.json();
      userID = data.id;
    } catch (err) {
      console.log(err);
    }

    //gets the playlist ID
    try {
      const playlistIDjson = await fetch(
        `https://api.spotify.com/v1/users/${userID}/playlists`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${currentToken}`,
          },
          body: JSON.stringify({
            name: playlistName,
            description: "My playlist",
          }),
        }
      );
      const playlistIDdata = await playlistIDjson.json();
      playlistID = playlistIDdata.id;
    } catch (err) {
      console.log(err);
    }

    //get the new playlist ID with updated URIs
    try {
      const data = await fetch(
        `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${currentToken}`,
          },
          body: JSON.stringify({
            uris: URIarr,
          }),
        }
      );
      const resData = await data.json();
      snapshotID = resData.snapshot_id;
    } catch (err) {
      console.log(err);
    }
  },
};

export default Spotify;
