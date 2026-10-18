import { ArrowUpRight, Github, HeartHandshake, Palette } from 'lucide-react';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';

const developerUrl = 'https://github.com/56mm/';

const services = [
  {
    title: 'Acquire this concept',
    description: 'Interested in the Tsukino Café design? Reach out to discuss using or adapting it for your project.',
    icon: HeartHandshake,
  },
  {
    title: 'Build something new',
    description: 'Need a different style or experience? Let’s talk about a website shaped around your business.',
    icon: Palette,
  },
];

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="LET’S MAKE SOMETHING GOOD"
        english="Get in Touch"
        japanese="お問い合わせ"
        text="A portfolio concept by Lukas Szewczyk, available to discuss for licensing or custom development."
      />

      <Container className="pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow">THE DEVELOPER</p>
              <h2 className="mt-4 font-editorial text-[clamp(3rem,5vw,4.7rem)] leading-[1.02] text-ink">
                Lukas Szewczyk.
              </h2>
              <p className="mt-6 max-w-[500px] text-[14px] leading-[2.1] text-muted">
                Tsukino Café is a concept website created for a frontend portfolio.
                The café, menu and brand are part of the design presentation, not an operating business.
              </p>
              <p className="mt-5 max-w-[500px] text-[14px] leading-[2.1] text-muted">
                If you like the experience, you can discuss acquiring this design or commissioning
                a tailored version directly with Lukas.
              </p>
              <a
                href={developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-dark mt-9 gap-4"
              >
                Visit Lukas's GitHub
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p className="mt-4 text-[12px] text-muted">
                github.com/56mm
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[20px] border border-coffee/10 bg-cream px-7 py-10 shadow-whisper sm:px-10 sm:py-12">
              <div className="flex items-center gap-4 border-b border-coffee/10 pb-7">
                <span className="flex size-14 items-center justify-center rounded-full bg-paper text-coffee">
                  <Github size={25} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-muted">Portfolio & inquiries</p>
                  <h3 className="mt-1 font-editorial text-[28px] text-ink">56mm on GitHub</h3>
                </div>
              </div>

              <div className="mt-9 space-y-9">
                {services.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="flex items-start gap-4">
                    <Icon size={22} strokeWidth={1.4} className="mt-1 shrink-0 text-coffee" aria-hidden="true" />
                    <div>
                      <h4 className="font-editorial text-[24px] text-ink">{title}</h4>
                      <p className="mt-2 text-[12px] leading-[2] text-muted">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-light mt-10 w-full justify-center gap-3"
              >
                View developer profile
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
