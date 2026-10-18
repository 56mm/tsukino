import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Access from './pages/Access';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const pageTitles = {
  '/': 'Home',
  '/menu': 'Menu',
  '/about': 'About',
  '/access': 'Access',
  '/contact': 'Contact',
};

function PageNavigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.title = `${pageTitles[pathname] || 'Not Found'} | Tsukino Café`;
  }, [pathname]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <PageNavigation />
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/access" element={<Access />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      <SiteLayout />
    </BrowserRouter>
  );
}
