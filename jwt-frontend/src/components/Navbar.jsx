import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="nav">
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}
