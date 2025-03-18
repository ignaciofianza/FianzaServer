import React from "react";

const updatedYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-center mt-5 py-4">
      <p>&copy; {updatedYear} Ignacio Fianza. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
