import React from 'react';
import SpotifyPlaylist from './SpotifyPlaylist';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

class Spotify extends React.Component {

    constructor(props) {
        super(props);

        let urlSearchParam = new URLSearchParams(this.props.location.search);
        let codeAuth = urlSearchParam.has("code") ? urlSearchParam.get("code") : null;

        this.state = {
            code: codeAuth,
        }
    }

    authorizeRequest = () => {
        console.log("permission to requesting auth");
        console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
        console.log(process.env);

        let baseUrl = 'https://accounts.spotify.com';
        let redirectUri = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/spotify`;
        let responseType = 'code';
        let scope = 'playlist-read-private';
        let showDialog = false;

        window.location.href = `${baseUrl}/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}`;
    }

    render() {
        let renderComponent;
        if (this.state.code == null) {
            renderComponent = <button onClick={this.authorizeRequest}>
                Authorize Me!
        </button>;
        }
        else {
            renderComponent = <SpotifyPlaylist code={this.state.code}></SpotifyPlaylist>;
        }

        return (
            <div className="container">
                <h1>Spotify</h1>

                <div>
                    Disclaimer, for accessing my playlist, I need to request Auth from the Spotify using this scope :
                <br></br>
                Later you will be redirected to spotify auth with scope that I stated :)
                </div>
                {renderComponent}
            </div>
        );
    }
}

export default Spotify;