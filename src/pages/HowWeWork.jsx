import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import BrandImage from "@/components/BrandImage";
import { IMAGES } from "@/data/images";

const STAGES = [
    {
        stage: "Discovery",
        what: "A structured conversation about your business model, goals, constraints, current systems, and what success looks like for you. We ask more than we pitch.",
        expect: "Honest questions, careful listening, and no obligation. If we are not the right partner, we will say so and suggest a better route.",
        outputs: ["A written summary of your objectives and constraints", "An initial view on the most effective approach"],
        transparency: "You receive our understanding in writing before anything is proposed—so misalignment surfaces early, not mid-project.",
    },
    {
        stage: "Requirement Mapping",
        what: "Objectives are translated into a documented, prioritised set of functional, technical, and operational requirements, reviewed and agreed with you.",
        expect: "Clear language over jargon. Every requirement is explained in terms of the business outcome it supports.",
        outputs: ["A prioritised requirements document", "Agreed measures of success for the engagement"],
        transparency: "Nothing enters the plan that you have not seen, questioned, and approved.",
    },
    {
        stage: "Strategy & Planning",
        what: "We define the delivery approach, milestones, responsibilities on both sides, and the reporting rhythm—before execution begins.",
        expect: "A realistic plan with named owners and visible checkpoints, not an optimistic slide.",
        outputs: ["A staged delivery plan with milestones", "A communication and reporting schedule"],
        transparency: "The plan is a shared document. Changes to scope, timing, or approach are discussed and recorded as they happen.",
    },
    {
        stage: "Execution",
        what: "Structured delivery by the relevant specialists—engineering, e-commerce operations, growth, or calling teams—against the agreed plan.",
        expect: "Regular progress updates at the agreed rhythm, with early warning the moment anything threatens a milestone.",
        outputs: ["Working deliverables at each milestone", "A running record of decisions and changes"],
        transparency: "Progress is reported against the plan you approved, in the same format, every time.",
    },
    {
        stage: "Measurement & Optimisation",
        what: "Results are reviewed against the measures of success agreed in stage two. What works is reinforced; what underperforms is diagnosed and refined.",
        expect: "Evidence-led recommendations, delivered plainly—including when the honest answer is to change course.",
        outputs: ["Performance reports against agreed objectives", "A prioritised list of refinements"],
        transparency: "You see the same numbers we do, with interpretation—not spin.",
    },
    {
        stage: "Handover or Continued Support",
        what: "The engagement closes with complete documentation and knowledge transfer, or transitions into a retained arrangement for ongoing operation and growth.",
        expect: "A clean, documented handover your team can actually run—or a seamless continuation with the team that built the work.",
        outputs: ["Complete documentation and credentials", "An optional continued-support plan"],
        transparency: "You own your assets, accounts, and documentation—unconditionally.",
    },
];

const MODELS = [
    {
        title: "Defined-scope Projects",
        text: "A clearly bounded piece of work—a website, an application, a store launch—with agreed deliverables, milestones, and completion criteria.",
    },
    {
        title: "Retained Support",
        text: "Ongoing maintenance, optimisation, and improvement of your platforms and programmes on a predictable monthly rhythm.",
    },
    {
        title: "Dedicated Operational Support",
        text: "A trained, managed team—calling, customer support, or e-commerce operations—working as an extension of yours.",
    },
    {
        title: "Growth & Optimisation Engagements",
        text: "Continuous, measurement-led improvement across journeys, funnels, and campaigns once the foundations are in place.",
    },
];

const BREADCRUMBS = [{ label: "How We Work" }];

const HowWeWork = () => (
    <>
        <SEO
            title="How We Work | Shopee Global"
            description="Shopee Global's six-stage delivery approach: discovery, requirement mapping, strategy, execution, measurement, and handover or continued support."
            path="/how-we-work"
        />
        <PageHero
            overline="How We Work"
            title="A delivery approach built on transparency."
            copy="Six stages, each with defined outputs and clear accountability—so you always know what is happening, what comes next, and what it is achieving."
            breadcrumbs={BREADCRUMBS}
            testId="how-we-work-hero"
            image={IMAGES.howWeWork.hero}
        />

        <section className="bg-white" data-testid="stages-section">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="space-y-0">
                    {STAGES.map((s, i) => (
                        <Reveal key={s.stage}>
                            <article
                                className={`grid grid-cols-1 gap-10 border-t border-line py-14 lg:grid-cols-12 ${
                                    i === STAGES.length - 1 ? "border-b" : ""
                                }`}
                                data-testid={`stage-${i + 1}`}
                            >
                                <div className="lg:col-span-4">
                                    <span className="text-4xl font-extrabold tracking-tight text-azure/20 sm:text-5xl">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h2 className="mt-3 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                                        {s.stage}
                                    </h2>
                                    <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                                        {s.what}
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-azure">
                                            What you can expect
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-charcoal">
                                            {s.expect}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-azure">
                                            Typical outputs
                                        </h3>
                                        <ul className="mt-3 space-y-2">
                                            {s.outputs.map((o) => (
                                                <li key={o} className="text-sm leading-relaxed text-charcoal">
                                                    {o}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-azure">
                                            How transparency is kept
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-charcoal">
                                            {s.transparency}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <section className="border-t border-line bg-offwhite" data-testid="engagement-models">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-7">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-azure">
                            Engagement models
                        </p>
                        <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                            Flexible ways to work together.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
                            Every engagement is scoped and priced individually against your
                            requirements. What stays constant is the structure: defined
                            deliverables, agreed measures, and transparent reporting.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15} className="lg:col-span-5">
                        <BrandImage image={IMAGES.howWeWork.models} accent className="aspect-[16/10] w-full" testId="engagement-models-image" />
                    </Reveal>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
                    {MODELS.map((m, i) => (
                        <Reveal key={m.title} delay={i * 0.07}>
                            <div className="h-full border-t-2 border-azure bg-white p-7">
                                <h3 className="text-base font-bold tracking-tight text-charcoal">
                                    {m.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate">{m.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>

        <CTASection
            heading="See how this approach fits your project."
            copy="Describe your objective in a few lines. We will outline how the six stages would apply to it—and what the first step looks like."
        />
    </>
);

export default HowWeWork;
