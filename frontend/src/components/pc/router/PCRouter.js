import { Route, Routes } from "react-router-dom";
import LoginForm from "../../coomon/pages/LoginForm";
import SignupForm from "../../coomon/pages/SignupForm";
import RegistrationConfirmation from "../../coomon/pages/RegistrationConfirmation";
import ActivaionUser from "../../coomon/pages/ActivationUser";
import RegistrationCompleted from "../../coomon/pages/RegistrationCompleted";
import Home from "../pages/Home";
import BlogPreview from "../pages/BlogPreview";

export const PCRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />}/>
      <Route path="/activation-user" element={<ActivaionUser />} />
      <Route path="/activate/:uid/:token" element={<RegistrationConfirmation />} />
      <Route path="registration-completed" element={<RegistrationCompleted/>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/blog-preview/:id" element={<BlogPreview />} />
    </Routes>
  );
};