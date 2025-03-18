import { Link } from "react-router-dom";
import usePageTitle from "../Hooks/usePageTitle";

const WireGuard = () => {
  usePageTitle("Configuración de VPN con WireGuard en Proxmox");

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bg-dark text-light p-5 rounded shadow-lg">
            <h1 className="display-4 font-weight-bold text-white">
              Configuración de WireGuard con Proxmox
            </h1>
            <p className="lead text-muted">
              Guía paso a paso para instalar y configurar DuckDNS y WireGuard en
              un contenedor LXC de Proxmox.
            </p>

            {/* Sección DuckDNS */}
            <div className="mt-4">
              <h3 className="text-primary">
                🔧 Instalación de DuckDNS en Proxmox
              </h3>
              <p>
                DuckDNS es un servicio gratuito que te permite asociar un
                dominio dinámico a tu IP. Esto es útil para mantener un nombre
                de dominio accesible, incluso cuando tu IP pública cambia. A
                continuación, se detallan los pasos para instalar DuckDNS en
                Proxmox.
              </p>

              <div className="mt-4">
                <h4 className="text-warning">1. Crear una cuenta en DuckDNS</h4>
                <p>
                  Dirígete a{" "}
                  <a
                    href="https://www.duckdns.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    DuckDNS
                  </a>{" "}
                  y crea una cuenta gratuita utilizando tu cuenta de Google,
                  GitHub o Twitter. Una vez registrado, podrás crear un dominio
                  gratuito. Anota tu subdominio, ya que lo necesitarás más
                  tarde.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-warning">
                  2. Crear un contenedor LXC en Proxmox
                </h4>
                <p>
                  1. En el panel de Proxmox, crea un contenedor LXC con una
                  distribución ligera como Ubuntu 20.04.
                  <br />
                  2. Asigna los recursos necesarios (al menos 1 GB de RAM y 1
                  CPU) y configura una IP estática para este contenedor.
                  <br />
                  3. Asegúrate de que el contenedor tenga acceso a Internet.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-warning">3. Instalar Dependencias</h4>
                <p>
                  Conéctate al contenedor LXC desde la terminal de Proxmox
                  utilizando SSH o la consola web de Proxmox. Luego, actualiza
                  los paquetes y instala los requerimientos necesarios para
                  DuckDNS:
                </p>
                <pre>
                  <code>
                    sudo apt update && sudo apt upgrade -y sudo apt install curl
                    -y
                  </code>
                </pre>
              </div>

              <div className="mt-4">
                <h4 className="text-warning">4. Configurar DuckDNS</h4>
                <p>
                  1. Ahora, crea un script para actualizar tu IP dinámica.
                  Primero, en el contenedor LXC, crea un archivo de script:
                </p>
                <pre>
                  <code>nano /opt/duckdns/duck.sh</code>
                </pre>
                <p>
                  2. En este archivo, agrega el siguiente contenido,
                  reemplazando &lt;tu-subdominio&gt; con tu subdominio de
                  DuckDNS y &lt;tu-token&gt; con el token que aparece en tu
                  panel de DuckDNS:
                </p>
                <pre>
                  <code>
                    #!/bin/bash echo
                    url="https://www.duckdns.org/update?domains=&lt;tu-subdominio&gt;&token=&lt;tu-token&gt;&ip="
                    | curl -k -o ~/duckdns/duck.log -K -
                  </code>
                </pre>
                <p>3. Haz el script ejecutable:</p>
                <pre>
                  <code>chmod +x /opt/duckdns/duck.sh</code>
                </pre>
                <p>
                  4. Para que el script se ejecute automáticamente, puedes
                  añadirlo a crontab. Para ello, edita el archivo de cron:
                </p>
                <pre>
                  <code>crontab -e</code>
                </pre>
                <p>
                  5. Añade la siguiente línea para que el script se ejecute cada
                  5 minutos:
                </p>
                <pre>
                  <code>*/5 * * * * /opt/duckdns/duck.sh >/dev/null 2>&1</code>
                </pre>
                <p>
                  Con esto, tu IP dinámica será actualizada automáticamente cada
                  5 minutos en DuckDNS.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-warning">5. Verificar el funcionamiento</h4>
                <p>
                  Para verificar que el script funciona correctamente, puedes
                  revisar el archivo de log con el siguiente comando:
                </p>
                <pre>
                  <code>cat ~/duckdns/duck.log</code>
                </pre>
                <p>
                  Si ves un mensaje como "<strong>OK</strong>", significa que
                  DuckDNS está funcionando correctamente.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-primary">
                  🔧 Configuración de WireGuard en Proxmox
                </h3>
                <p>
                  Ahora que tienes DuckDNS configurado en tu Proxmox, puedes
                  continuar con la configuración de WireGuard. A continuación,
                  sigue los pasos para instalar WireGuard en un contenedor LXC.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-primary">📺 Ver Video Tutorial</h3>
              <p>
                Mira este video para aprender cómo configurar WireGuard en
                Proxmox:
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
                  src="https://www.youtube.com/embed/dk9tLGMJzPA?si=D-3ID6LzSmZragzQ"
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
              <h3 className="text-primary">📝 Consideraciones Finales</h3>
              <p>
                Una vez que el script de DuckDNS esté en funcionamiento y
                WireGuard configurado, asegúrate de verificar que tu red y los
                puertos estén correctamente configurados para permitir el
                tráfico VPN. No olvides configurar las reglas de firewall
                adecuadas para proteger tu red.
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

export default WireGuard;
