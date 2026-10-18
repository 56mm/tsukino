import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { BlossomBranch, TeaIllustration } from '../components/Decorations';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#f0e8dc] py-20 text-center">
      <BlossomBranch className="pointer-events-none absolute -right-14 -top-16 w-[400px] text-[#cfb6aa] opacity-25" />
      <BlossomBranch className="pointer-events-none absolute -bottom-10 -left-28 w-[340px] rotate-180 text-[#c9b4a2] opacity-20" />

      <Container className="relative flex flex-col items-center">
        <p className="eyebrow">AN UNEXPECTED DETOUR</p>
        <div className="relative mt-1">
          <span className="font-editorial text-[clamp(7.5rem,20vw,13rem)] leading-none text-coffee/15">
            404
          </span>
          <TeaIllustration className="absolute left-1/2 top-[39%] w-[210px] -translate-x-1/2 sm:w-[270px]" />
        </div>
        <h1 className="mt-8 font-editorial text-[clamp(2.2rem,4vw,3.5rem)] text-ink">
          This page has wandered off.
        </h1>
        <p className="mt-4 max-w-[450px] text-[13px] leading-[2.1] text-muted">
          Let’s get you back to the café before the tea goes cold.
        </p>
        <Link to="/" className="button-dark mt-9 gap-4">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to home
        </Link>
      </Container>
    </section>
  );
}
