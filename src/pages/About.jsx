import { ArrowUpRight, Coffee, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const images = `${import.meta.env.BASE_URL}images/`;

const values = [
  {
    title: 'Season',
    japanese: '季節を大切に',
    description: 'Each season brings a different light, scent and little pleasure to the table.',
    icon: Leaf,
  },
  {
    title: 'Craft',
    japanese: '一杯に心を込めて',
    description: 'Simple ingredients, patient preparation and a love of small details.',
    icon: Coffee,
  },
  {
    title: 'Calm',
    japanese: '心ほどける場所',
    description: 'A space for slow conversation, a good book or a moment of quiet.',
    icon: Heart,
  },
];

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="A SLOWER WAY TO SPEND THE DAY"
        english="Our Story"
        japanese="月のカフェについて"
        text="Rooted in gentle Japanese traditions and the everyday pleasure of a warm cup."
      />

      <Container className="pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-20">
          <Reveal>
            <div className="image-hover overflow-hidden rounded-[14px] shadow-whisper">
              <img
                src={`${images}cafe-interior-wide.webp`}
                alt="Sunlit interior with wooden furniture and a garden view"
                className="aspect-[1.15/1] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="THE IDEA"
              title={<>A place to stay<br />a little longer.</>}
            />
            <p className="mt-7 text-[13px] leading-[2.35] text-muted">
              There is something beautiful about slowing down. The sound of cups,
              sunlight moving across a table and the first sip of freshly whisked matcha.
            </p>
            <p className="mt-5 text-[13px] leading-[2.35] text-muted">
              Tsukino Café takes inspiration from the intimate cafés of Kyoto,
              where the simplest moments often become the ones we remember.
            </p>
            <p className="mt-7 font-editorial text-[28px] italic text-coffee">
              A little comfort in every cup.
            </p>
          </Reveal>
        </div>
      </Container>

      <section className="mt-20 bg-[#eee5d8] py-20 sm:mt-28 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              centered
              eyebrow="OUR PHILOSOPHY"
              title="The little things matter."
              description="Thoughtful gestures, natural textures and the calm beauty of each passing season."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map(({ title, japanese, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 90}>
                <div className="h-full rounded-[17px] bg-cream px-8 py-10 text-center shadow-whisper">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-coffee/20 text-coffee">
                    <Icon size={23} strokeWidth={1.35} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-editorial text-[30px] text-ink">{title}</h3>
                  <p className="mt-2 font-japanese text-[11px] tracking-[.15em] text-coffee">
                    {japanese}
                  </p>
                  <p className="mt-5 text-[12px] leading-[2.05] text-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Container className="pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="A CUP OF COMFORT"
              title={<>The beauty of<br />a slower moment.</>}
              description="Ceramics, fragrant tea and familiar flavors — a warm ritual for even the busiest days."
            />
            <Link to="/menu" className="button-dark mt-8 gap-4">
              Explore the menu
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={110}>
            <div className="image-hover relative overflow-hidden rounded-[14px] shadow-whisper">
              <img
                src={`${images}tea-ceremony.webp`}
                alt="Traditional bowl of green matcha tea"
                loading="lazy"
                className="aspect-[1.2/1] w-full object-cover"
              />
              <span className="absolute bottom-5 right-5 font-editorial text-[23px] italic text-cream drop-shadow-md">
                Prepared with care.
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
