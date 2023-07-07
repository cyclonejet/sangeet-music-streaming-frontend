import useSWR from 'swr';

const userFetcher = async (url: string) => {
  const reponse = await fetch(url, { credentials: 'include' });

  if (!reponse.ok) {
    throw new Error('Authentication failed.');
  }

  return reponse.json();
};

export default function useUser() {
  const { data, mutate, error } = useSWR(
    `http://localhost:1337/users/whoami`,
    userFetcher
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
}
