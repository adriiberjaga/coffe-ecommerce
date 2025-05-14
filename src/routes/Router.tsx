import { Routes, Route } from "react-router-dom";
import Home from "../pages/ts/Home";
import Menu from "../pages/ts/Menu";
import ProductDetail from "../components/ts/ProductDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRouter;
