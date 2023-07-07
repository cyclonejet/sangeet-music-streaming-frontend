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

export async function signUp({ email, username, password }) {
  await fetch(`http://localhost:1337/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, username, password }),
    credentials: 'include',
  });
}

export async function signOut() {
  await fetch(`http://localhost:1337/users/signout`, {
    method: 'POST',
    credentials: 'include',
  });
}
