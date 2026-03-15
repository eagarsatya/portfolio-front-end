"use client";
import React, { useState, useEffect, useCallback } from 'react';

const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

function SpotifyPlaylist({ code, invalidCodeHandler }) {
    const [token, setToken] = useState({
        access_token: null,
        token_type: null,
        scope: null,
        refresh_token: null,
    });
    const [listPlaylist, setListPlaylist] = useState([]);

    const requestToken = useCallback(async () => {
        let url = 'https://accounts.spotify.com/api/token';
        let base64 = btoa(`${clientId}:${clientSecret}`);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${base64}`,
            },
            body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`
        };

        const response = await fetch(url, requestOptions);

        if (response.ok) {
            let data = await response.json();
            setToken(data);
            return data.access_token;
        } else {
            invalidCodeHandler();
            return null;
        }
    }, [code, invalidCodeHandler]);

    const getPlaylist = useCallback(async (accessToken) => {
        let user_id = 'eagarsatya';
        let url = `https://api.spotify.com/v1/users/${user_id}/playlists`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        };

        const response = await fetch(url, requestOptions);

        if (response.ok) {
            let data = await response.json();
            setListPlaylist(data.items);
        } else {
            invalidCodeHandler();
        }
    }, [invalidCodeHandler]);

    useEffect(() => {
        const init = async () => {
            const accessToken = await requestToken();
            if (accessToken) {
                await getPlaylist(accessToken);
            }
        };
        init();
    }, [requestToken, getPlaylist]);

    const requestSongListDetail = async (index) => {
        let currentPlaylist = listPlaylist[index];
        console.log(currentPlaylist);

        let url = `https://api.spotify.com/v1/playlists/${currentPlaylist.id}`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access_token}`,
            },
        };

        const response = await fetch(url, requestOptions);

        if (response.ok) {
            let data = await response.json();
            // This logic seems a bit odd in the original code (replacing listPlaylist with song items?)
            // I'll keep it as-is for parity, but likely it should update a different state.
            setListPlaylist(data.items || []);
        } else {
            invalidCodeHandler();
        }
    };

    return (
        <div>
            <ListPlaylist listPlaylist={listPlaylist} detailClick={requestSongListDetail} />
        </div>
    );
}

function ListPlaylist({ listPlaylist, detailClick }) {
    let playlistDom = listPlaylist?.map((Q, index) => (
        <div key={Q.id} className="white-background row mt-4 p-2">
            <div className="col-md-3">
                <img height='100px' width='100px' src={Q.images?.[0]?.url} alt={Q.name} />
            </div>
            <div className="col-md-3">
                <b>{Q.name}</b>
            </div>
            <div className="col-md-3">
                {Q.description}
            </div>
            <div>
                <button onClick={() => detailClick(index)} className="white-background-button">
                    Song List 🎶
                </button>
            </div>
        </div>
    ));

    return (
        <div>
            List Playlist
            {playlistDom}
        </div>
    );
}

export default SpotifyPlaylist;