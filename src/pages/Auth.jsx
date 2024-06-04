import SignIn from "../components/Dashboard/views/Auth/SignIn.jsx";
import SignUp from "../components/Dashboard/views/Auth/SignUp.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Footer from "../components/Dashboard/components/Footer/Footer.jsx";

const Auth = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route index element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default Auth;
