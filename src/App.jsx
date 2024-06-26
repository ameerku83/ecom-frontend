import Header from "./components/header";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Services from "./page/Services";
import ProductDetail from "./components/ProductDetail";
import Login from "./page/Login";
import AddProduct from "./admin/AddProduct";
import Signup from "./components/Signup";



function App() {
  return (
    <Router>
       
      <Header/>
    <Routes>
      
      < Route path="/" element={<Home/>} />
     
      < Route path="/about" element={<About/>} />
      < Route path="/contact"element={ <Contact/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/:id" element={<ProductDetail/>} />
      <Route path="/admin/product/add" element={<AddProduct/>} />
      <Route path="/signup" element={<Signup/>} />


     
    </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
