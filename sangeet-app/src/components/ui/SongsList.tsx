import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { SongType } from '../../types/song.type';

export default function SongsList({ list }: { list: SongType[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label={`table of songs`}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Plays</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((song) => (
            <TableRow
              key={song.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {song.title}
              </TableCell>
              <TableCell align="right">{song.duration}</TableCell>
              <TableCell align="right">{song.playCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
