import React from 'react';

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
        let listPlaylist = await response.json();

        this.setState({ listPlaylist: listPlaylist.items });
    }

    requestToken = async () => {
        let url = 'https://accounts.spotify.com/api/token';
        let redirectUri = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/spotify`;

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
        let data = await response.json();
        this.setState({
            token: data
        })
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
        <div key={Q.id} className="row mt-4 p-2 blue-style">
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