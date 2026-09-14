import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const VIEWPORT = { once: true, margin: "-70px" };
const VISIBLE = { opacity: 1, y: 0 };
const MASK_FROM = { y: "112%" };
const MASK_TO = { y: 0 };
const FADE_FROM = { opacity: 0 };
const FADE_TO = { opacity: 1 };

export const Reveal = ({ children, delay = 0, y = 24, className = "" }) => {
    const reduced = useReducedMotion();
    if (reduced) return <div className={className}>{children}</div>;
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={VISIBLE}
            viewport={VIEWPORT}
            transition={{ duration: 0.75, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
};

export const MaskedLine = ({ children, delay = 0, className = "" }) => {
    const reduced = useReducedMotion();
    if (reduced) return <span className={`block ${className}`}>{children}</span>;
    return (
        <span className={`mask-line ${className}`}>
            <motion.span
                className="block"
                initial={MASK_FROM}
                animate={MASK_TO}
                transition={{ duration: 0.95, delay, ease: EASE }}
            >
                {children}
            </motion.span>
        </span>
    );
};

export const FadeIn = ({ children, delay = 0, className = "" }) => {
    const reduced = useReducedMotion();
    if (reduced) return <div className={className}>{children}</div>;
    return (
        <motion.div
            className={className}
            initial={FADE_FROM}
            animate={FADE_TO}
            transition={{ duration: 0.9, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
};
