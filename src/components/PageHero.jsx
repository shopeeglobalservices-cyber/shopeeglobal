import { MaskedLine, FadeIn } from "./Reveal";
import Breadcrumbs from "./Breadcrumbs";
import BrandImage from "./BrandImage";

const PageHero = ({ overline, title, copy, breadcrumbs, children, testId, image }) => (
    <section className="relative overflow-hidden bg-navy blueprint-grid" data-testid={testId}>
        {image && (
            <>
                <BrandImage image={image} tone="dark" priority className="absolute inset-0 opacity-60" testId={`${testId}-image`} />
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30"
                    aria-hidden="true"
                />
            </>
        )}
        <div
            className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #FF3B3B 0%, transparent 65%)" }}
            aria-hidden="true"
        />
        <div
            className="pointer-events-none absolute -bottom-48 -left-24 h-[520px] w-[520px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #4D8BFF 0%, transparent 65%)" }}
            aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 sm:pb-24 sm:pt-44 lg:px-8">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} onDark />}
            {overline && (
                <FadeIn delay={0.1}>
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-azure-bright">
                        {overline}
                    </p>
                </FadeIn>
            )}
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                <MaskedLine delay={0.15}>{title}</MaskedLine>
            </h1>
            {copy && (
                <FadeIn delay={0.45}>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                        {copy}
                    </p>
                </FadeIn>
            )}
            {children && <FadeIn delay={0.6}><div className="mt-8">{children}</div></FadeIn>}
        </div>
    </section>
);

export default PageHero;
