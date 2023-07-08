import { Stack, Typography } from '@mui/material';

import ArtistCard from './ArtistCard';
import { ArtistType } from '../../pages';

export default function ArtistsStack({ artists }: { artists: ArtistType[] }) {
  return (
    <>
      <Typography variant="h4">Top Artists</Typography>
      <Stack
        spacing={2}
        direction="row"
        sx={{ maxWidth: '75vw', overflowY: 'scroll' }}
      >
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </Stack>
    </>
  );
}
