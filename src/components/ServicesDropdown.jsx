import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, supportingServices } from "@/data/services";

const PANEL_FROM = { opacity: 0, y: 10 };
const PANEL_TO = { opacity: 1, y: 0 };
const PANEL_EXIT = { opacity: 0, y: 8 };
const PANEL_TRANSITION = { duration: 0.25, ease: [0.16, 1, 0.3, 1] };
const SUPPORTING = supportingServices.slice(0, 5);

const ServicesDropdown = ({ open, onClose }) => (
    <AnimatePresence>
        {open && (
            <motion.div
                initial={PANEL_FROM}
                animate={PANEL_TO}
                exit={PANEL_EXIT}
                transition={PANEL_TRANSITION}
                className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-4"
                data-testid="services-dropdown-panel"
            >
                <div className="grid grid-cols-2 border border-line bg-white shadow-xl">
                    <div className="border-r border-line p-3">
                        {services.map((s) => (
                            <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                data-testid={`dropdown-service-${s.slug}`}
                                className="group block px-4 py-3 transition-colors hover:bg-offwhite focus:bg-offwhite focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="flex items-center justify-between text-sm font-bold text-navy">
                                    {s.name}
                                    <ArrowUpRight className="h-3.5 w-3.5 text-crimson opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                                </span>
                                <span className="mt-1 block text-xs leading-relaxed text-slate">{s.cardText}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between bg-offwhite p-3">
                        <div className="px-4 py-3">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-azure">Supporting capabilities</p>
                            <ul className="mt-3 space-y-1.5">
                                {SUPPORTING.map((s) => (
                                    <li key={s.name} className="text-xs font-medium text-slate">{s.name}</li>
                                ))}
                            </ul>
                        </div>
                        <Link
                            to="/services"
                            data-testid="dropdown-all-services"
                            className="group mx-4 mb-3 flex items-center gap-2 border-t border-line pt-4 text-sm font-bold text-crimson focus:outline-none"
                            onClick={onClose}
                        >
                            All Services
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default ServicesDropdown;
