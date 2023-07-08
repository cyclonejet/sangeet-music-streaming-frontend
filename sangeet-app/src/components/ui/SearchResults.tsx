import {
  Box,
  CircularProgress,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { SearchResultsType } from '../../pages/search';

export default function SearchResults({
  results,
  isLoading,
}: {
  results: SearchResultsType[] | undefined;
  isLoading: boolean;
}) {
  if (isLoading && !results) {
    return <CircularProgress />;
  }

  console.log(isLoading, !results);
  return (
    <Box>
      {results.map((result) => (
        <ListItemButton key={result.id}>
          <ListItemText primary={result.title} />
        </ListItemButton>
      ))}
    </Box>
  );
}
