import { useState } from "react";
import { motion } from "framer-motion";

const NODES = [
    { label: "Technology", x: 50, y: 11, text: "Platforms, applications, integrations, and infrastructure engineered to documented standards." },
    { label: "E-commerce", x: 84, y: 30.5, text: "Stores, catalogues, marketplaces, and the operational routines that keep them selling." },
    { label: "Digital Growth", x: 84, y: 69.5, text: "Visibility, funnels, and campaigns that bring the right audience to the right experience." },
    { label: "Tele-sales", x: 50, y: 89, text: "Professional outreach and structured follow-up that protects the value of every lead." },
    { label: "Customer Support", x: 16, y: 69.5, text: "Onboarding, issue resolution, and retention conversations handled with consistency." },
    { label: "Analytics", x: 16, y: 30.5, text: "Measurement and reporting that turn activity into decisions and decisions into momentum." },
];

const ApproachDiagram = () => {
    const [active, setActive] = useState(null);

    return (
        <div data-testid="approach-diagram">
            <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                    {NODES.map((node, i) => (
                        <line
                            key={node.label}
                            x1="50"
                            y1="50"
                            x2={node.x}
                            y2={node.y}
                            stroke={active === i ? "#4D8BFF" : "#DDE2EC"}
                            strokeWidth={active === i ? 0.7 : 0.4}
                            className="transition-all duration-500"
                        />
                    ))}
                    <circle cx="50" cy="50" r="26" fill="none" stroke="#DDE2EC" strokeWidth="0.3" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#DDE2EC" strokeWidth="0.2" strokeDasharray="1 1.6" />
                </svg>
                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-navy text-center shadow-xl">
                    <span className="px-3 text-xs font-extrabold uppercase tracking-[0.15em] text-crimson-bright">
                        Shopee
                    </span>
                    <span className="px-3 text-xs font-extrabold uppercase tracking-[0.15em] text-white">
                        Global
                    </span>
                </div>
                {NODES.map((node, i) => (
                    <motion.button
                        key={node.label}
                        type="button"
                        data-testid={`approach-node-${node.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 border px-4 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 focus:ring-2 focus:ring-crimson-bright focus:outline-none ${
                            active === i
                                ? "border-azure-bright bg-navy text-azure-bright shadow-lg"
                                : "border-line bg-white text-charcoal hover:border-azure hover:text-azure"
                        }`}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(i)}
                        onBlur={() => setActive(null)}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                        {node.label}
                    </motion.button>
                ))}
            </div>
            <div className="mx-auto mt-8 max-w-2xl md:hidden">
                <ul className="grid grid-cols-2 gap-px bg-line">
                    {NODES.map((node) => (
                        <li key={node.label} className="bg-white p-4 text-sm font-bold text-charcoal">
                            {node.label}
                        </li>
                    ))}
                </ul>
            </div>
            <p
                className="mx-auto mt-8 hidden min-h-[3rem] max-w-xl text-center text-sm leading-relaxed text-slate transition-opacity duration-300 md:block"
                data-testid="approach-node-description"
                style={{ opacity: active === null ? 0.55 : 1 }}
            >
                {active === null
                    ? "Engage any capability independently, or combine them into one coordinated growth programme."
                    : NODES[active].text}
            </p>
        </div>
    );
};

export default ApproachDiagram;
