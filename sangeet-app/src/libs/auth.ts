export async function signIn({ email, password }) {
  await fetch(`http://localhost:1337/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });
}
