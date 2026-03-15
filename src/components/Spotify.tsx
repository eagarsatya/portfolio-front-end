"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import SpotifyPlaylist from './SpotifyPlaylist';

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

function Spotify() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    const invalidCodeHandler = () => {
        window.location.href = redirectUri;
    };

    const authorizeRequest = () => {
        let baseUrl = 'https://accounts.spotify.com';
        let responseType = 'code';
        let scope = 'playlist-read-private';

        window.location.href = `${baseUrl}/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}`;
    };

    let renderComponent;
    if (code == null) {
        renderComponent = (
            <button onClick={authorizeRequest} className="white-background-button">
                Authorize Me!
            </button>
        );
    } else {
        renderComponent = (
            <SpotifyPlaylist 
                invalidCodeHandler={invalidCodeHandler} 
                code={code} 
            />
        );
    }

    return (
        <div className="container">
            <h1>Spotify</h1>
            <div>
                Disclaimer, for accessing my playlist, I need to request Auth from the Spotify using this scope:
                <br />
                Later you will be redirected to spotify auth with scope that I stated :)
            </div>
            {renderComponent}
        </div>
    );
}

export default Spotify;