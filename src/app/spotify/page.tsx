import { Suspense } from 'react';
import Spotify from '../../components/Spotify';

export default function SpotifyPage() {
  return (
    <Suspense fallback={<div>Loading Spotify...</div>}>
      <Spotify />
    </Suspense>
  );
}
