export default async function Logout() {
  localStorage.clear();
  window.location.assign('/login');
}
