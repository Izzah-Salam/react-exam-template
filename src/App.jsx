import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import Services from "./components/Services";
import Promos from "./components/Promos";
import TopSellers from "./components/TopSellers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <AllProducts />
      <Services />
      <Promos />
      <TopSellers />
      <Footer />
    </div>
  );
}
export default App;
