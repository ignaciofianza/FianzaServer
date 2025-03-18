import { Link } from "react-router-dom";
import usePageTitle from "../Hooks/usePageTitle";

const AMP = () => {
  usePageTitle("Configuración de AMP Panel en Proxmox");

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bg-dark text-light p-5 rounded shadow-lg">
            <h1 className="display-4 font-weight-bold text-white">
              Configuración de AMP Panel en Proxmox
            </h1>
            <p className="lead text-muted">
              Guía paso a paso para instalar AMP Panel en un contenedor LXC de
              Proxmox.
            </p>

            {/* Disclaimer */}
            <div className="mt-4 rounded p-4 bg-warning-subtle text-dark">
              <h3 className="text-danger font-weight-bold">
                ⚠️ Aviso importante
              </h3>
              <p className="text-light">
                <strong className="text-danger">
                  AMP es un programa de pago.
                </strong>{" "}
                La licencia tiene un costo de{" "}
                <strong className="text-danger">10 USD.</strong> Si decides
                utilizarlo, asegúrate de tener en cuenta que necesitarás esta
                licencia para su funcionamiento.
              </p>
              <p className="text-light">
                Te recomiendo seguir el tutorial en video que proporcionamos a
                continuación para configurar AMP Panel correctamente. Mira la
                sección correspondiente a partir del minuto 6:13 si solo te
                interesa la instalación.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">📺 Ver Video Tutorial</h3>
              <p>
                Mira este video para aprender cómo configurar AMP Panel
              </p>

              <div
                className="mt-4"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/ceYeDX5WTms?si=p3I4zTiSgcHHRbLx&amp;start=374"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
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

export default AMP;
