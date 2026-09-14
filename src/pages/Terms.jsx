import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";

const SECTIONS = [
    {
        title: "Acceptance of these terms",
        body: `By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the site. ${SITE.name} may update these terms from time to time; the version published on this page is the current one.`,
    },
    {
        title: "Purpose of this website",
        body: "This website provides general information about Shopee Global and the services it offers. Content is provided for information only and does not constitute professional advice, a proposal, or an offer capable of acceptance. Any engagement with Shopee Global is governed by a separately agreed written contract.",
    },
    {
        title: "Accuracy of information",
        body: "We take care to ensure the information on this website is accurate and current, but we make no warranty that it is complete or error-free. Service descriptions are indicative and may be tailored, refined, or withdrawn without notice.",
    },
    {
        title: "Intellectual property",
        body: `All content on this website—including text, design, graphics, and the Shopee Global name and logo—is the property of ${SITE.name} or its licensors and is protected by applicable intellectual-property laws. You may not reproduce, distribute, or reuse it without prior written permission. Shopee Global is an independent company and is not affiliated with any other business using a similar name.`,
    },
    {
        title: "Acceptable use",
        body: "You agree not to misuse this website: no attempts to disrupt its operation, gain unauthorised access, scrape content at scale, or use it in any unlawful manner.",
    },
    {
        title: "Third-party links",
        body: "This website may link to third-party websites, such as map services. We are not responsible for the content, accuracy, or practices of third-party sites, and following such links is at your own discretion.",
    },
    {
        title: "Limitation of liability",
        body: "To the fullest extent permitted by law, Shopee Global accepts no liability for any loss or damage arising from use of, or reliance on, this website or its content. Nothing in these terms excludes liability that cannot be excluded by law.",
    },
    {
        title: "Governing law",
        body: "These terms are governed by the laws of India, and the courts at Gurugram, Haryana shall have jurisdiction over any dispute arising from them.",
    },
    {
        title: "Contact",
        body: `Questions about these terms can be sent to ${SITE.email} or by post to ${SITE.name}, ${SITE.address}.`,
    },
];

const BREADCRUMBS = [{ label: "Terms of Use" }];

const Terms = () => (
    <>
        <SEO
            title="Terms of Use | Shopee Global"
            description="The terms governing use of the Shopee Global website, including intellectual property, acceptable use, and limitation of liability."
            path="/terms-of-use"
        />
        <PageHero
            overline="Legal"
            title="Terms of Use"
            copy={`Effective July 2026. The terms that govern your use of the ${SITE.name} website.`}
            breadcrumbs={BREADCRUMBS}
            testId="terms-hero"
        />
        <section className="bg-white">
            <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-8" data-testid="terms-content">
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

export default Terms;
