import Container from './Container';
import { BlossomBranch } from './Decorations';

export default function PageIntro({ eyebrow, japanese, english, text }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-coffee/10 bg-[#f0e8dc] py-16 sm:py-20">
      <BlossomBranch
        className="pointer-events-none absolute -right-20 -top-12 w-[310px] rotate-12 text-[#cfb9a2] opacity-30 sm:right-5 sm:w-[390px]"
      />

      <Container className="relative text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-editorial text-[clamp(3.8rem,9vw,6.5rem)] leading-none text-ink">
          {english}
        </h1>
        <p className="mt-6 font-sans text-[11px] tracking-[.25em] text-coffee">
          {japanese}
        </p>
        {text && (
          <p className="mx-auto mt-5 max-w-[540px] text-[13px] leading-[2.05] text-muted">
            {text}
          </p>
        )}
      </Container>
    </section>
  );
}
