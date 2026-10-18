import { ArrowUpRight, Clock3, MapPin, TrainFront } from 'lucide-react';
import Container from '../components/Container';
import PageIntro from '../components/PageIntro';
import Reveal from '../components/Reveal';

const mapUrl =
  'https://www.openstreetmap.org/export/embed.html?bbox=135.7742%2C34.9952%2C135.7838%2C35.0015&layer=mapnik&marker=34.9984%2C135.7793';

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=Sannenzaka%2C+Higashiyama+Ward%2C+Kyoto';

export default function Access() {
  return (
    <>
      <PageIntro
        eyebrow="A CORNER OF KYOTO"
        english="Access"
        japanese="アクセス"
        text="Old stone lanes, wooden storefronts and the gentle rhythm of Higashiyama."
      />

      <Container className="pt-16 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-stretch">
          <Reveal>
            <div className="rounded-[18px] bg-cream px-7 py-10 shadow-whisper sm:px-11 sm:py-12">
              <p className="eyebrow">THE NEIGHBORHOOD</p>
              <h2 className="mt-4 font-editorial text-[clamp(2.5rem,4vw,3.7rem)] leading-[1.02] text-ink">
                Kyoto, Higashiyama.
              </h2>
              <p className="mt-5 text-[13px] leading-[2.1] text-muted">
                A beautiful part of the city, known for its historic streets and nearby temples.
                The neighborhood is the visual inspiration behind Tsukino Café.
              </p>

              <div className="mt-10 space-y-7 border-t border-coffee/10 pt-8">
                <div className="flex items-start gap-4">
                  <MapPin size={20} strokeWidth={1.4} className="mt-1 shrink-0 text-coffee" aria-hidden="true" />
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[.17em] text-ink">Area</h3>
                    <p className="mt-2 text-[13px] leading-[1.9] text-muted">
                      Sannenzaka, Higashiyama Ward
                      <br />
                      Kyoto, Japan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock3 size={20} strokeWidth={1.4} className="mt-1 shrink-0 text-coffee" aria-hidden="true" />
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[.17em] text-ink">Café hours</h3>
                    <p className="mt-2 text-[13px] leading-[1.9] text-muted">
                      10:00 – 18:00
                      <br />
                      Closed on Wednesdays
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TrainFront size={20} strokeWidth={1.4} className="mt-1 shrink-0 text-coffee" aria-hidden="true" />
                  <div>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[.17em] text-ink">Around here</h3>
                    <p className="mt-2 text-[13px] leading-[1.9] text-muted">
                      Kiyomizu-dera, traditional shops and the winding lanes of Sannenzaka.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-dark mt-10 gap-4"
              >
                Explore Higashiyama
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full min-h-[475px] flex-col overflow-hidden rounded-[18px] bg-linen shadow-whisper">
              <iframe
                src={mapUrl}
                title="OpenStreetMap view of Higashiyama, Kyoto"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[420px] w-full flex-1 border-0"
              />
              <div className="flex items-center justify-between gap-4 bg-cream px-6 py-4">
                <span className="text-[12px] text-muted">Sannenzaka · Higashiyama</span>
                <span className="font-editorial text-[23px] italic text-coffee">Kyoto</span>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-5 text-[11px] leading-[1.8] text-muted">
          The map highlights the real Higashiyama neighborhood. Tsukino Café is a design concept, not a storefront at this address.
        </p>

        <Reveal className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-[17px] bg-ink">
            <img
              src={`${import.meta.env.BASE_URL}images/cafe-interior-wide.webp`}
              alt="Wooden chairs, ceramic vases and warm sunlight inside a café"
              loading="lazy"
              className="h-[330px] w-full object-cover opacity-75 sm:h-[430px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/20 px-5 text-center">
              <p className="eyebrow text-cream">A GENTLER PACE</p>
              <h2 className="mt-4 max-w-[750px] font-editorial text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-cream">
                A quiet table by the window.
              </h2>
              <p className="mt-5 font-editorial text-[23px] italic text-cream/90">
                Warm wood, soft light and time to unwind.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
