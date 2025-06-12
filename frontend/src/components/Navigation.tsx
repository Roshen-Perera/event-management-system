
import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Event Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/editEvent" className="nav-link">
                  Edit Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
