import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import NetworkCanvas from "components/NetworkCanvas";
import BrandImage from "components/BrandImage";
import { MaskedLine, FadeIn } from "components/Reveal";
import { IMAGES } from "data/images";
import { SITE, mailto } from "data/site";

const EMAIL_LINK = mailto(SITE.email);
const FADE_STYLE = { background: "linear-gradient(100deg, #F5F7FA 30%, rgba(245,247,250,0.9) 55%, rgba(245,247,250,0.35) 100%)" };
const BLUE_GLOW = { background: "radial-gradient(circle, #4D8BFF 0%, transparent 62%)" };
const RED_GLOW = { background: "radial-gradient(circle, #FF3B3B 0%, transparent 65%)" };
const TAGS = ["E-commerce", "Web Development", "App Development", "Tele-calling & Support"];

const HomeHero = () => (
    <section className="blueprint-grid relative flex min-h-[100svh] items-center overflow-hidden bg-offwhite" data-testid="home-hero">
        <BrandImage image={IMAGES.home.hero} tone="light" priority className="absolute inset-0" testId="home-hero-image" />
        <div className="pointer-events-none absolute inset-0" style={FADE_STYLE} aria-hidden="true" />
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-40" />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[640px] w-[640px] rounded-full opacity-20" style={BLUE_GLOW} aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-56 left-1/3 h-[480px] w-[480px] rounded-full opacity-10" style={RED_GLOW} aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8">
            <FadeIn delay={0.1}>
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-azure">Integrated Business-Growth Partner</p>
            </FadeIn>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-navy sm:text-5xl lg:text-6xl">
                <MaskedLine delay={0.2}>Build Smarter.</MaskedLine>
                <MaskedLine delay={0.38} className="text-crimson">Scale Confidently.</MaskedLine>
            </h1>
            <FadeIn delay={0.7}>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
                    {SITE.name} brings technology, e-commerce expertise, digital growth, tele-calling, and customer
                    support together to help ambitious businesses move from strategy to execution.
                </p>
            </FadeIn>
            <FadeIn delay={0.9}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                        to="/services"
                        data-testid="hero-explore-services-button"
                        className="group inline-flex items-center gap-2 bg-crimson px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-navy focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                    >
                        Explore Our Services
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                    <a
                        href={EMAIL_LINK}
                        data-testid="hero-email-team-button"
                        className="inline-flex items-center gap-2 border border-azure px-7 py-3.5 text-sm font-bold text-azure transition-colors duration-300 hover:bg-azure hover:text-white focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                    >
                        Email Our Team
                    </a>
                </div>
            </FadeIn>
            <FadeIn delay={1.1}>
                <div className="mt-16 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-bold uppercase tracking-[0.25em] text-slate/60">
                    {TAGS.map((t) => <span key={t}>{t}</span>)}
                </div>
            </FadeIn>
        </div>
    </section>
);

export default HomeHero;
