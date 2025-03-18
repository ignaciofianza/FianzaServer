import { Link } from "react-router-dom";
import usePageTitle from "../Hooks/usePageTitle";

const UbuntuServer = () => {
  usePageTitle("Instalación de Ubuntu Server en Proxmox");

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="p-5 rounded shadow-lg">
            <h1 className="display-4 font-weight-bold">
              Instalación de Ubuntu Server en Proxmox
            </h1>
            <p className="lead text-muted">
              Guía paso a paso para instalar y configurar Ubuntu Server en
              Proxmox, luego instalar Nginx y Node.js.
            </p>

            <div className="mt-4">
              <h3 className="text-primary">🔧 Requerimientos Mínimos</h3>
              <p>Asegúrate de tener:</p>
              <ul>
                <li>
                  <strong>Proxmox VE</strong> instalado y funcionando.
                </li>
                <li>
                  <strong>Ubuntu Server ISO</strong> descargado desde su página
                  oficial.
                </li>
                <li>
                  <strong>Recursos suficientes</strong> en Proxmox para crear
                  una nueva máquina virtual.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                🔽 Paso 1: Crear una Máquina Virtual (VM) en Proxmox
              </h3>
              <p>
                1. Accede a la interfaz web de Proxmox (https://-tuIP-:8006).
                <br />
                2. Selecciona el nodo donde deseas crear la VM.
                <br />
                3. Haz clic en "Create VM" en la parte superior.
                <br />
                4. Completa la información básica de la VM: Nombre, ID, etc.
                <br />
                5. En la sección de "OS", selecciona la opción para cargar el
                ISO de Ubuntu Server.
                <br />
                6. En "System", selecciona "QEMU" y "Linux", luego establece la
                versión de Ubuntu.
                <br />
                7. En "Disco duro", selecciona el tamaño y tipo de
                almacenamiento adecuado.
                <br />
                8. En "Red", configura la interfaz de red para que sea una red
                puente (bridged).
                <br />
                9. Haz clic en "Finish" para crear la VM.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                ⚙️ Paso 2: Instalar Ubuntu Server en la VM
              </h3>
              <p>
                1. Inicia la VM que acabas de crear desde Proxmox.
                <br />
                2. Accede a la consola de la VM desde la interfaz web de
                Proxmox.
                <br />
                3. La VM arrancará desde el ISO de Ubuntu Server. Selecciona
                "Install Ubuntu Server".
                <br />
                4. Sigue las instrucciones para configurar la red, zona horaria,
                usuario y contraseña.
                <br />
                5. En el particionado, selecciona "Usar todo el disco" para
                facilitar la instalación.
                <br />
                6. Cuando termine la instalación, reinicia la máquina.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                🔧 Paso 3: Configuración de Red e IP Estática
              </h3>
              <p>
                1. Accede al servidor con el usuario creado durante la
                instalación.
                <br />
                2. Edita el archivo de configuración de red para asignar una IP
                estática:
                <br />
                <code>sudo nano /etc/netplan/00-installer-config.yaml</code>
                <br />
                3. Configura la IP estática de la siguiente manera (ajusta las
                direcciones según tu red):
                <pre>
                  {`
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: false
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses:
          - 8.8.8.8
          - 8.8.4.4
`}
                </pre>
                4. Aplica los cambios con:
                <br />
                <code>sudo netplan apply</code>
                <br />
                5. Verifica que la IP esté correctamente configurada con:
                <br />
                <code>ip a</code>
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">🔽 Paso 4: Instalación de Nginx</h3>
              <p>
                1. Actualiza el sistema:
                <br />
                <code>sudo apt update && sudo apt upgrade -y</code>
                <br />
                2. Instala Nginx:
                <br />
                <code>sudo apt install nginx -y</code>
                <br />
                3. Inicia Nginx:
                <br />
                <code>sudo systemctl start nginx</code>
                <br />
                4. Verifica que Nginx esté funcionando abriendo el navegador e
                ingresando la IP del servidor. Deberías ver la página
                predeterminada de Nginx.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                ⚙️ Paso 5: Instalación de Node.js
              </h3>
              <p>
                1. Instala Node.js:
                <br />
                <code>
                  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E
                  bash -
                </code>
                <br />
                2. Instala Node.js:
                <br />
                <code>sudo apt install -y nodejs</code>
                <br />
                3. Verifica la instalación:
                <br />
                <code>node -v</code>
                <br />
                <code>npm -v</code>
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                🔒 Paso 6: Configuración de SSL con Let's Encrypt
              </h3>
              <p>
                1. Instala Certbot:
                <br />
                <code>sudo apt install certbot python3-certbot-nginx -y</code>
                <br />
                2. Obtén el certificado SSL:
                <br />
                <code>
                  sudo certbot --nginx -d ignaciofianza.com -d
                  www.ignaciofianza.com
                </code>
                <br />
                3. Verifica que el certificado se haya instalado correctamente
                abriendo el sitio en https.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">
                🚀 Paso 7: Desplegar tu Aplicación Node.js
              </h3>
              <p>
                1. Sube tu aplicación Node.js a tu servidor.
                <br />
                2. Asegúrate de que la aplicación esté corriendo en el puerto
                3000 (o el que hayas configurado).
                <br />
                3. Usa PM2 para mantener la aplicación en segundo plano:
                <br />
                <code>sudo npm install -g pm2</code>
                <br />
                <code>pm2 start app.js</code>
                <br />
                4. Guarda el proceso con:
                <br />
                <code>pm2 save</code>
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">📝 Consideraciones Finales</h3>
              <p>
                Con estos pasos habrás instalado y configurado Ubuntu Server en
                Proxmox, configurado Nginx como reverse proxy, y Node.js para tu
                aplicación. Ahora tienes un servidor seguro y listo para
                producción.
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

export default UbuntuServer;
