import { ArrowRight, ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { BlossomBranch } from '../components/Decorations';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/menu';

const images = `${import.meta.env.BASE_URL}images/`;
const featuredProducts = products.filter((product) => product.featured);

export default function Home() {
  return (
    <>
      <section className="relative bg-paper lg:pt-2" aria-labelledby="home-hero-title">
        <Container className="px-0 sm:px-5 lg:px-8">
          <div className="hero-stage relative isolate overflow-hidden bg-[#efe5d8]">
            <div aria-hidden="true" className="hero-photograph absolute inset-0">
              <img
                src={`${images}hero-matcha.webp`}
                alt=""
                fetchPriority="high"
                className="hero-photograph-img h-full w-full object-cover"
              />
            </div>

            <div aria-hidden="true" className="hero-wash pointer-events-none absolute inset-0" />

            <div className="hero-inner relative z-10 flex h-full items-center px-7 py-14 sm:px-12 lg:px-20">
              <div className="hero-copy max-w-[440px]">
                <p className="hero-enter hero-enter-1 eyebrow mb-5 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-7 bg-coffee/50" />
                  A LITTLE PEACE IN KYOTO
                </p>

                <h1
                  id="home-hero-title"
                  className={`
                    hero-enter hero-enter-2 font-editorial
                    text-[clamp(3rem,3.9vw,3.75rem)] leading-[.99] tracking-[-.04em] text-ink
                  `}
                >
                  Gentle moments
                  <br />
                  live here.
                </h1>

                <p className="hero-enter hero-enter-3 mt-5 max-w-[320px] text-[13px] leading-[2.05] text-[#594638]">
                  Matcha, handmade sweets and unhurried mornings. A warm little escape inspired by Kyoto.
                </p>

                <Link to="/menu" className="hero-enter hero-enter-4 button-dark mt-8 gap-5">
                  Explore our menu
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div aria-hidden="true" className="absolute bottom-20 right-5 z-10 hidden text-cream xl:block">
              <span className="font-japanese text-[20px] tracking-[.2em] [writing-mode:vertical-rl]">
                月のカフェ
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-10 bg-paper pt-8 sm:pt-10" aria-labelledby="seasonal-title">
        <Container>
          <div className="rounded-[26px] bg-cream px-6 pb-10 pt-9 shadow-whisper sm:rounded-[30px] sm:px-10 sm:pt-10 lg:px-12">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow mb-2">THE MENU</p>
                  <h2 id="seasonal-title" className="font-editorial text-[clamp(2.1rem,3vw,2.8rem)] leading-none text-ink">
                    Seasonal favorites
                  </h2>
                </div>

                <Link to="/menu" className="text-link mb-1 hidden sm:inline-flex">
                  Full menu
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <div className={`
              no-scrollbar -mx-6 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2
              sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4
            `}>
              {featuredProducts.map((product, index) => (
                <Reveal key={product.id} delay={index * 85} className="shrink-0 snap-start sm:shrink">
                  <div className="w-[220px] sm:w-auto">
                    <ProductCard product={product} />
                  </div>
                </Reveal>
              ))}
            </div>

            <Link to="/menu" className="text-link mt-5 inline-flex sm:hidden">
              Full menu
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <BlossomBranch className="pointer-events-none absolute -left-40 bottom-0 w-[360px] text-[#d1b9a5] opacity-20" />

        <Container className="relative grid items-center gap-8 lg:grid-cols-[.9fr_1.3fr] lg:gap-14">
          <Reveal>
            <div className="lg:pr-6">
              <SectionHeading
                eyebrow="OUR STORY"
                title={
                  <>
                    A gentle corner
                    <br />
                    of everyday life.
                  </>
                }
                description="Tsukino blends simple Japanese traditions with the comfort of a neighborhood café — warm light, seasonal sweets and a place to linger."
              />
              <Link to="/about" className="button-dark mt-7 gap-4">
                Discover our story
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="image-hover relative h-[310px] overflow-hidden rounded-[14px] shadow-whisper sm:h-[420px]">
              <img
                src={`${images}cafe-interior-wide.webp`}
                alt="Sunlit wooden café interior beside a quiet garden"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-5 left-5 rounded-full bg-cream/95 px-5 py-2 font-editorial text-[19px] italic text-coffee">
                Somewhere to slow down.
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#eee5d8] py-16 sm:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">FIND YOUR WAY</p>
              <h2 className="mt-4 font-editorial text-[clamp(2.3rem,4vw,3.7rem)] leading-[1.05] text-ink">
                A little Kyoto charm.
              </h2>
              <p className="mt-6 max-w-[420px] text-[13px] leading-[2.1] text-muted">
                Inspired by the narrow lanes of Higashiyama and the calm of a cup enjoyed slowly.
              </p>
              <Link to="/access" className="text-link mt-7">
                Explore the neighborhood
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="grid gap-6 border-l border-coffee/20 pl-6 sm:pl-10">
              <div className="flex items-start gap-4">
                <MapPin size={19} strokeWidth={1.4} className="mt-1 shrink-0 text-coffee" aria-hidden="true" />
                <div>
                  <h3 className="font-editorial text-[22px] text-ink">Higashiyama, Kyoto</h3>
                  <p className="mt-1 text-[12px] leading-[1.9] text-muted">Sannenzaka neighborhood · Japan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock3 size={19} strokeWidth={1.4} className="mt-1 shrink-0 text-coffee" aria-hidden="true" />
                <div>
                  <h3 className="font-editorial text-[22px] text-ink">10:00 – 18:00</h3>
                  <p className="mt-1 text-[12px] leading-[1.9] text-muted">Closed on Wednesdays</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container className="text-center">
          <Reveal>
            <p className="eyebrow">A CONCEPT BY LUKAS SZEWCZYK</p>
            <h2 className="mx-auto mt-4 max-w-[720px] font-editorial text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.12] text-ink">
              An imagined café, made to feel real.
            </h2>
            <p className="mx-auto mt-5 max-w-[580px] text-[13px] leading-[2.1] text-muted">
              Tsukino Café is a frontend portfolio concept by Lukas Szewczyk. Interested in this design or a custom website for your business?
            </p>
            <Link to="/contact" className="button-dark mt-8 gap-4">
              Work with Lukas
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
