import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { SITE, mailto } from "@/data/site";
import { services } from "@/data/services";
import { Logo } from "./Logo";

const EMAIL_LINK = mailto(SITE.email, "Business Enquiry - Shopee Global");
const LINK_CLS = "text-white/60 transition-colors hover:text-crimson-bright focus:ring-2 focus:ring-crimson-bright focus:outline-none";
const COMPANY_LINKS = [
    { label: "Home", to: "/", testId: "footer-nav-home" },
    { label: "About Us", to: "/about", testId: "footer-nav-about-us" },
    { label: "How We Work", to: "/how-we-work", testId: "footer-nav-how-we-work" },
    { label: "Insights", to: "/insights", testId: "footer-nav-insights" },
    { label: "Careers", to: "/careers", testId: "footer-nav-careers" },
    { label: "Contact", to: "/contact", testId: "footer-nav-contact" },
];
const SERVICE_LINKS = [
    ...services.map((s) => ({ label: s.name, to: `/services/${s.slug}`, testId: `footer-service-${s.slug}` })),
    { label: "All Services", to: "/services", testId: "footer-all-services", bold: true },
];

const LinkColumn = ({ heading, links, className }) => (
    <div className={className}>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-azure-bright">{heading}</h2>
        <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
                <li key={l.to}>
                    <Link to={l.to} data-testid={l.testId} className={l.bold ? `font-bold ${LINK_CLS} text-white/80` : LINK_CLS}>
                        {l.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const BrandColumn = () => (
    <div className="lg:col-span-4">
        <span className="inline-block bg-white px-4 py-3">
            <Logo className="h-14 sm:h-16" />
        </span>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            An integrated business-growth partner helping companies build, operate, market, sell, and scale
            through technology, digital expertise, e-commerce support, tele-calling, and customer-support
            solutions.
        </p>
        <a
            href={EMAIL_LINK}
            data-testid="footer-email-link"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-crimson-bright transition-colors hover:text-white focus:ring-2 focus:ring-crimson-bright focus:outline-none"
        >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {SITE.email}
        </a>
        <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-white/50">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azure-bright/70" aria-hidden="true" />
            {SITE.address}
        </p>
        {/* LinkedIn button appears here once SITE.linkedinUrl is set in src/data/site.js */}
        {SITE.linkedinUrl && (
            <a
                href={SITE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin-link"
                className="mt-6 inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:border-crimson-bright hover:text-crimson-bright"
            >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
            </a>
        )}
    </div>
);

const ContactColumn = () => (
    <div className="lg:col-span-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-azure-bright">Start a conversation</h2>
        <p className="mt-5 text-sm leading-relaxed text-white/60">
            Tell us what you are building, improving, or scaling. We reply to every serious enquiry.
        </p>
        <a
            href={EMAIL_LINK}
            data-testid="footer-email-cta"
            className="mt-6 inline-flex items-center gap-2 bg-crimson-bright px-6 py-3 text-sm font-bold text-navy transition-colors duration-300 hover:bg-white focus:ring-2 focus:ring-white focus:outline-none"
        >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Us
        </a>
    </div>
);

const LegalBar = () => (
    <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
        <p className="text-xs text-white/40">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <div className="flex items-center gap-6 text-xs font-semibold">
            <Link to="/privacy-policy" data-testid="footer-privacy-link" className="text-white/50 transition-colors hover:text-crimson-bright focus:ring-2 focus:ring-crimson-bright focus:outline-none">
                Privacy Policy
            </Link>
            <Link to="/terms-of-use" data-testid="footer-terms-link" className="text-white/50 transition-colors hover:text-crimson-bright focus:ring-2 focus:ring-crimson-bright focus:outline-none">
                Terms of Use
            </Link>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-navy text-white" data-testid="site-footer">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
                <BrandColumn />
                <LinkColumn heading="Company" links={COMPANY_LINKS} className="lg:col-span-2" />
                <LinkColumn heading="Services" links={SERVICE_LINKS} className="lg:col-span-3" />
                <ContactColumn />
            </div>
            <LegalBar />
        </div>
    </footer>
);

export default Footer;
