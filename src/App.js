import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/view/homePage/Home';
import AppHeader from './components/uiComponents/navbar/AppHeader';
import Footer from './components/uiComponents/footer/Footer';
import ViewProducts from './components/view/productPage/ViewProducts';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ViewProducts />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
