import React from 'react';

const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
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

        this.requestSongListDetail = this.requestSongListDetail.bind(this);
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

    async requestSongListDetail(index) {
        let currentPlaylist = this.state.listPlaylist[index];
        console.log(currentPlaylist);

        //USE THIS : Get a Playlist
        let url = `https://api.spotify.com/v1/playlists/${currentPlaylist.id}`;


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

    render() {
        return (
            <div>
                <ListPlaylist listPlaylist={this.state.listPlaylist} detailClick={this.requestSongListDetail}></ListPlaylist>
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
                <b>{Q.name}</b>
            </div>
            <div className="col-md-3">
                {Q.description}
            </div>
            <div>
                <button onClick={() => list.detailClick(index)} className="white-background-button">
                    Song List 🎶
                </button>
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