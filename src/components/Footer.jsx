import { ArrowUpRight, Clock3, Github, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import Container from './Container';
import { BlossomBranch } from './Decorations';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Access', path: '/access' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[#473629] text-cream sm:mt-28">
      <BlossomBranch className="pointer-events-none absolute -right-16 -top-9 w-[340px] rotate-12 text-[#9e856e] opacity-20" />

      <Container className="relative pb-8 pt-16">
        <div className="grid gap-12 border-b border-cream/20 pb-14 md:grid-cols-3 md:gap-16">
          <div>
            <Brand light />
            <p className="mt-7 max-w-[275px] text-[13px] leading-[2.05] text-cream/75">
              A little space for tea, quiet afternoons and good company.
            </p>
            <p className="mt-6 font-editorial text-[22px] italic text-cream/70">
              A moment, just for you.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-semibold tracking-[.3em] text-cream/60">
              EXPLORE
            </p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-4">
              {pages.map(({ label, path }) => (
                <Link key={path} to={path} className="font-editorial text-[18px] transition-colors hover:text-[#e7c7a9]">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-semibold tracking-[.3em] text-cream/60">
              FIND US
            </p>
            <p className="flex gap-3 text-[12px] leading-[1.9] text-cream/80">
              <MapPin size={17} className="mt-1 shrink-0" aria-hidden="true" />
              Higashiyama, Kyoto
            </p>
            <p className="mt-4 flex gap-3 text-[12px] leading-[1.9] text-cream/80">
              <Clock3 size={17} className="mt-1 shrink-0" aria-hidden="true" />
              10:00 – 18:00 · Closed Wednesday
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 border-b border-cream/40 pb-1 text-[12px] hover:border-cream">
              Get in touch
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-7 text-[11px] leading-[1.8] text-cream/65 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Tsukino Café · Concept design by{' '}
            <a
              href="https://github.com/56mm/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
            >
              Lukas Szewczyk
            </a>
          </p>
          <a
            href="https://github.com/56mm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream/85 hover:text-cream"
          >
            <Github size={16} aria-hidden="true" />
            View developer profile
          </a>
        </div>
      </Container>
    </footer>
  );
}
