import { Link } from "react-router-dom";
import "../Assets/CSS/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontFamily: "Koulen, sans-serif",
            textTransform: "uppercase",
          }}
        >
          FianzaServer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://ignaciofianza.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Página personal
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/ignaciofianza"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/nachofianzaa_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Secciones
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/proxmox">
                    Proxmox
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/vpn">
                    VPN
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/truenas">
                    TrueNAS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/amp">
                    AMP Panel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ubuntu">
                    Ubuntu Server
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/web">
                    Web
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
