import { Routes, Route } from "react-router-dom";
import { Login, ProductPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
