import { Mail, MapPin, ExternalLink, Linkedin, ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import BrandImage from "@/components/BrandImage";
import { Reveal } from "@/components/Reveal";
import { SITE, MAP_URL, BUSINESS_EMAIL_LINK } from "@/data/site";
import { IMAGES } from "@/data/images";

const BREADCRUMBS = [{ label: "Contact" }];
const NOTES = [
    { title: "What to include", text: "Your company, your objective, and any timeline you are working toward. Attachments and links are welcome." },
    { title: "What happens next", text: "Your email is reviewed by the relevant specialist team, and we reply with considered next steps or honest questions." },
    { title: "Careers enquiries", text: `Applying to join the team? Write to ${SITE.careersEmail} with your résumé and area of expertise.` },
];

const EmailCard = () => (
    <div className="flex h-full flex-col justify-between bg-navy p-10 blueprint-grid sm:p-14">
        <div>
            <span className="flex h-12 w-12 items-center justify-center border border-white/15 text-azure-bright">
                <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h2 className="mt-8 text-xl font-bold tracking-tight text-white sm:text-2xl">Email us directly</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                Tell us what you are building, improving, or scaling. A few lines about your business and your
                objective is all we need to respond with considered first thoughts.
            </p>
        </div>
        <div className="mt-10">
            <a
                href={BUSINESS_EMAIL_LINK}
                data-testid="contact-email-button"
                className="group inline-flex items-center gap-2 bg-crimson-bright px-7 py-3.5 text-sm font-bold text-navy transition-colors duration-300 hover:bg-white focus:ring-2 focus:ring-white focus:outline-none"
            >
                {SITE.email}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <p className="mt-4 text-xs text-white/40">Opens your email client with a pre-addressed message.</p>
        </div>
    </div>
);

const AddressCard = () => (
    <div className="flex h-full flex-col justify-between bg-white p-10 sm:p-14">
        <div>
            <span className="flex h-12 w-12 items-center justify-center border border-line text-azure">
                <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h2 className="mt-8 text-xl font-bold tracking-tight text-navy sm:text-2xl">Visit or write to us</h2>
            <address className="mt-4 max-w-md text-sm not-italic leading-relaxed text-slate sm:text-base" data-testid="contact-address">
                {SITE.name}
                <br />
                Plot No. 27/28, Udyog Vihar,
                <br />
                Sector 18, Phase IV,
                <br />
                Gurugram, Haryana, India
            </address>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-map-link"
                className="inline-flex items-center gap-2 border border-navy px-6 py-3 text-sm font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white focus:ring-2 focus:ring-crimson-bright focus:outline-none"
            >
                View on Map
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            {/* LinkedIn button appears here once SITE.linkedinUrl is configured in src/data/site.js */}
            {SITE.linkedinUrl && (
                <a
                    href={SITE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-linkedin-link"
                    className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-bold text-charcoal transition-colors hover:border-crimson hover:text-crimson"
                >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                </a>
            )}
        </div>
    </div>
);

const ContactNotes = () => (
    <div className="mt-px grid grid-cols-1 gap-px bg-line sm:grid-cols-3" data-testid="contact-notes">
        {NOTES.map((n) => (
            <div key={n.title} className="bg-offwhite p-8">
                <h3 className="text-sm font-bold tracking-tight text-charcoal">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{n.text}</p>
            </div>
        ))}
    </div>
);

const Contact = () => (
    <>
        <SEO
            title="Contact Us | Shopee Global"
            description="Contact Shopee Global by email at info@shopeeglobal.in or visit us at Udyog Vihar, Sector 18, Gurugram, Haryana, India."
            path="/contact"
        />
        <PageHero
            overline="Contact"
            title="Let's Discuss What You're Building."
            copy="No forms, no queues, no obligation. One direct email reaches the team that can actually help."
            breadcrumbs={BREADCRUMBS}
            testId="contact-hero"
            image={IMAGES.contact.hero}
        />
        <section className="bg-white" data-testid="contact-details">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 gap-px bg-line lg:grid-cols-2">
                    <Reveal><EmailCard /></Reveal>
                    <Reveal delay={0.12}><AddressCard /></Reveal>
                </div>
                <Reveal delay={0.1}>
                    <BrandImage image={IMAGES.contact.office} accent className="mt-px aspect-[21/9] w-full" testId="contact-office-image" />
                </Reveal>
                <Reveal delay={0.1}><ContactNotes /></Reveal>
            </div>
        </section>
    </>
);

export default Contact;
