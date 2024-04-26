import React from 'react'
import ReactDOM from 'react-dom/client'
import Customer from './Customer.jsx'
import {ChakraProvider} from '@chakra-ui/react'
import {createStandaloneToast} from '@chakra-ui/toast'
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup";
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
import Boutique from "./components/products/Boutique.jsx";
import FeNoCafeLab from "./components/subscricao/FeNoCafeLab.jsx";
import {ShoppingCartProvider} from "./components/context/ShoppingCartContext.jsx";
import {ShoppingCart} from "./components/cart/ShoppingCart.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Success from "./components/checkout/Success.jsx";
import Cancel from "./components/checkout/Cancel.jsx";
import ErrorPage from "./components/errors/ErrorPage.jsx";
import {ErrorBoundaryComponent} from "./components/errors/ErrorBoundaryComponent.jsx";
import {ErrorBoundary} from "react-error-boundary";
import CheckoutSubscricao from "./components/checkout/CheckoutSubscricao.jsx";
import Quiz from "./components/subscricao/quiz.jsx";
import AboutUs from "./AboutUs.jsx";
import Refunds from "./Refunds.jsx";

const {ToastContainer} = createStandaloneToast();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/agenda",
        element: <Agenda/>
    },
    {
        path: "/menu",
        element: <Menu/>
    },
    {
        path: "/subscricao",
        element: <Subscricao/>
    },
    {
        path: "/cart",
        element: <ShoppingCart/>
    },
    {
        path: "/contacts",
        element: <Contacts/>
    },
    {
        path: "/boutique",
        element: <Boutique/>
    },
    {
        path: "/subscricao/fenocafelab",
        element: <FeNoCafeLab/>
    },
    {
        path: "/checkout",
        element: (
            <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
                <Checkout/>
            </ErrorBoundary>
        )
    },
    {
        path: "/subscricao/checkout",
        element: (
            <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
                <CheckoutSubscricao/>
            </ErrorBoundary>
        )
    },
    {
        path: "/cancel",
        element: <Cancel/>
    },
    {
        path: "/success",
        element: <Success/>
    },
    {
        path: "/error",
        element: <ErrorPage/>
    },
    {
        path: "/contactos",
        element: <Contacts/>
    },
    {
        path: "/sobre",
        element: <AboutUs/>
    },
    {
        path: "/reembolso",
        element: <Refunds/>
    },
])

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ChakraProvider>
                <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
                    <BrowserRouter>
                        <ShoppingCartProvider>
                            <Routes>
                                {router.routes.map((route, index) => (
                                    <Route key={index} path={route.path} element={route.element}/>
                                ))}
                            </Routes>
                        </ShoppingCartProvider>
                        <ToastContainer/>
                    </BrowserRouter>
                </ErrorBoundary>
            </ChakraProvider>
        </React.StrictMode>,
    )
