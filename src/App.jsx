import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Boutique from "./pages/Boutique.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Profile from "./pages/Profile.jsx";
import Events from "./pages/Events.jsx";
import Auth from "./pages/Auth.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/Dashboard/theme/theme";
import MenuSpring from "./pages/MenuSpring.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import SubscriptionInfo from "./pages/SubscriptionInfo.jsx";
import BoutiqueSpecs from "./pages/BoutiqueSpecs.jsx";
import ProductService from "./Services/ProductService.jsx";
import Cafe from "./pages/Cafe.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PEHtQRuE32NAoOjV4xCbBSyNDHjSM7wt6fbFwhrteBjZw8UnPOxvswedEkH283usAKYc9XQpV07RHYk6XAQ3wCi00NkOcoK57"
);

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  /* const fetchAdminData = async () => {
    try {
      const response = await fetch("https://coffelab-api.onrender.com/admin/all");
      const responseData = await response.json();
      return Array.isArray(responseData.data) ? responseData.data : [responseData.data];
    } catch (error) {
      console.error("Error fetching admin data:", error);
      return [];
    }
  };

  const checkAdminStatus = async (admins) => {
    const currentUserLocalStorage = JSON.parse(localStorage.getItem("admin"));
    const currentUserSessionStorage = JSON.parse(sessionStorage.getItem("admin"));
    const currentUser = currentUserLocalStorage || currentUserSessionStorage;

    if (currentUser) {
      const isAdminUser = admins.some(admin => admin.email === currentUser.email);
      setIsAdmin(isAdminUser);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    const initializeAdminStatus = async () => {
      const admins = await fetchAdminData();
      await checkAdminStatus(admins);
    };

    initializeAdminStatus();
  }, []); */

  /*   useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) === true;

    if (location.pathname.startsWith("/admin-dashboard") && (!isLoggedIn || !isAdmin)) {
      navigate("/");
    }
  }, [location.pathname, isAdmin, navigate]); */

  const ProtectedRoute = ({ element }) => {
    const navigate = useNavigate();
    const isAdmin =
      localStorage.getItem("admin") || sessionStorage.getItem("admin");

    useEffect(() => {
      if (!isAdmin) {
        navigate("/admin-auth");
      }
    }, [isAdmin, navigate]);

    return isAdmin ? element : null;
  };

  const RetrieveBoutique = async () => {
    return await ProductService.getAll();
  };

  return (
    <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/menu-primavera" element={<MenuSpring />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/subscricao" element={<SubscriptionPage />} />
        <Route path="/subscricao-info" element={<SubscriptionInfo />} />
        <Route path="/esqueci-senha" element={<ForgotPassword />} />
        <Route path="/nossa-origem" element={<About />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route
          path="/boutique"
          element={<Boutique bitems={RetrieveBoutique} />}
        />
        <Route
          path="/boutique/:id"
          element={<BoutiqueSpecs bitems={RetrieveBoutique} />}
        />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/politica-reembolso" element={<RefundPolicy />} />
        <Route path="/termos-servico" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/admin-dashboard/*"
          element={
            <ProtectedRoute
              element={
                <ChakraProvider theme={theme}>
                  <Dashboard />
                </ChakraProvider>
              }
            />
          }
        />
        <Route
          path="/admin-auth"
          element={
            <ChakraProvider theme={theme}>
              <Auth />
            </ChakraProvider>
          }
        />
      </Routes>
    </Elements>
  );
};

export default App;
