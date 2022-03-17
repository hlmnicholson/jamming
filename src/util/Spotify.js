let accessToken;
const clientID = '9b141270a8dd4081bfcb38cbc70106eb';
const redirectURI = 'http://localhost:3000/';

export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    // check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      //This clears the parameters, allowing us to grab and new access token when it expires
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      // The third condition is that the access token variable is empty and is not in the URL.
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;

    }
  },
  search(term) {
    fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization: `Bearer ${accessToken}`}})
      .then(response => response.json())
      .then(data => data.map(tracks => {
        return 
      }))

    //     fetch('https://api.npms.io/v2/search?q=react')
    // .then(response => response.json())
    // .then(data => this.setState({ totalReactPackages: data.total }));
  }

};