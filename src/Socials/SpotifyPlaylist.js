import React from 'react';

const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

class SpotifyPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: {
                access_token: null,
                token_type: null,
                scope: null,
                refresh_token: null,
            },
            listPlaylist: []
        }
    }

    async componentDidMount() {
        await this.getPlaylist();
    }

    getPlaylist = async () => {
        await this.requestToken();

        let user_id = 'eagarsatya';
        let url = `https://api.spotify.com/v1/users/${user_id}/playlists`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token.access_token}`,
            },
        };

        const response = await fetch(url, requestOptions);

        if (response.ok) {
            let listPlaylist = await response.json();
            this.setState({ listPlaylist: listPlaylist.items });
        }
        else {
            this.props.invalidCodeHandler();
        }
    }

    requestToken = async () => {
        let url = 'https://accounts.spotify.com/api/token';

        let clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        let clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

        let base64 = btoa(`${clientId}:${clientSecret}`);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${base64}`,
            },
            body: `grant_type=authorization_code&code=${this.props.code}&redirect_uri=${redirectUri}`
        };

        const response = await fetch(url, requestOptions);

        if (response.ok) {
            let data = await response.json();
            this.setState({
                'token': data
            });
        }
        else {
            this.props.invalidCodeHandler();
        }
    }

    render() {
        return (
            <div>
                <ListPlaylist listPlaylist={this.state.listPlaylist}></ListPlaylist>
            </div>
        );
    }
}

function ListPlaylist(list) {
    let playlistDom = list.listPlaylist?.map((Q, index) => (
        <div key={Q.id} className="white-background row mt-4 p-2">
            <div className="col-md-3">
                <img height='100vh' width='100vh' src={Q.images[0]?.url}></img>
            </div>
            <div className="col-md-3">
                {Q.name}
            </div>
            <div className="col-md-3">
                {Q.description}
            </div>
            <div>
                Detail Button
            </div>
        </div>
    ))

    return (
        <div>
            List Playlist
            {playlistDom}
        </div>
    );
}

export default SpotifyPlaylist;