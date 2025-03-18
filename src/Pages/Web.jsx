import { Link } from "react-router-dom";
import usePageTitle from "../Hooks/usePageTitle";

const NginxUbuntu = () => {
  usePageTitle("Crear y Hostear Web con Nginx en Ubuntu Server");

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="p-5 rounded shadow-lg">
            <h1 className="display-4 font-weight-bold">
              Crear y Hostear Web con Nginx en Ubuntu Server
            </h1>
            <p className="lead text-muted">
              Guía paso a paso para crear y hostear una web utilizando Nginx en
              un servidor Ubuntu.
            </p>

            {/* Coming Soon */}
            <div className="mt-4">
              <h3 className="text-warning">⏳ ¡Próximamente!</h3>
              <p>
                Esta guía estará disponible pronto. Mientras tanto, prepárate
                para aprender cómo configurar Nginx y Ubuntu Server.
              </p>
            </div>

            {/* GIF más pequeño y centrado */}
            <div className="mt-4" style={{ textAlign: "center" }}>
              <img
                src="https://media.tenor.com/eJvAJHzHj3EAAAAM/old-man-working-david.gif"
                alt="Old Man Working"
                style={{ width: "50%", opacity: 0.7 }}
              />
            </div>

            <div className="mt-4">
              <Link
                to="/"
                className="btn btn-secondary btn-lg px-4 py-2 mt-3 rounded-pill shadow"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NginxUbuntu;
