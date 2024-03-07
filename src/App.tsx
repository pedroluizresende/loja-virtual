import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShopCart from './pages/ShopCart';
import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/carrinho" element={ <ShopCart /> } />
      <Route path="/produto/:id" element={ <Product /> } />
    </Routes>
  );
}

export default App;
