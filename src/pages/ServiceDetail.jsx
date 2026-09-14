import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check, CircleAlert } from "lucide-react";
import SEO from "components/SEO";
import PageHero from "components/PageHero";
import CTASection from "components/CTASection";
import ProcessTimeline from "components/ProcessTimeline";
import Faq from "components/Faq";
import ServiceIcon from "components/ServiceIcon";
import { Reveal } from "components/Reveal";
import { getService, services, supportingServices } from "data/services";
import NotFound from "./NotFound";
import BrandImage from "components/BrandImage";
import { IMAGES } from "data/images";

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = getService(slug);
    const serviceLd = useMemo(
        () =>
            service && {
                "@context": "https://schema.org",
                "@type": "Service",
                name: service.name,
                provider: { "@type": "Organization", name: "Shopee Global" },
                description: service.metaDesc,
                areaServed: ["India", "International"],
            },
        [service],
    );
    const breadcrumbs = useMemo(
        () => service && [{ label: "Services", to: "/services" }, { label: service.name }],
        [service],
    );
    if (!service) return <NotFound />;

    const related = supportingServices.filter((s) => service.related.includes(s.name));
    const otherServices = services.filter((s) => s.slug !== slug);

    return (
        <>
            <SEO
                title={service.metaTitle}
                description={service.metaDesc}
                path={`/services/${service.slug}`}
                jsonLd={serviceLd}
            />
            <PageHero
                overline={service.name}
                title={service.heroTitle}
                copy={service.heroCopy}
                breadcrumbs={breadcrumbs}
                testId="service-hero"
                image={IMAGES.services[service.slug]}
            />

            <section className="bg-white" data-testid="service-problems">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        <Reveal className="lg:col-span-4">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                                The problems we address
                            </p>
                            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                                Sound familiar?
                            </h2>
                            <BrandImage image={IMAGES.services[service.slug]} accent className="mt-8 aspect-[4/3] w-full" testId="service-detail-image" />
                        </Reveal>
                        <div className="lg:col-span-8">
                            <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
                                {service.problems.map((p, i) => (
                                    <Reveal key={p} delay={i * 0.05}>
                                        <li className="flex h-full items-start gap-3 bg-white p-6">
                                            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-azure" strokeWidth={1.75} aria-hidden="true" />
                                            <span className="text-sm leading-relaxed text-charcoal">{p}</span>
                                        </li>
                                    </Reveal>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-line bg-offwhite" data-testid="service-capabilities">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    <Reveal>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                            Capabilities
                        </p>
                        <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                            What this service covers.
                        </h2>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
                        {service.capabilities.map((c, i) => (
                            <Reveal key={c.title} delay={(i % 3) * 0.06}>
                                <div className="h-full bg-white p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="text-crimson">
                                            <ServiceIcon name={service.icon} className="h-5 w-5" />
                                        </span>
                                        <h3 className="text-base font-bold tracking-tight text-charcoal">
                                            {c.title}
                                        </h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate">{c.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-line bg-white" data-testid="service-process">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <Reveal>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                                Typical engagement process
                            </p>
                            <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                                Six stages, no surprises.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <Link
                                to="/how-we-work"
                                data-testid="service-process-link"
                                className="group inline-flex items-center gap-1.5 text-sm font-bold text-crimson transition-colors hover:text-navy focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                            >
                                Explore the full methodology
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                            </Link>
                        </Reveal>
                    </div>
                    <div className="mt-12">
                        <ProcessTimeline />
                    </div>
                </div>
            </section>

            <section className="border-t border-line bg-offwhite" data-testid="service-benefits">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        <Reveal className="lg:col-span-5">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                                Business benefits
                            </p>
                            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                                What this makes possible.
                            </h2>
                        </Reveal>
                        <div className="lg:col-span-7">
                            <ul className="space-y-4">
                                {service.benefits.map((b, i) => (
                                    <Reveal key={b} delay={i * 0.06}>
                                        <li className="flex items-start gap-4 border border-line bg-white p-6">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-navy">
                                                <Check className="h-4 w-4 text-azure-bright" strokeWidth={2.5} aria-hidden="true" />
                                            </span>
                                            <span className="text-sm leading-relaxed text-charcoal sm:text-base">{b}</span>
                                        </li>
                                    </Reveal>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {related.length > 0 && (
                        <div className="mt-20">
                            <Reveal>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                                    Related supporting services
                                </p>
                            </Reveal>
                            <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
                                {related.map((r, i) => (
                                    <Reveal key={r.name} delay={i * 0.06}>
                                        <div className="h-full bg-white p-6">
                                            <h3 className="text-sm font-bold tracking-tight text-charcoal">{r.name}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-slate">{r.text}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="border-t border-line bg-white" data-testid="service-faq">
                <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24 lg:px-8">
                    <Reveal>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                            Questions, answered
                        </p>
                        <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                            Frequently asked questions.
                        </h2>
                    </Reveal>
                    <div className="mt-10">
                        <Faq items={service.faqs} />
                    </div>
                </div>
            </section>

            <section className="border-t border-line bg-offwhite" data-testid="service-others">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <Reveal>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                            Explore our other services
                        </p>
                    </Reveal>
                    <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
                        {otherServices.map((s) => (
                            <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                data-testid={`other-service-${s.slug}`}
                                className="group flex items-center justify-between bg-white p-6 transition-colors duration-300 hover:bg-navy focus:ring-2 focus:ring-inset focus:ring-crimson-bright focus:outline-none"
                            >
                                <span className="text-sm font-bold text-charcoal transition-colors group-hover:text-white">
                                    {s.name}
                                </span>
                                <ArrowUpRight className="h-4 w-4 text-crimson transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                heading={`Discuss your ${service.shortName.toLowerCase()} requirements.`}
                copy="Tell us where you are and where you need to be. We will respond with a considered view on the best way to get there."
            />
        </>
    );
};

export default ServiceDetail;
