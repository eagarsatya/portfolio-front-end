'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import SpotifyPlaylist from './SpotifyPlaylist';

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

function Spotify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const invalidCodeHandler = () => {
    if (redirectUri?.startsWith('http')) {
      window.location.assign(redirectUri);
      return;
    }
    router.push(redirectUri || '/spotify');
  };

  const authorizeRequest = () => {
    const baseUrl = 'https://accounts.spotify.com';
    const responseType = 'code';
    const scope = 'playlist-read-private';

    window.location.assign(
      `${baseUrl}/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}`
    );
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Spotify
        </h1>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-neutral-500">
          To view my playlists, Spotify needs an OAuth authorization with the{' '}
          <code className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-sm text-neutral-700">
            playlist-read-private
          </code>{' '}
          scope. You will be redirected to Spotify to approve access.
        </p>
      </header>

      {code == null ? (
        <button
          type="button"
          onClick={authorizeRequest}
          className="rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Authorize Me!
        </button>
      ) : (
        <SpotifyPlaylist invalidCodeHandler={invalidCodeHandler} code={code} />
      )}
    </div>
  );
}

export default Spotify;
