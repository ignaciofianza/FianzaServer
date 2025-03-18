import { Link } from "react-router-dom";
import usePageTitle from '../Hooks/usePageTitle';

const Proxmox = () => {
  usePageTitle("Instalación de Proxmox");

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bg-dark text-light p-5 rounded shadow-lg">
            <h1 className="display-4 font-weight-bold text-white">Instalación de Proxmox</h1>
            <p className="lead text-muted">
              Guía paso a paso para instalar y configurar Proxmox, una potente plataforma de virtualización.
            </p>

            <div className="mt-4">
              <h3 className="text-primary">🔧 Requerimientos Mínimos</h3>
              <p>
                Antes de comenzar con la instalación de Proxmox, asegúrate de tener lo siguiente:
              </p>
              <ul>
                <li><strong>Hardware:</strong> Un servidor o computadora con al menos 4 GB de RAM y un procesador compatible con virtualización (Intel VT-x o AMD-V).</li>
                <li><strong>Almacenamiento:</strong> Un disco duro o SSD con al menos 32 GB de espacio libre.</li>
                <li><strong>Conexión a Internet:</strong> Para descargar actualizaciones y configuraciones adicionales.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">🔽 Paso 1: Descarga e Instalación</h3>
              <p>
                Descarga la última versión de Proxmox VE desde su página oficial.
                <br />
                1. Dirígete a <a href="https://www.proxmox.com/en/proxmox-ve" target="_blank" rel="noopener noreferrer" className="text-info">Proxmox</a> y descarga el archivo ISO.
                <br />
                2. Graba el archivo ISO en un USB usando herramientas como <strong>Rufus</strong> o <strong>Balena Etcher</strong>.
                <br />
                3. Conecta el USB al servidor y arranca desde el dispositivo USB.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">⚙️ Paso 2: Instalación de Proxmox</h3>
              <p>
                1. Selecciona el idioma y la zona horaria en el instalador.
                <br />
                2. En la pantalla de particionado, selecciona el disco donde deseas instalar Proxmox.
                <br />
                3. Configura la red, asigna una dirección IP estática si lo deseas, y asigna una contraseña al administrador (root).
                <br />
                4. Haz clic en "Install" y espera a que la instalación termine. Esto puede tomar unos minutos.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">🔧 Paso 3: Acceso y Configuración Inicial</h3>
              <p>
                1. Después de completar la instalación, reinicia el servidor.
                <br />
                2. Accede a la interfaz web de Proxmox usando el navegador, ingresando la IP del servidor seguida de <strong>:8006</strong> (ejemplo: <strong>https://192.168.1.100:8006</strong>).
                <br />
                3. Inicia sesión con el usuario <strong>root</strong> y la contraseña que configuraste.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">🚀 Paso 4: Creación de Máquinas Virtuales (VM)</h3>
              <p>
                1. Una vez dentro del panel de Proxmox, selecciona "Create VM" en la parte superior.
                <br />
                2. Sigue las instrucciones del asistente para configurar la máquina virtual: asigna CPU, memoria RAM, y almacenamiento.
                <br />
                3. Luego, instala el sistema operativo en la VM usando un archivo ISO que puedes cargar directamente desde el almacenamiento de Proxmox.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">📈 Recomendaciones y Tips</h3>
              <ul>
                <li><strong>Respaldos frecuentes:</strong> Configura backups automáticos para proteger tus datos y máquinas virtuales.</li>
                <li><strong>Monitoreo de recursos:</strong> Usa las herramientas de monitoreo de Proxmox para verificar el uso de CPU, RAM y disco.</li>
                <li><strong>Redes internas:</strong> Si tienes varias máquinas virtuales, configura redes internas para que se comuniquen entre sí sin consumir ancho de banda externo.</li>
                <li><strong>Uso de SSD:</strong> Si tienes un SSD disponible, úsalo para las VMs más demandantes en cuanto a I/O.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">📝 Consideraciones Finales</h3>
              <p>
                La instalación de Proxmox es relativamente sencilla, pero asegúrate de tener una copia de seguridad antes de hacer cambios importantes. Con el tiempo, podrás agregar nuevas máquinas virtuales y gestionar diferentes servicios en tu servidor de manera eficiente.
              </p>
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

export default Proxmox;
