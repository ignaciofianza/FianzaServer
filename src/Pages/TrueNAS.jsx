import { Link } from "react-router-dom";
import usePageTitle from "../Hooks/usePageTitle";

const TrueNAS = () => {
  usePageTitle("Instalación de TrueNAS SCALE");

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="p-5 rounded shadow-lg">
            <h1 className="display-4 font-weight-bold">
              Instalación de TrueNAS SCALE
            </h1>
            <p className="lead text-muted">
              Guía paso a paso para instalar y configurar **TrueNAS SCALE** en
              tu servidor. TrueNAS SCALE es una plataforma potente y flexible
              para almacenamiento en red (NAS) basada en Linux.
            </p>

            <div className="mt-4">
              <h3 className="text-primary">🔧 Requerimientos Mínimos</h3>
              <p>
                Antes de comenzar con la instalación de TrueNAS SCALE, asegúrate
                de tener lo siguiente:
              </p>
              <ul>
                <li>
                  <strong>Hardware:</strong> Un servidor con al menos 8 GB de
                  RAM (preferiblemente más) y un procesador compatible.
                </li>
                <li>
                  <strong>Almacenamiento:</strong> Al menos 16 GB de
                  almacenamiento para el sistema operativo y discos adicionales
                  para el almacenamiento de datos.
                </li>
                <li>
                  <strong>Conexión a Internet:</strong> Para descargar el
                  sistema y recibir actualizaciones.
                </li>
                <li>
                  <strong>USB:</strong> Una unidad USB de al menos 8 GB para
                  crear un medio de instalación.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                🔽 Paso 1: Descarga e Instalación
              </h3>
              <p>
                Descarga la última versión de TrueNAS SCALE desde la página
                oficial.
                <br />
                1. Dirígete a la página oficial de{" "}
                <a
                  href="https://www.truenas.com/download-truenas-scale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  TrueNAS SCALE
                </a>{" "}
                y descarga el archivo ISO.
                <br />
                2. Graba el archivo ISO en un USB utilizando herramientas como{" "}
                <strong>Rufus</strong> o <strong>Balena Etcher</strong>.
                <br />
                3. Conecta el USB al servidor y arranca desde el dispositivo
                USB.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                ⚙️ Paso 2: Instalación de TrueNAS SCALE
              </h3>
              <p>
                1. Cuando inicie el instalador, selecciona el idioma y la
                configuración regional.
                <br />
                2. En la pantalla de instalación, selecciona el disco en el que
                deseas instalar TrueNAS SCALE.
                <br />
                3. Configura la red, asigna una dirección IP estática si lo
                deseas, y asigna una contraseña para el usuario "root".
                <br />
                4. Haz clic en "Install" y espera a que se complete la
                instalación. Este proceso puede tomar varios minutos.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                🔧 Paso 3: Acceso a la Interfaz Web
              </h3>
              <p>
                1. Una vez que la instalación haya finalizado, reinicia el
                servidor y extrae el USB.
                <br />
                2. Accede a la interfaz web de TrueNAS SCALE utilizando un
                navegador. Ingresa la dirección IP del servidor seguida de{" "}
                <strong>:80</strong> (por ejemplo:{" "}
                <strong>http://192.168.1.100:80</strong>).
                <br />
                3. Inicia sesión con el usuario <strong>root</strong> y la
                contraseña que configuraste durante la instalación.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                🚀 Paso 4: Configuración Inicial de TrueNAS SCALE
              </h3>
              <p>
                1. Después de iniciar sesión en la interfaz web, se recomienda
                cambiar la contraseña de root y configurar los ajustes de red.
                <br />
                2. Dirígete a la sección "System" en el menú principal y
                configura los ajustes generales, como las zonas horarias y las
                configuraciones de correo si lo deseas.
                <br />
                3. Configura el almacenamiento: puedes crear volúmenes, pools, y
                discos adicionales según tus necesidades.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                📦 Paso 5: Configuración de Almacenamiento y Pools
              </h3>
              <p>
                1. En la sección "Storage" de la interfaz web, selecciona
                "Pools" y haz clic en "Add" para crear un nuevo pool.
                <br />
                2. Elige los discos que deseas incluir en el pool y configura el
                tipo de RAID si es necesario.
                <br />
                3. Una vez que se haya creado el pool, puedes agregar "Datasets"
                para organizar tus archivos y datos.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">📈 Recomendaciones y Tips</h3>
              <ul>
                <li>
                  <strong>Usa discos de calidad:</strong> Asegúrate de que los
                  discos que uses sean de calidad y estén en buen estado para
                  evitar fallos en el almacenamiento.
                </li>
                <li>
                  <strong>Habilita el monitoreo:</strong> TrueNAS SCALE tiene
                  herramientas de monitoreo para seguir el uso de CPU, RAM,
                  discos y red. Asegúrate de configurar alertas.
                </li>
                <li>
                  <strong>Haz respaldos regulares:</strong> Configura tareas de
                  respaldo automáticas para proteger tus datos y evitar pérdidas
                  por fallos en el sistema.
                </li>
                <li>
                  <strong>Considera usar ZFS:</strong> TrueNAS SCALE usa ZFS,
                  que es un sistema de archivos robusto. Aprende a configurar
                  snapshots, deduplicación y compresión para mejorar la
                  eficiencia del almacenamiento.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">📝 Consideraciones Finales</h3>
              <p>
                La instalación y configuración de TrueNAS SCALE es relativamente
                sencilla, pero es importante que configures correctamente el
                almacenamiento y el acceso remoto para maximizar la eficiencia
                de tu servidor NAS.
                <br />
                TrueNAS SCALE ofrece una gran flexibilidad, ya sea que quieras
                usarlo para almacenamiento, aplicaciones Docker, máquinas
                virtuales, o mucho más.
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

export default TrueNAS;
