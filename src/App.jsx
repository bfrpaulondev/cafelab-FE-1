import {createBrowserRouter, Route, Routes} from "react-router-dom"
import {Container} from "react-bootstrap"
import {ShoppingCartProvider} from "./components/context/ShoppingCartContext.jsx";
import {createStandaloneToast} from "@chakra-ui/toast";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import Agenda from "./components/events/Agenda.jsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";
import Dashboard from "./Dashboard.jsx";
import Customer from "./Customer.jsx";
import Menu from "./Menu.jsx";
import Subscricao from "./components/subscricao/Subscricao.jsx";
import {ShoppingCart} from "./components/cart/ShoppingCart.jsx";
import Contacts from "./Contacts.jsx";
import Boutique from "./components/products/Boutique.jsx";
import FeNoCafeLab from "./components/subscricao/FeNoCafeLab.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import React from "react";
import SidebarWithHeader from "./components/shared/SideBar.jsx";

const {ToastContainer} = createStandaloneToast();


function App() {
    return (
        <ShoppingCartProvider>
            <SidebarWithHeader>
                <Container className="mb-4">
                    <Routes >
                        <Route path="/" element={<Home/>}/>
                        <Route path="/store" element={<Store/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </Container>
            </SidebarWithHeader>
        </ShoppingCartProvider>
    )
}

export default App