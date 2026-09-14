import { Gauge, Eye, Layers, PhoneMissed, BarChart3, Scaling } from "lucide-react";
import BrandImage from "components/BrandImage";
import { Reveal } from "components/Reveal";
import { IMAGES } from "data/images";

const CHALLENGES = [
    { icon: Gauge, text: "Slow, unreliable, or outdated digital platforms that quietly tax every team that depends on them." },
    { icon: Eye, text: "Weak online visibility and inconsistent customer journeys across touchpoints." },
    { icon: Layers, text: "Fragmented e-commerce operations that multiply manual work as volumes grow." },
    { icon: PhoneMissed, text: "Limited lead follow-up and sales support that lets genuine opportunity cool." },
    { icon: BarChart3, text: "Poor performance tracking that leaves decisions to instinct rather than evidence." },
    { icon: Scaling, text: "Difficulty scaling teams and processes efficiently when demand arrives." },
];

const ChallengesSection = () => (
    <section className="border-t border-line bg-offwhite" data-testid="challenges-section">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">The reality for growing businesses</p>
                <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                    Growth Should Not Be Held Back by Execution Gaps.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
                    Most growth plans are sound. What slows them down is the gap between strategy and dependable
                    day-to-day execution. These are the gaps we are built to close.
                </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                    <BrandImage image={IMAGES.home.planning} accent className="aspect-[4/5] h-full min-h-[280px]" testId="challenges-image" />
                </Reveal>
                <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:col-span-8">
                    {CHALLENGES.map((c, i) => (
                        <Reveal key={c.text} delay={i * 0.06}>
                            <div className="flex h-full items-start gap-4 bg-white p-7">
                                <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-azure" strokeWidth={1.75} aria-hidden="true" />
                                <p className="text-sm leading-relaxed text-charcoal">{c.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ChallengesSection;
