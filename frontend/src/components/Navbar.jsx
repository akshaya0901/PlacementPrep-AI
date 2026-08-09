import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">PlacementPrep AI</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/companies">Companies</Link>
        </li>

        <li>
          <Link to="/resume">Resume</Link>
        </li>

        <li>
          <Link to="/notes">Notes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;