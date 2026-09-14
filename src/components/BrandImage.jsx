const TONES = {
    tint: "bg-navy/35 mix-blend-multiply",
    dark: "bg-navy/70 mix-blend-multiply",
    light: "bg-white/45",
};

const BrandImage = ({ image, tone = "tint", className = "", imgClassName = "", priority = false, accent = false, testId }) => (
    <div className={`overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`} data-testid={testId}>
        <img
            src={image.src}
            alt={image.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={`h-full w-full object-cover saturate-[0.6] contrast-[1.05] ${imgClassName}`}
        />
        <div className={`pointer-events-none absolute inset-0 ${TONES[tone]}`} aria-hidden="true" />
        <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
                background: "linear-gradient(135deg, rgba(0,65,174,0.7) 0%, rgba(10,26,58,0) 50%, rgba(236,2,4,0.55) 100%)",
                mixBlendMode: "color",
            }}
            aria-hidden="true"
        />
        {accent && (
            <div className="pointer-events-none absolute bottom-0 left-0 flex h-1 w-full" aria-hidden="true">
                <span className="w-1/4 bg-crimson" />
                <span className="w-1/6 bg-azure" />
            </div>
        )}
    </div>
);

export default BrandImage;
