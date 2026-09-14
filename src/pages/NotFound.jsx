import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import NetworkCanvas from "@/components/NetworkCanvas";
import { MaskedLine, FadeIn } from "@/components/Reveal";

const NotFound = () => (
    <>
        <SEO
            title="Page Not Found | Shopee Global"
            description="The page you are looking for could not be found. Explore Shopee Global's services, insights, and contact options."
            path="/404"
        />
        <section
            className="blueprint-grid relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
            data-testid="not-found-page"
        >
            <NetworkCanvas className="absolute inset-0 h-full w-full opacity-50" />
            <div className="relative mx-auto w-full max-w-7xl px-6 py-40 lg:px-8">
                <FadeIn delay={0.1}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-azure-bright">
                        Error 404
                    </p>
                </FadeIn>
                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    <MaskedLine delay={0.2}>This page took a</MaskedLine>
                    <MaskedLine delay={0.36} className="text-crimson-bright">
                        different route.
                    </MaskedLine>
                </h1>
                <FadeIn delay={0.6}>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                        The page you are looking for does not exist or may have moved.
                        These destinations are a good place to continue.
                    </p>
                    <div className="mt-10 grid max-w-2xl grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
                        {[
                            ["Services", "/services", "services"],
                            ["Insights", "/insights", "insights"],
                            ["Contact", "/contact", "contact"],
                        ].map(([label, to, id]) => (
                            <Link
                                key={to}
                                to={to}
                                data-testid={`not-found-link-${id}`}
                                className="group flex items-center justify-between bg-navy px-6 py-5 text-sm font-bold text-white transition-colors duration-300 hover:bg-navy-700 focus:ring-2 focus:ring-inset focus:ring-crimson-bright focus:outline-none"
                            >
                                {label}
                                <ArrowUpRight className="h-4 w-4 text-crimson-bright transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                    <Link
                        to="/"
                        data-testid="not-found-home-link"
                        className="mt-8 inline-block text-sm font-bold text-crimson-bright underline-offset-4 transition-colors hover:text-white hover:underline focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                    >
                        Return to the homepage
                    </Link>
                </FadeIn>
            </div>
        </section>
    </>
);

export default NotFound;
