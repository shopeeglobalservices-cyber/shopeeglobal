import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { NAV_ITEMS, SITE } from "data/site";
import { services } from "data/services";

const FADE_FROM = { opacity: 0 };
const FADE_TO = { opacity: 1 };
const FADE_TRANSITION = { duration: 0.3 };
const ITEM_FROM = { opacity: 0, x: -16 };
const ITEM_TO = { opacity: 1, x: 0 };
const CTA_FROM = { opacity: 0, y: 16 };
const CTA_TO = { opacity: 1, y: 0 };
const CTA_TRANSITION = { delay: 0.5, duration: 0.4 };
const testIdFor = (label) => `mobile-nav-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
const navClass = ({ isActive }) =>
    `block border-b border-white/10 py-4 text-2xl font-extrabold tracking-tight transition-colors ${
        isActive ? "text-crimson-bright" : "text-white hover:text-crimson-bright"
    }`;

const MobileDrawer = ({ open, emailHref }) => (
    <AnimatePresence>
        {open && (
            <motion.div
                initial={FADE_FROM}
                animate={FADE_TO}
                exit={FADE_FROM}
                transition={FADE_TRANSITION}
                className="fixed inset-0 z-40 bg-navy blueprint-grid lg:hidden"
                data-testid="mobile-menu-drawer"
            >
                <div className="flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-28">
                    <nav aria-label="Mobile">
                        <ul className="space-y-1">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.li
                                    key={item.to}
                                    initial={ITEM_FROM}
                                    animate={ITEM_TO}
                                    transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <NavLink to={item.to} data-testid={testIdFor(item.label)} className={navClass}>
                                        {item.label}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-6 grid grid-cols-2 gap-px bg-white/10">
                            {services.map((s) => (
                                <Link
                                    key={s.slug}
                                    to={`/services/${s.slug}`}
                                    data-testid={`mobile-service-${s.slug}`}
                                    className="bg-navy px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:text-crimson-bright"
                                >
                                    {s.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    <motion.div initial={CTA_FROM} animate={CTA_TO} transition={CTA_TRANSITION} className="mt-10">
                        <a
                            href={emailHref}
                            data-testid="mobile-email-us-button"
                            className="flex items-center justify-center gap-2 bg-crimson-bright px-6 py-4 text-sm font-bold text-navy"
                        >
                            <Mail className="h-4 w-4" aria-hidden="true" />
                            Email Us — {SITE.email}
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default MobileDrawer;
