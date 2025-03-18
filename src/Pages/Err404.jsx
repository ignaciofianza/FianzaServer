import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap

const Err404 = () => {
  const navigate = useNavigate(); // Usamos el hook useNavigate de React Router v6

  const handleGoBack = () => {
    navigate(-1); // Vuelve a la página anterior
  };

  const handleGoHome = () => {
    navigate("/"); // Redirige al inicio
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient text-white">
      <div className="text-center bg-dark bg-opacity-75 p-5 rounded shadow-lg">
        <h1 className="display-4 mb-3">¡Oops! Error 404</h1>
        <p className="lead mb-4">La página que estás buscando no existe o ha sido movida.</p>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-warning btn-lg"
            onClick={handleGoBack}
          >
            Volver atrás
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleGoHome}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Err404;
