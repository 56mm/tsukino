import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { categories, products } from '../data/menu';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageIntro
        eyebrow="SMALL PLEASURES"
        english="Our Menu"
        japanese="季節を味わう、ひととき。"
        text="Comforting drinks, delicate sweets and a little something for every season."
      />

      <Container className="pt-16 sm:pt-20">
        <div className="text-center">
          <p className="eyebrow">MADE WITH CARE</p>
          <h2 className="mt-3 font-editorial text-[clamp(2.2rem,4vw,3rem)] text-ink">
            Find your favorite.
          </h2>
        </div>

        <div
          role="group"
          aria-label="Menu categories"
          className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {categories.map((category) => {
            const selected = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveCategory(category.id)}
                className={`focus-ring shrink-0 rounded-full border px-5 py-3 text-[12px] transition-all duration-300 ${
                  selected
                    ? 'border-coffee bg-coffee text-cream shadow-whisper'
                    : 'border-coffee/20 bg-cream text-coffee hover:border-coffee/50'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="my-8 text-center font-editorial text-[18px] italic text-muted">
          {visibleProducts.length} selected pieces
        </p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 rounded-[20px] bg-[#eee5d8] px-8 py-12 text-center sm:mt-24">
          <p className="eyebrow">SEASONAL NOTE</p>
          <h2 className="mt-3 font-editorial text-[35px] text-ink">Something new with each season.</h2>
          <p className="mx-auto mt-4 max-w-[500px] text-[13px] leading-[2.1] text-muted">
            Familiar flavors, small surprises and moments worth lingering over.
          </p>
          <Link to="/about" className="text-link mt-7">
            Read our story
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </>
  );
}
