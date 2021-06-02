import React from 'react';
import SpotifyPlaylist from './SpotifyPlaylist';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

class Spotify extends React.Component {

    constructor(props) {
        super(props);

        let urlSearchParam = new URLSearchParams(this.props.location.search);
        let codeAuth = urlSearchParam.has("code") ? urlSearchParam.get("code") : null;

        this.state = {
            code: codeAuth,
        }

        this.invalidCodeHandler = this.invalidCodeHandler.bind(this);

    }

    invalidCodeHandler() {
        window.location.href = redirectUri;
    }

    authorizeRequest = () => {
        let baseUrl = 'https://accounts.spotify.com';
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
            renderComponent = <SpotifyPlaylist invalidCodeHandler={this.invalidCodeHandler} code={this.state.code}></SpotifyPlaylist>;
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