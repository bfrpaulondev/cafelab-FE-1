// import
import SignIn from "./views/Auth/SignIn.jsx";
import SignUp from "./views/Auth/SignUp.jsx";

import { DocumentIcon, RocketIcon } from "./components/Icons/Icons";

var dashRoutes = [
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
    /*   {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      }, */
    ],
  },
];
export default dashRoutes;
