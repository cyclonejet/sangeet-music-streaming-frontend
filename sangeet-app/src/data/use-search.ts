import useSWR from 'swr';

const useSearch = (query) => {
  const fetcher = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Search failed.');
    }

    const data = await response.json();
    return data;
  };

  const { data, isLoading, error } = useSWR(
    `http://localhost:1337/songs/search?query=${query}`,
    fetcher
  );

  console.log(data, isLoading);

  return {
    results: data,
    isLoading: isLoading,
    error: error,
  };
};

export default useSearch;
