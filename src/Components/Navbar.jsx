import { Link } from "react-router-dom";
import { Sun, Moon, SunMoon, } from "lucide-react"; // Importamos los íconos de Lucide
import { useEffect, useState } from "react";
import "../Assets/CSS/navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("system");

  // Al cargar la página, obtener la preferencia del tema o usar el sistema por defecto
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Detecta el tema del sistema por defecto
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme);
    }
  }, []);

  // Cambiar el tema
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Guardar la preferencia en localStorage
    if (newTheme === "system") {
      // Aplicar el tema del sistema
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.setAttribute("data-bs-theme", systemTheme);
    } else {
      document.documentElement.setAttribute("data-bs-theme", newTheme);
    }
  };

  useEffect(() => {
    // Al cambiar el tema, actualiza la propiedad 'data-bs-theme' del HTML
    document.documentElement.setAttribute("data-bs-theme", theme === "system" ? "light" : theme);
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-opacity-50 sticky-top">
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="themeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* Íconos de Lucide para el modo */}
                {theme === "dark" ? (
                  <Moon size={20} />
                ) : theme === "light" ? (
                  <Sun size={20} />
                ) : (
                  <SunMoon size={20} />
                )}
              </a>
              <ul className="dropdown-menu" aria-labelledby="themeDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeTheme("dark")}
                    disabled={theme === "dark"}
                  >
                    <Moon size={18} className="me-2" />
                    Oscuro
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeTheme("light")}
                    disabled={theme === "light"}
                  >
                    <Sun size={18} className="me-2" />
                    Claro
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeTheme("system")}
                    disabled={theme === "system"}
                  >
                    <SunMoon size={18} className="me-2" />
                    Auto
                  </button>
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
