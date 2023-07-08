import Image from 'next/image';
import { Box, Card, Typography } from '@mui/material';

import { AlbumType } from '../../pages';
import Link from 'next/link';

export default function AlbumCard({ album }: { album: AlbumType }) {
  return (
    <Card
      sx={{ minWidth: 220, maxHeight: 280, padding: '1rem', display: 'flex' }}
    >
      <Box>
        <Image
          src={`http://172.17.0.1:1337/${album.coverArt}`}
          alt="display"
          width={160}
          height={160}
        />
        <Typography
          variant="h5"
          sx={{
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <Link href={`album/${album.id}`}>{album.name}</Link>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <Link href={`artist/${album.artist.id}`}>{album.artist.name}</Link>
        </Typography>
        <Typography variant="subtitle2">{album.duration}</Typography>
        <Typography variant="subtitle2">{album.releaseDate}</Typography>
      </Box>
    </Card>
  );
}
