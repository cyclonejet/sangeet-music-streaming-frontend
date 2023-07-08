import { GetStaticPaths, GetStaticProps } from 'next';
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { ArtistType } from '..';
import Image from 'next/image';
import Link from 'next/link';

export default function Artist({ artist }: { artist: ArtistType }) {
  return (
    <Container sx={{ paddingTop: '4rem' }}>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Image
            src={`http://172.17.0.1:1337/${artist.picture}`}
            alt="display"
            width={160}
            height={160}
          />
        </Box>
        <Box sx={{ padding: '2rem' }}>
          <Typography variant="h2">{artist.name}</Typography>
          <Typography variant="subtitle1">{artist.description}</Typography>
        </Box>
      </Box>
      <Typography variant="h3">Albums</Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label={`table of albums by ${artist.name}`}
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Duration</TableCell>
              <TableCell align="right">Release Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artist.albums.map((album) => (
              <TableRow
                key={album.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link href={`album/${album.id}`}>{album.name}</Link>
                </TableCell>
                <TableCell align="right">{album.duration}</TableCell>
                <TableCell align="right">{album.releaseDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const artists: ArtistType[] = await fetch(
    'http://172.17.0.1:1337/artists/'
  ).then((res) => res.json());

  const paths = artists.map((artist) => ({
    params: {
      id: artist.id,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://172.17.0.1:1337/artists/${params.id}`);
  const artist = await res.json();

  return {
    props: {
      artist,
    },
    revalidate: 100,
  };
};
