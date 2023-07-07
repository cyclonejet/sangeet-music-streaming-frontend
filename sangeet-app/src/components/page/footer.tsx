import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Container component="footer" sx={{ width: '100%', height: '100%' }}>
      <Box>
        <Typography variant="h3">Sangeet</Typography>
        <Box component="nav">
          <Link href="/manager-signin">
            <Typography>Manager Sign In</Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
