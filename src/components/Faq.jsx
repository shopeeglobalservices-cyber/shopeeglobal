import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const Faq = ({ items, testId = "faq-section" }) => {
    const [open, setOpen] = useState(0);

    useEffect(() => {
        const ld = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(ld);
        document.head.appendChild(script);
        return () => script.remove();
    }, [items]);

    return (
        <div className="divide-y divide-line border border-line bg-white" data-testid={testId}>
            {items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div key={item.q}>
                        <button
                            type="button"
                            data-testid={`faq-question-${i}`}
                            aria-expanded={isOpen}
                            onClick={() => setOpen(isOpen ? -1 : i)}
                            className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-offwhite focus:ring-2 focus:ring-inset focus:ring-crimson-bright focus:outline-none sm:px-8"
                        >
                            <span className="text-base font-bold tracking-tight text-charcoal">
                                {item.q}
                            </span>
                            <Plus
                                className={`h-5 w-5 shrink-0 text-azure transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                aria-hidden="true"
                            />
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate sm:px-8 sm:text-base">
                                        {item.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export default Faq;
