import { Link } from 'react-router-dom';

export default function Brand({ light = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Tsukino Café, return home"
      className={`inline-flex flex-col leading-none transition-opacity hover:opacity-75 ${light ? 'text-cream' : 'text-ink'}`}
    >
      <span className="font-japanese text-[23px] font-medium tracking-[.17em] sm:text-[26px]">
        月のカフェ
      </span>
      <span className="mt-2 font-sans text-[9px] font-semibold tracking-[.42em]">
        TSUKINO CAFÉ
      </span>
    </Link>
  );
}
