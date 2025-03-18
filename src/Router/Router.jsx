import { createBrowserRouter } from "react-router-dom";

/* LAYOUTS */
import MainLayout from "../Layouts/MainLayout";
/* LAYOUTS */

/* PAGES */
import Home from "../Pages/Home"
import Proxmox from "../Pages/Proxmox";
import VPN from "../Pages/VPN";
import TrueNAS from "../Pages/TrueNAS";
import AMPPanel from "../Pages/AMPPanel";
import UbuntuServer from "../Pages/UbuntuServer";
import Web from "../Pages/Web";
import Err404 from "../Pages/Err404";
/* PAGES */

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
   	  {
        path: "proxmox",
        element: <Proxmox />,
      },
      {
        path: "vpn",
        element: <VPN />,
      },
      {
        path: "truenas",
        element: <TrueNAS />,
      },
      {
        path: "amp",
        element: <AMPPanel />,
      },
      {
        path: "ubuntu",
        element: <UbuntuServer />,
      },
      {
        path: "web",
        element: <Web />,
      },
    ],
  },
  { path: "*", element: <Err404 /> },
]);
