import { Suspense } from 'react';
import type { Metadata } from 'next';
import Spotify from '../../components/Spotify';

export const metadata: Metadata = {
  title: 'Spotify',
};

export default function SpotifyPage() {
  return (
    <Suspense
      fallback={
        <p className="text-sm text-neutral-500">Loading Spotify...</p>
      }
    >
      <Spotify />
    </Suspense>
  );
}
