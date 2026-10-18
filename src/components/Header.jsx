import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Brand from './Brand';
import Container from './Container';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Access', path: '/access' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 h-[80px] border-b border-coffee/10 bg-cream/95 backdrop-blur-lg lg:h-[92px]">
        <Container className="flex h-full items-center justify-between">
          <Brand />

          <nav aria-label="Main navigation" className="hidden items-center gap-10 lg:flex">
            {navigation.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="button-dark hidden items-center gap-4 lg:inline-flex">
            Book / Contact
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="focus-ring relative z-[61] flex size-11 items-center justify-center rounded-full border border-coffee/20 text-ink lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </Container>

        <div aria-hidden="true" className="scroll-progress absolute bottom-0 left-0 h-[2px] w-full" />
      </header>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`mobile-menu fixed inset-0 z-[60] bg-cream lg:hidden ${menuOpen ? 'mobile-menu-open' : ''}`}
      >
        <div className="flex h-[80px] items-center justify-between border-b border-coffee/10 px-5 sm:px-8">
          <Brand onClick={() => setMenuOpen(false)} />
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
            className="focus-ring rounded-full border border-coffee/20 p-3 text-coffee"
          >
            <X size={20} />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-[460px] flex-col px-8 pt-10">
          {navigation.map(({ label, path }, index) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              style={{ '--menu-delay': `${130 + index * 65}ms` }}
              className={({ isActive }) =>
                `mobile-nav-link flex items-center justify-between border-b border-coffee/10 py-4 font-editorial text-[38px] ${
                  isActive ? 'text-coffee' : 'text-ink'
                }`
              }
            >
              <span>{label}</span>
              <span className="font-sans text-[11px] tracking-widest text-muted">0{index + 1}</span>
            </NavLink>
          ))}

          <Link
            to="/contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="button-dark mt-10 justify-center gap-3"
          >
            Book / Contact
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </>
  );
}
