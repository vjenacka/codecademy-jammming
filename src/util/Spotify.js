let userAccessToken = "";
const clientID = "83c122ad75084a728a71fe501e36dab2";
const redirectURI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (
      userAccessToken === "" &&
      window.location.href === "http://localhost:3000/"
    ) {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }

    let matchToken = window.location.href.match(/access_token=([^&]*)/);
    let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
    userAccessToken = matchToken[1];

    window.setTimeout(() => (userAccessToken = ""), expiresIn[1] * 1000);
    window.history.pushState("Access Token", null, "/");
  },
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
      });
  },
};

export default Spotify;
