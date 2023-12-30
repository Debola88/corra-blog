import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Product from './components/Product';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='product' element={<Product />} />
    <Route path='pricing' element={<Pricing />} />
    <Route path='contact' element={<Contact />} />
  </Route>
))

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
