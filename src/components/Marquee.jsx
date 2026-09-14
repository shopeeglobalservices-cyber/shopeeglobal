const Marquee = ({ items }) => (
    <div
        className="overflow-hidden border-y border-line bg-offwhite py-5"
        aria-hidden="true"
        data-testid="editorial-marquee"
    >
        <div className="marquee-track flex w-max items-center">
            {[...items, ...items].map((item, i) => (
                <span
                    key={`${item}-${i}`}
                    className="flex items-center text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-slate whitespace-nowrap"
                >
                    <span className="px-8">{item}</span>
                    <span className="h-1.5 w-1.5 rotate-45 bg-crimson-bright" />
                </span>
            ))}
        </div>
    </div>
);

export default Marquee;
