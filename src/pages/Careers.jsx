import { Mail, Check, Linkedin } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import BrandImage from "@/components/BrandImage";
import { Reveal } from "@/components/Reveal";
import { culturePoints, openings, applicationChecklist } from "@/data/careers";
import { CAREERS_EMAIL_LINK, SITE } from "@/data/site";
import { IMAGES } from "@/data/images";

const BREADCRUMBS = [{ label: "Careers" }];

const Eyebrow = ({ children }) => (
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">{children}</p>
);

const CultureSection = () => (
    <section className="bg-white" data-testid="careers-culture">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                    <Eyebrow>Life at Shopee Global</Eyebrow>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">A culture of craft and accountability.</h2>
                    <BrandImage image={IMAGES.careers.culture} accent className="mt-8 aspect-[4/3] w-full" testId="careers-culture-image" />
                </Reveal>
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
                        {culturePoints.map((c, i) => (
                            <Reveal key={c.title} delay={(i % 2) * 0.07}>
                                <div className="h-full bg-white p-7">
                                    <h3 className="text-base font-bold tracking-tight text-charcoal">{c.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate">{c.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const OpeningsEmpty = () => (
    <div className="mt-8 border border-line bg-white p-10 sm:p-12" data-testid="openings-empty-state">
        <p className="max-w-2xl text-base leading-relaxed text-charcoal sm:text-lg">
            We do not have any advertised openings at the moment, but we welcome expressions of interest from
            talented professionals across technology, e-commerce operations, customer engagement, and digital growth.
        </p>
        {/* LinkedIn follow button appears here once SITE.linkedinUrl is configured in src/data/site.js */}
        {SITE.linkedinUrl && (
            <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="careers-linkedin-link"
                className="mt-6 inline-flex items-center gap-2 border border-line px-5 py-2.5 text-sm font-bold text-charcoal transition-colors hover:border-crimson hover:text-crimson"
            >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                Follow us on LinkedIn
            </a>
        )}
    </div>
);

const OpeningsList = () => (
    <ul className="mt-8 space-y-px">
        {openings.map((o) => (
            <li key={o.title} className="border border-line bg-white p-7">
                <h3 className="text-lg font-bold text-charcoal">{o.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-azure">{o.location} · {o.type}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">{o.summary}</p>
            </li>
        ))}
    </ul>
);

const OpeningsSection = () => (
    <section className="border-t border-line bg-offwhite" data-testid="current-openings">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
            <Reveal>
                <Eyebrow>Current openings</Eyebrow>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">Open roles.</h2>
            </Reveal>
            <Reveal delay={0.12}>{openings.length === 0 ? <OpeningsEmpty /> : <OpeningsList />}</Reveal>
        </div>
    </section>
);

const ApplySection = () => (
    <section className="border-t border-line bg-white" data-testid="how-to-apply">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-5">
                    <Eyebrow>How to apply</Eyebrow>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">One email is all it takes.</h2>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-slate">
                        We keep the process simple and human: send your details directly to our team. Every genuine
                        application is read by a person, and we respond to profiles that match current or upcoming needs.
                    </p>
                    <a
                        href={CAREERS_EMAIL_LINK}
                        data-testid="careers-apply-button"
                        className="mt-8 inline-flex items-center gap-2 bg-crimson px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-navy focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                    >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Send Your Résumé
                    </a>
                    <p className="mt-3 text-sm text-slate">{SITE.careersEmail}</p>
                </Reveal>
                <Reveal delay={0.15} className="lg:col-span-7">
                    <div className="border border-line bg-offwhite p-8 sm:p-10">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-azure">Please include in your email</h3>
                        <ul className="mt-5 space-y-3">
                            {applicationChecklist.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-charcoal sm:text-base">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-azure" strokeWidth={2.5} aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);

const Careers = () => (
    <>
        <SEO
            title="Careers | Shopee Global"
            description="Build your career at Shopee Global across technology, e-commerce, customer engagement, and growth projects. Gurugram-based, globally oriented."
            path="/careers"
        />
        <PageHero
            overline="Careers"
            title="Do work that businesses actually feel."
            copy="Join a team working across technology builds, e-commerce operations, customer engagement, and growth programmes—for clients in India and international markets."
            breadcrumbs={BREADCRUMBS}
            testId="careers-hero"
            image={IMAGES.careers.hero}
        />
        <CultureSection />
        <OpeningsSection />
        <ApplySection />
        <CTASection
            heading="Prefer to start with a business enquiry instead?"
            copy="If you are here on behalf of your company rather than your career, our business team is one email away."
            label="Email the Business Team"
        />
    </>
);

export default Careers;
