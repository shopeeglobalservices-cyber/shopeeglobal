import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import BrandImage from "@/components/BrandImage";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { IMAGES } from "@/data/images";

const BREADCRUMBS = [{ label: "About Us" }];
const VALUES = [
    { title: "Clarity", text: "Plain language, documented decisions, and no ambiguity about what happens next." },
    { title: "Accountability", text: "Named ownership of every deliverable, and commitments that are kept." },
    { title: "Adaptability", text: "Engagements that adjust as priorities, markets, and requirements evolve." },
    { title: "Collaboration", text: "We work alongside client teams as one unit, not around them as a vendor." },
    { title: "Continuous Improvement", text: "Every engagement ends smarter than it began—measured, reviewed, and refined." },
];

const Eyebrow = ({ children }) => (
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">{children}</p>
);

const SplitSection = ({ testId, className, eyebrow, heading, image, imageTestId, leftSpan = "lg:col-span-4", rightSpan = "lg:col-span-8", children, after }) => (
    <section className={className} data-testid={testId}>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                <Reveal className={leftSpan}>
                    <Eyebrow>{eyebrow}</Eyebrow>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{heading}</h2>
                    {image && <BrandImage image={image} accent className="mt-8 aspect-[4/3] w-full" testId={imageTestId} />}
                </Reveal>
                <Reveal delay={0.15} className={rightSpan}>
                    <div className="max-w-3xl space-y-5 text-base leading-relaxed text-slate">{children}</div>
                </Reveal>
            </div>
            {after}
        </div>
    </section>
);

const MissionVision = () => (
    <>
        <Reveal delay={0.2}>
            <BrandImage image={IMAGES.about.overview} accent className="mt-14 aspect-[21/9] w-full" testId="about-overview-image" />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-px bg-line md:grid-cols-2">
            <Reveal className="h-full">
                <div className="h-full bg-white p-8 sm:p-10">
                    <Eyebrow>Mission</Eyebrow>
                    <p className="mt-4 text-lg font-semibold leading-relaxed text-charcoal sm:text-xl">
                        To give ambitious businesses one accountable partner for the technology, digital growth, and
                        human-powered support they need to build, operate, market, sell, and scale.
                    </p>
                </div>
            </Reveal>
            <Reveal delay={0.12} className="h-full">
                <div className="h-full bg-white p-8 sm:p-10">
                    <Eyebrow>Vision</Eyebrow>
                    <p className="mt-4 text-lg font-semibold leading-relaxed text-charcoal sm:text-xl">
                        A business landscape where execution is never the reason a good idea stalls—and where companies
                        of every size can access coordinated, professional growth capability.
                    </p>
                </div>
            </Reveal>
        </div>
    </>
);

const ServiceModel = () => (
    <div className="mt-14">
        <Reveal><Eyebrow>The integrated service model</Eyebrow></Reveal>
        <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.07}>
                    <Link
                        to={`/services/${s.slug}`}
                        data-testid={`about-service-${s.slug}`}
                        className="group flex h-full flex-col justify-between bg-white p-7 transition-colors duration-300 hover:bg-navy focus:ring-2 focus:ring-inset focus:ring-crimson-bright focus:outline-none"
                    >
                        <span className="text-base font-bold tracking-tight text-charcoal transition-colors group-hover:text-white">{s.name}</span>
                        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-crimson transition-colors group-hover:text-crimson-bright">
                            Explore
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </span>
                    </Link>
                </Reveal>
            ))}
        </div>
    </div>
);

const ValuesSection = () => (
    <section className="border-t border-line bg-offwhite" data-testid="about-values">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
            <Reveal>
                <Eyebrow>Our values</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">Five principles, applied daily.</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
                {VALUES.map((v, i) => (
                    <Reveal key={v.title} delay={i * 0.06}>
                        <div className="h-full bg-white p-7">
                            <span className="text-xs font-extrabold tracking-[0.2em] text-azure/60">{String(i + 1).padStart(2, "0")}</span>
                            <h3 className="mt-3 text-base font-bold tracking-tight text-charcoal">{v.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate">{v.text}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

const About = () => (
    <>
        <SEO
            title="About Us | Shopee Global"
            description="Shopee Global is a Gurugram-based integrated business-growth partner combining technology, e-commerce, digital growth, tele-calling, and customer support."
            path="/about"
        />
        <PageHero
            overline="About Shopee Global"
            title="One partner for the work of growing a business."
            copy="Shopee Global is an integrated business-growth partner helping companies build, operate, market, sell, and scale through technology, digital expertise, e-commerce support, tele-calling, and customer-support solutions."
            breadcrumbs={BREADCRUMBS}
            testId="about-hero"
            image={IMAGES.about.hero}
        />

        <SplitSection testId="about-overview" className="bg-white" eyebrow="Company overview" heading="Strategy means little without execution." after={<MissionVision />}>
            <p className="sm:text-lg">
                Shopee Global exists to close the gap between what ambitious businesses plan and what they can
                dependably deliver. From our base in Gurugram, we work with startups, small and medium enterprises,
                and larger organisations across India and international markets.
            </p>
            <p className="sm:text-lg">
                What makes the model different is integration. Rather than coordinating separate vendors for
                technology, digital growth, customer outreach, and support, our clients work with one accountable
                team that understands how those disciplines connect—and makes them work together.
            </p>
        </SplitSection>

        <SplitSection
            testId="about-philosophy"
            className="border-t border-line bg-offwhite"
            eyebrow="Operating philosophy"
            heading="Structured execution, measurable outcomes."
            image={IMAGES.about.philosophy}
            imageTestId="about-philosophy-image"
            leftSpan="lg:col-span-5"
            rightSpan="lg:col-span-7"
            after={<ServiceModel />}
        >
            <p>
                Every engagement begins with documented requirements and agreed measures of success. Work is planned
                in stages, progress is reported on a schedule, and decisions are recorded in writing. It is a
                deliberately unglamorous discipline—and it is why our work holds up after delivery.
            </p>
            <p>
                We serve clients in India and internationally from Gurugram, bringing the pace and practicality of one
                of the country's principal business hubs to engagements of every size.
            </p>
        </SplitSection>

        <SplitSection
            testId="about-gurugram"
            className="border-t border-line bg-white"
            eyebrow="Why Gurugram"
            heading="Based where Indian business moves."
            image={IMAGES.about.gurugram}
            imageTestId="about-gurugram-image"
        >
            <p>
                Gurugram is one of India's most concentrated centres of corporate and technology activity—home to
                global capability centres, fast-growing startups, and a deep pool of engineering, operations, and
                customer-experience talent.
            </p>
            <p>
                Operating from Udyog Vihar places Shopee Global inside that ecosystem: close to the talent our work
                depends on, well connected to clients across the National Capital Region, and oriented toward
                international delivery as a matter of course.
            </p>
        </SplitSection>

        <ValuesSection />

        {/* LEADERSHIP PROFILES — OPTIONAL, CURRENTLY HIDDEN. Enable only with real names, photos and approved bios. */}

        <CTASection
            heading="Want to know how we would approach your challenge?"
            copy="Share a few lines about your business and what you are working toward. We will respond with considered first thoughts."
        />
    </>
);

export default About;
