import { Route, Routes } from "react-router-dom";
import LoginForm from "../../coomon/pages/LoginForm";
import SignupForm from "../../coomon/pages/SignupForm";
import ActivaionUser from "../../coomon/pages/ActivationUser";
import Home from "../pages/Home";

export const PCRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />}/>
      <Route path="/activation_user" element={<ActivaionUser />} />
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};