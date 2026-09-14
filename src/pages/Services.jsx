import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceIcon from "@/components/ServiceIcon";
import { Reveal } from "@/components/Reveal";
import { services, supportingServices } from "@/data/services";
import BrandImage from "@/components/BrandImage";
import { IMAGES } from "@/data/images";

const BREADCRUMBS = [{ label: "Services" }];

const Services = () => (
    <>
        <SEO
            title="Our Services | Shopee Global"
            description="Explore Shopee Global's services: e-commerce services, web development, app development, tele-calling and customer support, plus supporting growth capabilities."
            path="/services"
        />
        <PageHero
            overline="Services"
            title="Every capability growth demands, under one roof."
            copy="Four principal service groups—supported by a full bench of growth, analytics, and infrastructure capabilities—that can be engaged independently or as one coordinated programme."
            breadcrumbs={BREADCRUMBS}
            testId="services-hero"
            image={IMAGES.services.hero}
        />

        <section className="bg-white" data-testid="services-directory">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="space-y-0">
                    {services.map((s, i) => (
                        <Reveal key={s.slug}>
                            <article
                                className={`grid grid-cols-1 gap-10 border-t border-line py-14 lg:grid-cols-12 ${
                                    i === services.length - 1 ? "border-b" : ""
                                }`}
                                data-testid={`service-block-${s.slug}`}
                            >
                                <div className="lg:col-span-5">
                                    <BrandImage image={IMAGES.services[s.slug]} accent className="mb-8 aspect-[16/10] w-full" testId={`service-image-${s.slug}`} />
                                    <span className="text-xs font-extrabold tracking-[0.2em] text-azure/60">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className="mt-4 flex items-center gap-4">
                                        <span className="flex h-12 w-12 items-center justify-center border border-line text-azure">
                                            <ServiceIcon name={s.icon} />
                                        </span>
                                        <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                                            {s.name}
                                        </h2>
                                    </div>
                                    <p className="mt-5 max-w-md text-base leading-relaxed text-slate">
                                        {s.heroCopy}
                                    </p>
                                    <Link
                                        to={`/services/${s.slug}`}
                                        data-testid={`service-learn-more-${s.slug}`}
                                        className="group mt-7 inline-flex items-center gap-2 bg-crimson px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-navy focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                                    >
                                        Learn More
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                    </Link>
                                </div>
                                <div className="lg:col-span-7">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate">
                                        Capabilities
                                    </p>
                                    <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                                        {s.capabilities.map((c) => (
                                            <li key={c.title} className="flex items-start gap-2.5 text-sm text-charcoal">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-azure" strokeWidth={2.5} aria-hidden="true" />
                                                {c.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <section className="border-t border-line bg-offwhite" data-testid="supporting-services">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <Reveal>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                        Supporting capabilities
                    </p>
                    <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                        The disciplines that make the principal services perform.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
                        These supporting services strengthen any engagement—individually or
                        woven into an integrated programme.
                    </p>
                </Reveal>
                <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
                    {supportingServices.map((s, i) => (
                        <Reveal key={s.name} delay={(i % 3) * 0.07}>
                            <div className="h-full bg-white p-7 transition-colors duration-300 hover:bg-navy group">
                                <h3 className="text-base font-bold tracking-tight text-charcoal transition-colors group-hover:text-white">
                                    {s.name}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate transition-colors group-hover:text-white/60">
                                    {s.text}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <CTASection
            heading="Not sure which service fits your situation?"
            copy="Describe the outcome you are working toward. We will recommend the most direct route—whether that is one service or a coordinated programme."
        />
    </>
);

export default Services;
