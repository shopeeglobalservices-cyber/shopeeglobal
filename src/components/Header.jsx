import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Mail } from "lucide-react";
import { NAV_ITEMS, mailto, SITE } from "@/data/site";
import { Logo } from "./Logo";
import ServicesDropdown from "./ServicesDropdown";
import MobileDrawer from "./MobileDrawer";

const EMAIL_US = mailto(SITE.email, "Business Enquiry - Shopee Global");
const LINK_BASE = "text-charcoal/80 hover:text-navy";
const LINK_ACTIVE = "text-azure";
const LINK_CLS = "px-1 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 focus:ring-2 focus:ring-crimson-bright focus:outline-none";
const navClass = ({ isActive }) => `${LINK_CLS} ${isActive ? LINK_ACTIVE : LINK_BASE}`;
const testIdFor = (label) => `nav-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;

const useScrolled = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return scrolled;
};

const useBodyLock = (locked) => {
    useEffect(() => {
        document.body.style.overflow = locked ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [locked]);
};

const ServicesNavItem = ({ active }) => {
    const [open, setOpen] = useState(false);
    const closeTimer = useRef(null);
    const location = useLocation();
    useEffect(() => setOpen(false), [location.pathname]);

    const openNow = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpen(true);
    };
    const scheduleClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpen(false), 160);
    };

    return (
        <div className="relative" onMouseEnter={openNow} onMouseLeave={scheduleClose}>
            <button
                type="button"
                data-testid="nav-services-dropdown-button"
                aria-expanded={open}
                aria-haspopup="true"
                onClick={() => setOpen((v) => !v)}
                onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
                className={`flex items-center gap-1.5 ${LINK_CLS} ${active ? LINK_ACTIVE : LINK_BASE}`}
            >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <ServicesDropdown open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const scrolled = useScrolled();
    useBodyLock(mobileOpen);
    useEffect(() => setMobileOpen(false), [location.pathname]);

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-crimson-bright focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy"
            >
                Skip to main content
            </a>
            <header
                data-testid="site-header"
                className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all duration-500 ${
                    scrolled || mobileOpen ? "border-line shadow-[0_1px_0_rgba(10,26,58,0.04)]" : "border-transparent"
                }`}
            >
                <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
                    <Link to="/" aria-label="Shopee Global — home" className="rounded-sm focus:ring-2 focus:ring-crimson-bright focus:outline-none">
                        <Logo />
                    </Link>

                    <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
                        {NAV_ITEMS.map((item) =>
                            item.dropdown ? (
                                <ServicesNavItem key={item.to} active={location.pathname.startsWith("/services")} />
                            ) : (
                                <NavLink key={item.to} to={item.to} data-testid={testIdFor(item.label)} className={navClass}>
                                    {item.label}
                                </NavLink>
                            ),
                        )}
                        <a
                            href={EMAIL_US}
                            data-testid="header-email-us-button"
                            className="ml-2 inline-flex items-center gap-2 bg-crimson px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-navy focus:ring-2 focus:ring-crimson-bright focus:outline-none"
                        >
                            <Mail className="h-4 w-4" aria-hidden="true" />
                            Email Us
                        </a>
                    </nav>

                    <button
                        type="button"
                        data-testid="mobile-menu-button"
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                        onClick={() => setMobileOpen((v) => !v)}
                        className="p-2 text-navy transition-colors focus:ring-2 focus:ring-crimson-bright focus:outline-none lg:hidden"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>
            <MobileDrawer open={mobileOpen} emailHref={EMAIL_US} />
        </>
    );
};

export default Header;
