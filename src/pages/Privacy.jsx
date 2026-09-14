import SEO from "components/SEO";
import PageHero from "components/PageHero";
import { Reveal } from "components/Reveal";
import { SITE } from "data/site";

const SECTIONS = [
    {
        title: "Overview",
        body: `This Privacy Policy explains how ${SITE.name} handles information in connection with this website. We are deliberate about data minimisation: this website does not contain enquiry forms, account systems, tracking pixels beyond standard analytics, or any mechanism that collects and stores your personal information in a database.`,
    },
    {
        title: "Information you choose to send us",
        body: `The only way to contact us through this website is by email, using your own email client. When you email us, we receive the information you choose to include—typically your name, email address, and the contents of your message. We use this information solely to respond to your enquiry and, where relevant, to conduct the business relationship that follows.`,
    },
    {
        title: "Information we do not collect",
        body: "We do not ask for, collect, or store personal information through website forms. We do not operate newsletter lists, marketing automation, or remarketing databases from this website. We do not sell, rent, or trade personal information to third parties.",
    },
    {
        title: "Analytics and technical logs",
        body: "Like most websites, standard, privacy-conscious analytics may be used to understand aggregate usage patterns—such as which pages are visited—so we can improve the site. This information is not used to identify individual visitors.",
    },
    {
        title: "How we protect correspondence",
        body: "Email correspondence is accessed only by team members who need it to respond to you, and is retained only for as long as the business relationship or your enquiry reasonably requires.",
    },
    {
        title: "Your choices",
        body: `You may ask us at any time what information we hold from our correspondence, request corrections, or ask us to delete it. Simply email ${SITE.email} with your request and we will action it promptly.`,
    },
    {
        title: "Changes to this policy",
        body: "If this policy changes, the revised version will be published on this page with an updated effective date. Material changes will be clearly indicated.",
    },
    {
        title: "Contact",
        body: `Questions about this policy can be sent to ${SITE.email} or by post to ${SITE.name}, ${SITE.address}.`,
    },
];

const BREADCRUMBS = [{ label: "Privacy Policy" }];

const Privacy = () => (
    <>
        <SEO
            title="Privacy Policy | Shopee Global"
            description="How Shopee Global handles information on this website: no forms, no stored visitor data, and respectful handling of email correspondence."
            path="/privacy-policy"
        />
        <PageHero
            overline="Legal"
            title="Privacy Policy"
            copy={`Effective July 2026. How ${SITE.name} treats your information—starting with collecting as little of it as possible.`}
            breadcrumbs={BREADCRUMBS}
            testId="privacy-hero"
        />
        <section className="bg-white">
            <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8" data-testid="privacy-content">
                {SECTIONS.map((s, i) => (
                    <Reveal key={s.title} delay={Math.min(i * 0.04, 0.2)}>
                        <div className="border-t border-line py-8 first:border-t-0 first:pt-0">
                            <h2 className="text-lg font-bold tracking-tight text-navy sm:text-xl">
                                {s.title}
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                                {s.body}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    </>
);

export default Privacy;
