import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Studio76</h1>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>

        <NavLink
          to="/booking"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Book Session
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Gallery
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>

        <NavLink to="/admin-login" className="admin-btn">
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
