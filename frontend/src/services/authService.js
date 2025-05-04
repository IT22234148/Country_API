const API = 'http://localhost:5000/api/auth';

export async function register(username, password) {
  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
}

export async function getProfile(token) {
  const res = await fetch(`${API}/profile`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Unauthorized');
  return await res.json();
}
