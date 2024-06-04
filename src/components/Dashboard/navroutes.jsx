// import

import { HomeIcon, StatsIcon, CreditIcon, PersonIcon, RocketIcon } from "./components/Icons/Icons";

const dashRoutes = [
  {
    path: "/admin-dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
  },
  {
    path: "/admin-dashboard/users",
    name: "Utilizadores",
    icon: <StatsIcon color="inherit" />,
  },
  {
    path: "/admin-dashboard/purchases",
    name: "Compras",
    icon: <CreditIcon color="inherit" />,
  },
  {
    path: "/admin-dashboard/products",
    name: "Produtos",
    icon: <StatsIcon color="inherit" />,
  },
  {
    path: "/admin-dashboard/newsletter",
    name: "Inscritos newsletter",
    icon: <PersonIcon color="inherit" />,
  },
  {
    path: "/admin-dashboard/eventos",
    name: "Eventos",
    icon: <RocketIcon color="inherit" />,
  },
  {
    path: "/admin-dashboard/contacts",
    name: "Mensagens de contato",
    icon: <CreditIcon color="inherit" />,
  }
];
export default dashRoutes;
