import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ApproachDiagram from "@/components/ApproachDiagram";
import ProcessTimeline from "@/components/ProcessTimeline";
import BrandImage from "@/components/BrandImage";
import ArticleCard from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/data/images";
import { publishedArticles } from "@/data/insights";

const STRENGTHS = [
    { title: "Integrated capabilities under one roof", text: "Technology, e-commerce, digital growth, tele-calling, and customer support—coordinated by one accountable partner." },
    { title: "Built for startups, SMEs, and enterprises", text: "Engagements shaped to the scale and maturity of your business, not a one-size template." },
    { title: "Structured, transparent execution", text: "Documented requirements, agreed milestones, and regular progress reporting as standard practice." },
    { title: "Data-informed decision-making", text: "Recommendations grounded in measurement, with results tracked against agreed objectives." },
    { title: "Scalable engagement models", text: "Defined projects, retained support, or dedicated operational capacity that flexes with demand." },
    { title: "Gurugram-based, globally oriented", text: "Delivery from one of India's principal business hubs, serving clients in India and international markets." },
    { title: "Clear documentation, measurable objectives", text: "Every engagement produces written records and defined measures of success you can hold us to." },
];
const FEATURED = publishedArticles.slice(0, 3);
const ARROW = <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />;

export const ApproachSection = () => (
    <section className="border-t border-line bg-white" data-testid="approach-section">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <Reveal className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">The integrated approach</p>
                <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                    Connected Capabilities. One Coordinated Programme.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate">
                    Engage any capability independently, or combine them into an integrated growth programme where each
                    discipline reinforces the others.
                </p>
            </Reveal>
            <div className="mt-12"><ApproachDiagram /></div>
        </div>
    </section>
);

export const ProcessSection = () => (
    <section className="border-t border-line bg-offwhite" data-testid="process-section">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <Reveal>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">How we work</p>
                    <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                        A Clear Path From Brief to Outcome.
                    </h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <Link
                        to="/how-we-work"
                        data-testid="process-learn-more-link"
                        className="group inline-flex items-center gap-2 border border-navy px-6 py-3 text-sm font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                    >
                        See the full approach
                        {ARROW}
                    </Link>
                </Reveal>
            </div>
            <div className="mt-12"><ProcessTimeline /></div>
        </div>
    </section>
);

export const StrengthsSection = () => (
    <section className="border-t border-line bg-white" data-testid="why-section">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">Why Shopee Global</p>
                <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                    Verifiable Strengths. No Inflated Claims.
                </h2>
            </Reveal>
            <Reveal delay={0.1}>
                <BrandImage image={IMAGES.home.strengths} accent className="mt-12 aspect-[21/9] w-full" testId="strengths-image" />
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                {STRENGTHS.map((s, i) => (
                    <Reveal key={s.title} delay={(i % 2) * 0.08}>
                        <div className="flex items-start gap-6 border-t border-line pt-6">
                            <span className="text-3xl font-extrabold tracking-tight text-azure/25">{String(i + 1).padStart(2, "0")}</span>
                            <div>
                                <h3 className="text-base font-bold tracking-tight text-charcoal sm:text-lg">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate">{s.text}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export const FeaturedInsightsSection = () => (
    <section className="border-t border-line bg-offwhite" data-testid="featured-insights-section">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <Reveal>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">Insights</p>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                        Thinking That Moves Business Forward.
                    </h2>
                </Reveal>
                <Reveal delay={0.15}>
                    <Link
                        to="/insights"
                        data-testid="insights-view-all-link"
                        className="group inline-flex items-center gap-1.5 text-sm font-bold text-crimson transition-colors hover:text-navy focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                    >
                        View all insights
                        {ARROW}
                    </Link>
                </Reveal>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                {FEATURED.map((a, i) => (
                    <Reveal key={a.slug} delay={i * 0.08} className="h-full">
                        <ArticleCard article={a} />
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);
