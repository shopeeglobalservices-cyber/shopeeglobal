// ─────────────────────────────────────────────────────────────────────────────
// SERVICES DATA — edit service content, capabilities and FAQs here.
// Each principal service renders through the shared ServiceDetail template.
// ─────────────────────────────────────────────────────────────────────────────

export const engagementProcess = [
    {
        stage: "Discovery",
        text: "We listen first—understanding your business model, goals, constraints, and the outcomes that matter most.",
    },
    {
        stage: "Requirement Mapping",
        text: "Goals are translated into a documented, prioritised set of functional and operational requirements.",
    },
    {
        stage: "Strategy & Planning",
        text: "We define the approach, milestones, responsibilities, and measures of success before execution begins.",
    },
    {
        stage: "Execution",
        text: "Structured delivery with clear ownership, regular progress updates, and documented decisions.",
    },
    {
        stage: "Measurement & Optimisation",
        text: "Results are tracked against agreed objectives, and refinements are made on evidence—not assumption.",
    },
    {
        stage: "Handover or Continued Growth",
        text: "Clean handover with documentation, or an ongoing engagement that keeps improving performance.",
    },
];

export const supportingServices = [
    {
        name: "SEO & Performance Marketing",
        text: "Structured organic visibility programmes and carefully managed paid campaigns aligned to business goals.",
    },
    {
        name: "Funnel Optimisation",
        text: "Analysis and refinement of each step from first visit to completed enquiry or purchase.",
    },
    {
        name: "Brand & UI/UX Identity",
        text: "Coherent visual identities and interface systems that communicate professionalism and build trust.",
    },
    {
        name: "Analytics & Dashboards",
        text: "Decision-ready reporting that turns platform, campaign, and operational data into clear next steps.",
    },
    {
        name: "Cloud & DevOps Support",
        text: "Dependable hosting environments, deployment pipelines, and infrastructure housekeeping.",
    },
    {
        name: "Database Security & IT Consultancy",
        text: "Practical reviews of data handling, access, and resilience, with clear remediation guidance.",
    },
    {
        name: "Performance Optimisation",
        text: "Speed, stability, and scalability improvements for existing websites and applications.",
    },
];

export const services = [
    {
        slug: "ecommerce-services",
        name: "E-commerce Services",
        shortName: "E-commerce",
        icon: "store",
        cardText:
            "Launch, manage, and scale digital commerce operations with structured support across platforms, catalogues, and customer journeys.",
        heroTitle: "E-commerce operations, built to scale with your ambition.",
        heroCopy:
            "Whether you are launching your first online store or improving an established one, Shopee Global provides the technical, operational, and analytical support to run digital commerce with confidence.",
        metaTitle: "E-commerce Services | Shopee Global",
        metaDesc:
            "E-commerce website development, marketplace support, catalogue optimisation, customer journey improvement, and analytics for growing businesses.",
        problems: [
            "Product catalogues that are difficult to manage or keep consistent",
            "Customer journeys with avoidable friction between discovery and purchase",
            "Limited visibility into what is working across the store",
            "Operations that depend on manual effort as order volumes grow",
            "Landing pages that fail to convert campaign traffic",
            "Disconnected tools and data across the commerce stack",
        ],
        capabilities: [
            { title: "E-commerce Website Development", text: "Purpose-built online stores designed for reliability, speed, and straightforward management." },
            { title: "Marketplace Support", text: "Structured assistance with marketplace presence, listings, and day-to-day operational routines." },
            { title: "Product Catalogue Optimisation", text: "Clean, consistent, well-organised catalogues that make products easier to find and buy." },
            { title: "Customer Journey Improvement", text: "Identification and removal of friction across browsing, cart, checkout, and post-purchase stages." },
            { title: "Conversion-focused Landing Pages", text: "Campaign pages with clear messaging and a single, obvious next step for visitors." },
            { title: "Analytics & Performance Tracking", text: "Measurement frameworks that show exactly how the store performs against your objectives." },
            { title: "Store Performance Optimisation", text: "Speed, stability, and usability improvements that protect revenue and customer trust." },
            { title: "Technical Integrations", text: "Connecting payment, logistics, inventory, and communication tools into one coherent operation." },
            { title: "Ongoing Operational Support", text: "Dependable day-to-day assistance so your team can focus on growth rather than upkeep." },
        ],
        benefits: [
            "A commerce operation that grows without proportional growth in manual effort",
            "Clearer visibility of performance across products, channels, and campaigns",
            "Smoother customer journeys that support repeat purchase",
            "One accountable partner across technology and operations",
        ],
        related: ["SEO & Performance Marketing", "Funnel Optimisation", "Analytics & Dashboards", "Performance Optimisation"],
        faqs: [
            {
                q: "Can you take over an existing store rather than build a new one?",
                a: "Yes. We typically begin with a structured review of your current platform, catalogue, and customer journey, then recommend whether to improve what exists or rebuild where it makes sense.",
            },
            {
                q: "Do you work with marketplaces as well as our own website?",
                a: "We support businesses selling through their own stores and through marketplaces, helping keep catalogues, operations, and reporting consistent across channels.",
            },
            {
                q: "Will you guarantee a specific increase in sales?",
                a: "No responsible partner can guarantee commercial outcomes. What we commit to is structured execution, transparent measurement, and continuous optimisation against agreed objectives.",
            },
            {
                q: "Can you support us after launch?",
                a: "Yes. Many clients continue with retained operational support covering updates, catalogue management, performance tracking, and iterative improvement.",
            },
        ],
    },
    {
        slug: "web-development",
        name: "Web Development",
        shortName: "Web Development",
        icon: "code",
        cardText:
            "Corporate websites, web applications, and e-commerce builds engineered for performance, security, and long-term maintainability.",
        heroTitle: "Websites and web applications that work as hard as you do.",
        heroCopy:
            "From corporate websites to complex web applications, Shopee Global designs and builds digital platforms that are fast, secure, maintainable, and aligned with the way your business actually operates.",
        metaTitle: "Web Development Services | Shopee Global",
        metaDesc:
            "Corporate websites, responsive web applications, UI/UX implementation, CMS development, integrations, and ongoing maintenance from Shopee Global.",
        problems: [
            "Slow, unreliable, or outdated websites that undermine credibility",
            "Platforms that are difficult to update without developer help",
            "Poor mobile experience despite most visitors browsing on phones",
            "Integrations with business tools that break or never existed",
            "Security and scalability concerns as traffic grows",
            "No clear ownership of maintenance and technical health",
        ],
        capabilities: [
            { title: "Corporate Website Development", text: "Credibility-building company websites with clear structure, strong messaging, and editorial polish." },
            { title: "E-commerce Website Development", text: "Online stores engineered for catalogue clarity, checkout reliability, and operational ease." },
            { title: "Responsive Web Applications", text: "Browser-based tools and portals that behave consistently across desktop, tablet, and mobile." },
            { title: "Front-end & Back-end Development", text: "Clean, maintainable code on both sides of the stack, built to documented standards." },
            { title: "UI/UX Implementation", text: "Faithful translation of design systems into accessible, pixel-accurate interfaces." },
            { title: "CMS Development", text: "Content-managed platforms your team can update confidently without technical support." },
            { title: "Website Performance Optimisation", text: "Faster load times and smoother interactions through disciplined technical optimisation." },
            { title: "API & Third-party Integrations", text: "Reliable connections to payment, CRM, logistics, analytics, and communication services." },
            { title: "Maintenance & Technical Support", text: "Planned updates, monitoring, and issue resolution that keep platforms healthy over time." },
            { title: "Security & Scalability Reviews", text: "Structured assessments of vulnerabilities, capacity, and operational resilience." },
        ],
        benefits: [
            "A digital platform that supports sales, marketing, and operations rather than slowing them",
            "Lower long-term cost of ownership through maintainable engineering",
            "Confidence that security, performance, and accessibility are actively managed",
            "A clear, documented relationship between business goals and technical decisions",
        ],
        related: ["Cloud & DevOps Support", "Database Security & IT Consultancy", "Performance Optimisation", "Analytics & Dashboards"],
        faqs: [
            {
                q: "Which technologies do you build with?",
                a: "We select the stack after understanding your requirements, team, and long-term plans. Technology choices are documented and explained in plain language before any build begins.",
            },
            {
                q: "Can you rebuild our existing website without losing SEO value?",
                a: "Yes. Migrations are planned carefully with redirects, metadata preservation, and structural continuity so that hard-won search visibility is protected.",
            },
            {
                q: "Do you provide hosting and maintenance?",
                a: "We can manage hosting environments, updates, monitoring, and technical support as part of a retained arrangement, or hand everything over to your team with full documentation.",
            },
            {
                q: "How do you keep a project transparent?",
                a: "Agreed milestones, regular progress updates, and a written record of decisions. You always know what has been done, what is next, and why.",
            },
        ],
    },
    {
        slug: "app-development",
        name: "App Development",
        shortName: "App Development",
        icon: "smartphone",
        cardText:
            "Android, iOS, cross-platform, and web applications taken from product discovery through to deployment and beyond.",
        heroTitle: "Applications shaped by strategy, delivered with discipline.",
        heroCopy:
            "Shopee Global takes applications from first workshop to launched product—combining product discovery, considered design, sound engineering, and structured testing.",
        metaTitle: "App Development Services | Shopee Global",
        metaDesc:
            "Android, iOS, and cross-platform app development: product discovery, UI/UX design, API integration, testing, deployment, and optimisation.",
        problems: [
            "A product idea without a validated technical roadmap",
            "Apps that underperform, crash, or frustrate users",
            "Uncoordinated design and development that wastes budget",
            "Backend and API foundations that cannot scale with usage",
            "Launches delayed by unstructured testing",
            "No plan for improvement after version one ships",
        ],
        capabilities: [
            { title: "Android & iOS Applications", text: "Native-quality mobile experiences built for the platforms your customers actually use." },
            { title: "Cross-platform Applications", text: "Efficient single-codebase delivery where it serves the product and the budget." },
            { title: "Web Applications", text: "Installable-quality browser applications for products that belong on the open web." },
            { title: "Product Discovery & Technical Planning", text: "Structured definition of features, priorities, architecture, and realistic delivery phases." },
            { title: "UI/UX Design", text: "Interfaces designed around user tasks, tested against real usage expectations." },
            { title: "API Integration", text: "Clean connections between your app and the services, data, and systems it depends on." },
            { title: "Database Architecture", text: "Data structures designed for integrity, performance, and future growth." },
            { title: "Testing & Quality Assurance", text: "Planned functional, usability, and device testing before anything reaches users." },
            { title: "Deployment Support", text: "Managed release processes across app stores and hosting environments." },
            { title: "Performance & Scalability Optimisation", text: "Continuous refinement so the product stays fast as adoption grows." },
        ],
        benefits: [
            "A product roadmap grounded in technical reality before major spend",
            "One coordinated team across design, engineering, and quality",
            "Launch confidence through disciplined testing and release management",
            "A foundation built to improve continuously after release",
        ],
        related: ["Cloud & DevOps Support", "Brand & UI/UX Identity", "Analytics & Dashboards", "Performance Optimisation"],
        faqs: [
            {
                q: "Should we build native or cross-platform?",
                a: "It depends on your product, audience, and budget. During discovery we set out the trade-offs honestly and recommend the approach that fits—not the one that is simply easiest to sell.",
            },
            {
                q: "Can you take over an app that another team started?",
                a: "Yes, subject to a technical review of the existing codebase. We will tell you plainly what can be built upon and what should be reconsidered.",
            },
            {
                q: "Do you handle app store submission?",
                a: "Yes. We manage store listing preparation, review requirements, and release coordination as part of deployment support.",
            },
            {
                q: "What happens after launch?",
                a: "Most products continue with a measurement and optimisation cycle—reviewing usage, fixing issues, and planning the next release against evidence.",
            },
        ],
    },
    {
        slug: "tele-calling-customer-support",
        name: "Tele-calling & Customer Support",
        shortName: "Tele-calling & Support",
        icon: "headset",
        cardText:
            "Professional outreach, lead qualification, and customer support programmes delivered with consistency, training, and clear reporting.",
        heroTitle: "Human conversations, run with professional discipline.",
        heroCopy:
            "Shopee Global provides tele-calling and customer-support teams that represent your business with courtesy and consistency—backed by structured scripts, training, and transparent performance reporting.",
        metaTitle: "Tele-calling & Customer Support Services | Shopee Global",
        metaDesc:
            "Outbound tele-calling, lead qualification, appointment setting, customer follow-up, onboarding support, and structured performance reporting.",
        problems: [
            "Leads that go cold because follow-up is inconsistent",
            "Sales teams spending time on unqualified conversations",
            "Customer issues that lack a clear resolution path",
            "No structured record of what was said, promised, or next",
            "Onboarding that leaves new customers uncertain",
            "Outreach that feels scripted in the worst sense—pushy rather than professional",
        ],
        capabilities: [
            { title: "Outbound Tele-calling", text: "Courteous, well-prepared outreach that represents your brand with professionalism." },
            { title: "Lead Qualification", text: "Structured conversations that identify genuine opportunity before it reaches your sales team." },
            { title: "Appointment Setting", text: "Reliable scheduling that respects the time of your team and your prospects." },
            { title: "Campaign-based Outreach", text: "Planned calling programmes aligned to launches, seasons, and marketing activity." },
            { title: "Customer Follow-up", text: "Timely, documented follow-through that keeps commitments and relationships on track." },
            { title: "Customer Onboarding Support", text: "Guided early-life support that helps new customers succeed from day one." },
            { title: "Issue-resolution Coordination", text: "Clear ownership of customer issues through to resolution, with nothing lost in between." },
            { title: "Retention & Re-engagement Calling", text: "Considered outreach to lapsed or at-risk customers that values the relationship first." },
            { title: "Script & Call-flow Development", text: "Conversation frameworks built with you—clear, compliant, and adaptable to real dialogue." },
            { title: "Performance Reporting", text: "Regular, honest reporting on volumes, outcomes, and quality so you always know what is happening." },
        ],
        benefits: [
            "Consistent follow-up that protects the value of every lead and customer",
            "A professional voice for your business on every call",
            "Structured records and reporting that make performance visible",
            "Flexible capacity that scales with campaigns and seasons",
        ],
        related: ["Funnel Optimisation", "Analytics & Dashboards", "SEO & Performance Marketing"],
        faqs: [
            {
                q: "How do you ensure call quality and professionalism?",
                a: "Through structured onboarding, agreed scripts and call-flows, ongoing training, and regular quality review. Reporting covers both activity and outcome quality.",
            },
            {
                q: "Can calling programmes scale up and down?",
                a: "Yes. Campaign-based engagements are designed to flex with your calendar—ramping for launches or seasons and easing back afterwards.",
            },
            {
                q: "Do callers work from our scripts or yours?",
                a: "Scripts and call-flows are developed together. We bring structure and experience; you bring product knowledge and brand voice.",
            },
            {
                q: "What reporting do we receive?",
                a: "Regular reports covering call volumes, outcomes, follow-up status, and observations from the floor—shared on an agreed schedule.",
            },
        ],
    },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
