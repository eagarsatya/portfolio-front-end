import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

class Spotify extends React.Component {

    async authorizeRequest() {
        console.log("permission to requesting auth");
        console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
        console.log(process.env);

        let baseUrl = 'https://accounts.spotify.com';
        let redirectUri = 'http://localhost:3000/spotify';
        let responseType = 'code';
        let scope = 'playlist-read-private';
        let showDialog = false;

        window.location.href = `${baseUrl}/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}`;

    }

    render() {
        return (
            <div className="container">
                <h1>Spotify</h1>

                <div>
                    Disclaimer, for accessing my playlist, I need to request Auth from the Spotify using this scope :
                <br></br>
                Later you will be redirected to spotify auth with scope that I stated :)
            </div>
                <button onClick={this.authorizeRequest}>
                    Authorize Me!
                </button>
            </div>
        );
    }
}

export default Spotify;