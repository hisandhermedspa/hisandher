import { LinkButton } from "@/components/ui/button";
import { business } from "@/data";

export default function NotFound() {
  return (
    <section className="texture-noise flex min-h-[70vh] items-center justify-center bg-espresso">
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
          404
        </span>
        <h1 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
          This Page Has{" "}
          <span className="italic text-gold-light">Drifted Away</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-sand/60">
          The page you&apos;re looking for doesn&apos;t exist — but your
          glow-up is just a click away.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="/" variant="gold" size="lg" rounded="full">
            Back Home
          </LinkButton>
          <LinkButton
            href={business.bookingUrl}
            variant="outline-light"
            size="lg"
            rounded="full"
          >
            Book on Fresha
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
