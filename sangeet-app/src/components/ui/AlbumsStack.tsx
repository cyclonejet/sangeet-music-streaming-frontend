import { Stack, Typography } from '@mui/material';
import { AlbumType } from '../../pages';
import AlbumCard from './AlbumCard';

export default function AlbumsStack({ albums }: { albums: AlbumType[] }) {
  return (
    <>
      <Typography variant="h4">Top Albums</Typography>
      <Stack
        spacing={2}
        direction="row"
        sx={{ maxWidth: '75vw', overflowY: 'scroll' }}
      >
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </Stack>
    </>
  );
}
