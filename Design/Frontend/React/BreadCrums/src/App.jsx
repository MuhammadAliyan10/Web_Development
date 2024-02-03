import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductsDetails from "./Components/productsDetails";
import BreadCrumbs from "./Components/BreadCrumbs";
function App() {
  return (
    <>
      <Router>
        {<BreadCrumbs />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
