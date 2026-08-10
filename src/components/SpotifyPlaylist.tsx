'use client';

import { useState, useEffect, useCallback } from 'react';

const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

type Token = {
  access_token: string | null;
  token_type: string | null;
  scope: string | null;
  refresh_token: string | null;
};

type PlaylistItem = {
  id: string;
  name: string;
  description?: string;
  images?: { url: string }[];
};

function SpotifyPlaylist({
  code,
  invalidCodeHandler,
}: {
  code: string;
  invalidCodeHandler: () => void;
}) {
  const [token, setToken] = useState<Token>({
    access_token: null,
    token_type: null,
    scope: null,
    refresh_token: null,
  });
  const [listPlaylist, setListPlaylist] = useState<PlaylistItem[]>([]);

  const requestToken = useCallback(async () => {
    const url = 'https://accounts.spotify.com/api/token';
    const base64 = btoa(`${clientId}:${clientSecret}`);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64}`,
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`,
    };

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setToken(data);
      return data.access_token as string;
    }

    invalidCodeHandler();
    return null;
  }, [code, invalidCodeHandler]);

  const getPlaylist = useCallback(
    async (accessToken: string) => {
      const user_id = 'eagarsatya';
      const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, requestOptions);

      if (response.ok) {
        const data = await response.json();
        setListPlaylist(data.items ?? []);
      } else {
        invalidCodeHandler();
      }
    },
    [invalidCodeHandler]
  );

  useEffect(() => {
    const init = async () => {
      const accessToken = await requestToken();
      if (accessToken) {
        await getPlaylist(accessToken);
      }
    };
    init();
  }, [requestToken, getPlaylist]);

  const requestSongListDetail = async (index: number) => {
    const currentPlaylist = listPlaylist[index];
    const url = `https://api.spotify.com/v1/playlists/${currentPlaylist.id}`;

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    };

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const data = await response.json();
      setListPlaylist(data.items || []);
    } else {
      invalidCodeHandler();
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
        Playlists
      </h2>
      <ListPlaylist
        listPlaylist={listPlaylist}
        detailClick={requestSongListDetail}
      />
    </div>
  );
}

function ListPlaylist({
  listPlaylist,
  detailClick,
}: {
  listPlaylist: PlaylistItem[];
  detailClick: (index: number) => void;
}) {
  if (!listPlaylist?.length) {
    return (
      <p className="mt-4 text-sm text-neutral-500">No playlists loaded yet.</p>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {listPlaylist.map((item, index) => (
        <div
          key={item.id ?? index}
          className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-400 sm:flex-row sm:items-center"
        >
          {item.images?.[0]?.url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              height={80}
              width={80}
              src={item.images[0].url}
              alt={item.name}
              className="h-20 w-20 rounded-md object-cover"
            />
          )}
          <div className="min-w-0 flex-1">
            <p className="font-medium text-neutral-900">{item.name}</p>
            {item.description && (
              <p className="mt-1 truncate text-sm text-neutral-500">
                {item.description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => detailClick(index)}
            className="shrink-0 rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400"
          >
            Song list
          </button>
        </div>
      ))}
    </div>
  );
}

export default SpotifyPlaylist;
