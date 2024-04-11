import React from 'react'
import ReactDOM from 'react-dom/client'
import Customer from './Customer.jsx'
import { ChakraProvider, Text} from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup";
import AuthProvider from "./components/context/AuthContext.jsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";
import './index.css'
import Home from "./Home.jsx";
import Contacts from "./Contacts.jsx";
import Dashboard from "./Dashboard.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Agenda from "./components/events/Agenda.jsx";
import Menu from "./Menu.jsx";
import Subscricao from "./components/subscricao/Subscricao.jsx";
import Quiz from "./components/subscricao/quiz.jsx";
import Boutique from "./components/products/Boutique.jsx";

const { ToastContainer } = createStandaloneToast();

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/agenda",
        element: <Agenda />
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
    },
    {
        path: "/dashboard/customers",
        element: <ProtectedRoute><Customer /></ProtectedRoute>
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/subscricao",
        element: <Subscricao />
    },
    {
        path: "/quiz",
        element: <Quiz />
    },
    {
        path: "/contacts",
        element: <Contacts />
    },
    {
        path: "/boutique",
        element: <Boutique />
    },
])

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ChakraProvider>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
                <ToastContainer />
            </ChakraProvider>
        </React.StrictMode>,
    )
