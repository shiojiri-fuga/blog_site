import { Route, Routes } from "react-router-dom";
import LoginForm from "../../coomon/pages/LoginForm";
import Home from "../pages/Home";

export const MobileRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};