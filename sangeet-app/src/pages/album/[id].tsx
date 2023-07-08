import { useRouter } from 'next/router';
import { Box, CircularProgress, Container, Typography } from '@mui/material';

import useAlbum from '../../data/use-album';
import SongsList from '../../components/ui/SongsList';
import { AlbumType } from '..';

export default function Album() {
  const router = useRouter();
  console.log(router.query);
  const {
    album,
    isLoading,
    error,
  }: {
    album: AlbumType;
    isLoading: boolean;
    error: any;
    // @ts-ignore
  } = useAlbum(router.query.id);
  return (
    <Container sx={{ paddingTop: '3rem' }}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Typography variant="h4">{album.name}</Typography>
          <Typography variant="subtitle1">{album.duration}</Typography>
          <SongsList list={album.songs} />
        </Box>
      )}
    </Container>
  );
}
