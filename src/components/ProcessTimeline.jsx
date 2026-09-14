import { motion, useReducedMotion } from "framer-motion";
import { engagementProcess } from "@/data/services";

const ProcessTimeline = ({ steps = engagementProcess, numbered = true }) => {
    const reduced = useReducedMotion();
    return (
        <ol
            className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-6"
            data-testid="process-timeline"
        >
            {steps.map((step, i) => (
                <motion.li
                    key={step.stage}
                    className="group relative bg-white p-6 lg:p-7"
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span
                        className="absolute left-0 top-0 h-0.5 w-full origin-left bg-crimson-bright transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
                        aria-hidden="true"
                    />
                    {numbered && (
                        <span className="text-xs font-extrabold tracking-[0.2em] text-azure">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                    )}
                    <h3 className="mt-3 text-base font-bold tracking-tight text-charcoal">
                        {step.stage}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{step.text}</p>
                </motion.li>
            ))}
        </ol>
    );
};

export default ProcessTimeline;
