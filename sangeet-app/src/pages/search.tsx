import { useEffect, useRef, useState } from 'react';
import { Container, TextField } from '@mui/material';
import useSearch from '../data/use-search';
import SearchResults from '../components/ui/SearchResults';

export interface SearchResultsType {
  id: string;
  title: string;
  duration: number;
  playCount: number;
}

export default function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const {
    results,
    isLoading,
    error,
  }: { results: SearchResultsType[]; isLoading: boolean; error: any } =
    useSearch(searchQuery);

  useEffect(() => {
    searchRef.current.focus();
  });

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container sx={{ paddingTop: '3rem' }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        fullWidth
        inputRef={searchRef}
        value={searchQuery}
        onChange={handleQueryChange}
        error={error}
        helperText={error && 'Error searching'}
      />
      <SearchResults results={results} isLoading={isLoading} />
    </Container>
  );
}
