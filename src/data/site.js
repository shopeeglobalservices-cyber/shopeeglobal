// ─────────────────────────────────────────────────────────────────────────────
// SHOPEE GLOBAL — CENTRAL SITE CONFIGURATION
// Edit company-wide values here. Every page, header, footer and CTA reads from
// this file, so a single change propagates across the entire website.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
    name: "Shopee Global",
    tagline: "Build Smarter. Scale Confidently.",
    supportLine:
        "Technology, digital growth, and human-powered business support—all working together.",
    description:
        "Shopee Global provides e-commerce, web development, app development, tele-calling, digital growth, and customer-support services for businesses in India and worldwide.",
    email: "info@shopeeglobal.in",
    careersEmail: "hr@shopeeglobal.in",
    address:
        "Plot No. 27/28, Udyog Vihar, Sector 18, Phase IV, Gurugram, Haryana, India",
    city: "Gurugram, Haryana, India",

    // ─────────────────────────────────────────────────────────────────────
    // DEVELOPER NOTE — LINKEDIN URL
    // Paste the official Shopee Global LinkedIn company page URL below
    // (e.g. "https://www.linkedin.com/company/...") to enable the LinkedIn
    // buttons in the footer, contact page and careers page.
    // Leave it as an empty string to keep those buttons hidden.
    // Do NOT enter "#" or a guessed/assumed profile URL.
    // ─────────────────────────────────────────────────────────────────────
    linkedinUrl: "",
};

export const mailto = (to, subject) =>
    `mailto:${to}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const BUSINESS_EMAIL_LINK = mailto(
    SITE.email,
    "Business Enquiry - Shopee Global",
);

export const CAREERS_EMAIL_LINK = mailto(
    SITE.careersEmail,
    "Career Application - Shopee Global",
);

export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE.address,
)}`;

export const NAV_ITEMS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services", dropdown: true },
    { label: "How We Work", to: "/how-we-work" },
    { label: "Insights", to: "/insights" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
];
