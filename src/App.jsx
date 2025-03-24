import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Plastform from "./Pages/Plastform";
import PlatformDetail from "./Pages/PlatformDetail";
import BlogTutorial from "./Pages/BlogTutorial";
import Checkout from "./Pages/Checkout";
import BlogTutorialDetail from "./Pages/BlogTutorialDetail";

console.log(toast);

function App() {
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />

        <Navbar />
        <SearchBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/platform" element={<Plastform />} />
          <Route path="/platform/:id" element={<PlatformDetail />} />
          <Route path="/blogtutorial" element={<BlogTutorial />} />
          <Route path="/blogtutorial/:id" element={<BlogTutorialDetail />} />
        </Routes>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
