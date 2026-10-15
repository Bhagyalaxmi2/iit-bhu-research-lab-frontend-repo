
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  // Step 1: Initialize login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(localStorage.getItem("token"))
  );

  // Step 2: Keep Navbar synchronized with login/logout changes
  useEffect(() => {
    const updateAuthState = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
    };

    // Listen for authentication changes in this tab
    window.addEventListener("auth-change", updateAuthState);

    // Listen for localStorage changes from other tabs
    window.addEventListener("storage", updateAuthState);

    // Sync state when the page becomes visible again
    window.addEventListener("focus", updateAuthState);

    return () => {
      window.removeEventListener("auth-change", updateAuthState);
      window.removeEventListener("storage", updateAuthState);
      window.removeEventListener("focus", updateAuthState);
    };
  }, []);

  // Step 3: Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Update Navbar immediately
    setIsLoggedIn(false);

    // Notify other components in this tab
    window.dispatchEvent(new Event("auth-change"));

    // Redirect to Login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo-container">
        <NavLink to="/" end className="logo-link">
          <img
            src="/lablogo.jpeg"
            alt="Nanotech Lab"
            className="lab-logo"
          />
        </NavLink>
      </div>

      {/* NAVIGATION LINKS */}
      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/supervisor"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Supervisor Profile
        </NavLink>

        <NavLink
          to="/research"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Research Areas
        </NavLink>

        <NavLink
          to="/people"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          People
        </NavLink>

        <NavLink
          to="/publications"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Publications
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* LOGIN / ADMIN ACTIONS */}
      <div className="nav-actions">
        {isLoggedIn ? (
          <>
            <Link to="/admin/dashboard" className="login-btn">
              Admin Dashboard
            </Link>

            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
