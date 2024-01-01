import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import Product from './components/Product';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import BlogContent from './components/BlogContent';
import Privacy from './components/Privacy';
import NoMatch from './components/NoMatch';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='product' element={<Product />} />
    <Route path='pricing' element={<Pricing />} />
    <Route path='contact' element={<Contact />} />
    <Route path='about' element={<About />} />
    <Route path='blog' element={<Blog />} />
    <Route path='blog/blogcontent' element={<BlogContent />} />
    <Route path='privacy' element={<Privacy />} />
    <Route path='*' element={<NoMatch />} />
    <Route path='error404' element={<NoMatch />} />
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
