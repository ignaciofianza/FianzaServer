import { Link } from "react-router-dom";
import usePageTitle from "../Hooks/usePageTitle";

const Home = () => {
  usePageTitle("Bienvenido a FianzaServer");

  return (
    <div className="container mt-5 pt-5 text-center">
      <h1 className="display-4">
        Bienvenido a{" "}
        <span
          style={{
            fontFamily: "Koulen, sans-serif",
            textTransform: "uppercase",
          }}
        >
          FianzaServer
        </span>
      </h1>
      <p className="lead">
        La página de mi servidor, donde gestiono mis servicios y experimentos.
      </p>

      <div className="alert alert-success mt-4" role="alert">
        <h4 className="alert-heading">
          🚀 Esta página está alojada desde el propio servidor
        </h4>
        <p>
          Todo el contenido y los servicios que ves aquí están siendo
          gestionados y servidos directamente desde el mismo servidor.
        </p>
      </div>

      <div className="mt-4">
        <h3>📡 Especificaciones del Servidor</h3>
        <p>
          <strong>Modelo:</strong> HP EliteDesk 800 G1 SFF <br />
          <strong>Procesador:</strong> Intel Core i5-4590 <br />
          <strong>Memoria RAM:</strong> 16GB <br />
          <strong>Almacenamiento:</strong> 2TB (1.5TB HDD, 500GB SSD)
          VM's a un SSD de 500GB)
        </p>
      </div>

      <div className="row mt-5">
        {sections.map((section, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg h-100 border-0 rounded">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title font-weight-bold">{section.title}</h5>
                <p className="card-text flex-grow-1">{section.description}</p>
                <Link
                  className="btn btn-secondary btn-lg px-4 py-2 mt-3 rounded-pill shadow align-self-center"
                  to={section.link}
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const sections = [
  {
    title: "Proxmox",
    description:
      "Virtualicé múltiples servicios y optimizaré el rendimiento al mover las VMs a un SSD.",
    link: "/proxmox",
  },
  {
    title: "WireGuard",
    description:
      "Establecí una conexión segura y remota con WireGuard, usando DuckDNS para acceso externo.",
    link: "/vpn",
  },
  {
    title: "TrueNAS",
    description:
      "Configuré un NAS con TrueNAS, acceso remoto y backups automáticos para gestionar archivos.",
    link: "/truenas",
  },
  {
    title: "AMP Panel",
    description:
      "Gestiono servidores de Minecraft 24/7 con AMP Panel, optimizando recursos y acceso fácil con playit.gg.",
    link: "/amp",
  },
  {
    title: "Ubuntu Server, Nginx y Node.js",
    description:
      "Configuro un servidor con Nginx como reverse proxy y aseguré el tráfico con SSL para `ignaciofianza.com`.",
    link: "/ubuntu",
  },
  {
    title: "Web",
    description:
      "Desarrollé la página con React y Bootstrap, optimizando la interfaz y configurando el dominio con Squarespace.",
    link: "/web",
  },
];

export default Home;
