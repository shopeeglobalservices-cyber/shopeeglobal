import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import BrandImage from "@/components/BrandImage";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { IMAGES } from "@/data/images";

const CapabilityCard = ({ service, delay }) => (
    <Reveal delay={delay} className="h-full">
        <Link
            to={`/services/${service.slug}`}
            data-testid={`capability-card-${service.slug}`}
            className="group flex h-full flex-col bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-inset focus:ring-crimson-bright focus:outline-none"
        >
            <span className="flex h-12 w-12 items-center justify-center border border-line text-azure transition-colors duration-300 group-hover:border-azure-bright group-hover:bg-navy group-hover:text-azure-bright">
                <ServiceIcon name={service.icon} />
            </span>
            <h3 className="mt-6 text-lg font-bold tracking-tight text-charcoal">{service.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{service.cardText}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-crimson">
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
        </Link>
    </Reveal>
);

const CapabilitiesSection = () => (
    <section className="bg-white" data-testid="capabilities-section">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                <Reveal className="lg:col-span-5">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">What we do</p>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                        One Partner. Every Growth Lever.
                    </h2>
                </Reveal>
                <Reveal delay={0.15} className="lg:col-span-7">
                    <p className="max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
                        Shopee Global brings technical execution, digital growth, operational support, and customer
                        engagement together under one coordinated service model—so the moving parts of your business
                        stop working against each other and start working as one.
                    </p>
                </Reveal>
            </div>
            <Reveal delay={0.2}>
                <BrandImage image={IMAGES.home.team} accent className="mt-12 aspect-[21/9] w-full" testId="capabilities-image" />
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s, i) => <CapabilityCard key={s.slug} service={s} delay={i * 0.08} />)}
            </div>
        </div>
    </section>
);

export default CapabilitiesSection;
