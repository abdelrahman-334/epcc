import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import ProductGroups from './pages/ProductGroups';
import ProductGroupDetail from './pages/ProductGroupDetail';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-groups" element={<ProductGroups />} />
          <Route path="/product-groups/:groupSlug" element={<ProductGroupDetail />} />
          <Route path="/product-groups/:groupSlug/:productSlug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;
