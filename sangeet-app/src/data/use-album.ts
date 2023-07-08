import useSWR from 'swr';

const useAlbum = (id: string) => {
  const fetcher = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Search failed.');
    }

    const data = await response.json();
    return data;
  };

  const { data, isLoading, error } = useSWR(
    `http://localhost:1337/albums/${id}`,
    fetcher
  );

  console.log(data, isLoading);

  return {
    album: data,
    isLoading: isLoading,
    error: error,
  };
};

export default useAlbum;
