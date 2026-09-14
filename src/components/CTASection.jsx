import { ArrowUpRight } from "lucide-react";
import { BUSINESS_EMAIL_LINK, SITE } from "data/site";
import { Reveal } from "./Reveal";

const CTASection = ({
    heading = "Ready to Build What Comes Next?",
    copy = "Tell us what you are building, improving, or scaling. Our team will help you identify the right path forward.",
    label = "Email Shopee Global",
    link = BUSINESS_EMAIL_LINK,
}) => (
    <section className="relative overflow-hidden bg-navy blueprint-grid" data-testid="cta-section">
        <div
            className="pointer-events-none absolute -bottom-48 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #FF3B3B 0%, transparent 65%)" }}
            aria-hidden="true"
        />
        <div
            className="pointer-events-none absolute -top-40 right-0 h-[460px] w-[460px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #4D8BFF 0%, transparent 65%)" }}
            aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure-bright">
                    Start a conversation
                </p>
                <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {heading}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                    {copy}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a
                        href={link}
                        data-testid="cta-email-button"
                        className="group inline-flex items-center gap-2 bg-crimson-bright px-7 py-3.5 text-sm font-bold text-navy transition-colors duration-300 hover:bg-white focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                    >
                        {label}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                    <span className="text-sm text-white/50">{SITE.email}</span>
                </div>
            </Reveal>
        </div>
    </section>
);

export default CTASection;
