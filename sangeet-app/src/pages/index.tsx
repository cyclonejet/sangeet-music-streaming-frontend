import Head from 'next/head';
import { Container, Stack } from '@mui/material';

import ArtistsStack from '../components/ui/ArtistsStack';
import AlbumsStack from '../components/ui/AlbumsStack';

export interface ArtistType {
  id: string;
  name: string;
  picture: string;
  description: string;
  albums?: AlbumType[];
}

export interface AlbumType {
  id: string;
  name: string;
  duration: number;
  coverArt: string;
  releaseDate: string;
  artist?: ArtistType;
}

export default function Home({
  artists,
  albums,
}: {
  artists: ArtistType[];
  albums: AlbumType[];
}) {
  return (
    <div>
      <Head>
        <title>Sangeet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container sx={{ padding: '2rem' }}>
        <Stack spacing={5}>
          <ArtistsStack artists={artists} />
          <AlbumsStack albums={albums} />
        </Stack>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const artists: ArtistType[] = await fetch(
    'http://172.17.0.1:1337/artists/'
  ).then((res) => res.json());

  const albums: AlbumType[] = await fetch('http://172.17.0.1:1337/albums').then(
    (res) => res.json()
  );

  return {
    props: {
      artists,
      albums,
    },
  };
}
