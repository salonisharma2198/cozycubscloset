import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/view/homePage/Home';
import AppHeader from './components/uiComponents/navbar/AppHeader';
import Footer from './components/uiComponents/footer/Footer';
import ViewAllProducts from './components/view/productPage/ViewAllProducts';
import ProductDetail from "./components/view/productPage/ProductDetail";
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ViewAllProducts />} />
          <Route path="/product_detail/:id" element={<ProductDetail />} />
        </Routes>
        </main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
