import { Section } from "@/components/ui/section";
import { legalEffectiveDate, type LegalDoc } from "@/data/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-espresso pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso-soft to-espresso" />
        <div className="absolute right-0 top-0 h-[360px] w-[360px] translate-x-1/3 -translate-y-1/4 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Legal
          </span>
          <h1 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-sand/50">
            Effective {legalEffectiveDate}
          </p>
        </div>
      </section>

      {/* Body */}
      <Section bg="white" padding="lg">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-taupe">{doc.intro}</p>

          <div className="mt-12 space-y-10">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <div className="mb-4 h-px w-8 bg-gold" />
                <h2 className="font-serif text-2xl font-light text-espresso">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 text-sm leading-relaxed text-taupe"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-taupe"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
