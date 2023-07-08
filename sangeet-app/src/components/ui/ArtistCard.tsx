import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';

import { ArtistType } from '../../pages';
import Link from 'next/link';

export default function ArtistCard({ artist }: { artist: ArtistType }) {
  return (
    <Card
      sx={{ minWidth: 200, maxHeight: 250, padding: '1rem', display: 'flex' }}
    >
      <Box>
        <Image
          src={`http://172.17.0.1:1337/${artist.picture}`}
          alt="display"
          width={40}
          height={40}
        />
      </Box>
      <Box sx={{ padding: '0.5rem', overflowX: 'scroll' }}>
        <Typography
          variant="h5"
          sx={{
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <Link href={`artist/${artist.id}`}>{artist.name}</Link>
        </Typography>
        <Typography variant="subtitle2">{artist.description}</Typography>
      </Box>
    </Card>
  );
}
