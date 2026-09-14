// ─────────────────────────────────────────────────────────────────────────────
// INSIGHTS DATA — add, edit, publish/unpublish (published:false) and
// categorise articles here. The listing page, filters, search, article
// template and related-articles rail all read from this file.
// ─────────────────────────────────────────────────────────────────────────────

export const insightCategories = [
    "Technology",
    "E-commerce",
    "Digital Growth",
    "Customer Experience",
    "Tele-sales",
    "Business Operations",
];

export const articles = [
    {
        slug: "building-scalable-digital-platforms",
        title: "Building Digital Platforms That Scale With Your Business",
        excerpt:
            "Scalability is decided long before traffic arrives. The choices made at the foundation—architecture, data, and ownership—determine how painful growth will be.",
        category: "Technology",
        date: "2026-06-24",
        readingTime: "6 min read",
        author: "Shopee Global Editorial Team",
        featured: true,
        published: true,
        metaTitle: "Building Digital Platforms That Scale | Shopee Global Insights",
        metaDesc:
            "Practical guidance on planning websites, applications, and commerce platforms that grow without painful rebuilds.",
        content: [
            {
                type: "p",
                text: "Most platforms do not fail because they were badly built. They fail because they were built for the business as it was on launch day, with no thought for what it might become. Scalability is less about servers and more about decisions—made early, documented well, and revisited honestly.",
            },
            { type: "h2", text: "Start with the operating model, not the feature list" },
            {
                type: "p",
                text: "Before choosing frameworks or drawing wireframes, be clear about how the business will actually run on the platform. Who updates content? How are orders, leads, or support requests handled? What reports does leadership expect every Monday morning? A platform that mirrors real workflows scales far more gracefully than one assembled around an abstract feature checklist.",
            },
            {
                type: "ul",
                items: [
                    "Map the three to five core workflows the platform must support on day one.",
                    "Decide who owns each workflow internally, and what they need to do it without developer help.",
                    "Write down the reports that matter, so measurement is designed in rather than bolted on.",
                ],
            },
            { type: "h2", text: "Choose boring, well-understood foundations" },
            {
                type: "p",
                text: "Fashionable technology is rarely the reason a platform scales. Maintainable code, sensible data structures, clean integrations, and clear documentation are. When every part of the system is understood by more than one person, growth becomes an exercise in extension rather than archaeology.",
            },
            { type: "h2", text: "Plan for integration from the beginning" },
            {
                type: "p",
                text: "Commerce, marketing, support, and finance tools will need to talk to your platform sooner than you expect. Designing clean connection points early avoids the fragile, one-off fixes that accumulate into technical debt. Treat every integration as a product decision: what data flows, in which direction, and who is responsible when it breaks.",
            },
            { type: "h2", text: "Measure, then optimise—in that order" },
            {
                type: "p",
                text: "Performance work without measurement is guesswork. Establish baseline metrics for speed, reliability, and conversion behaviour before optimising, and review them on a schedule rather than in a crisis. The businesses that scale calmly are the ones that always know their numbers.",
            },
            { type: "h2", text: "Practical recommendations" },
            {
                type: "ul",
                items: [
                    "Document every significant technical decision in plain language, with the reason it was made.",
                    "Budget for maintenance and optimisation as a standing line item, not an emergency fund.",
                    "Review platform health quarterly: speed, errors, security updates, and integration status.",
                    "When something hurts repeatedly, fix the cause—not the symptom.",
                ],
            },
            {
                type: "p",
                text: "A scalable platform is not one that never needs work. It is one where the work is predictable, affordable, and always moves the business forward.",
            },
        ],
    },
    {
        slug: "improving-ecommerce-customer-journeys",
        title: "Reducing Friction in the E-commerce Customer Journey",
        excerpt:
            "Customers rarely abandon a purchase for one big reason. They leave because of a dozen small frictions. Finding and removing them is systematic work.",
        category: "E-commerce",
        date: "2026-06-10",
        readingTime: "5 min read",
        author: "Shopee Global Editorial Team",
        featured: false,
        published: true,
        metaTitle: "Improving E-commerce Customer Journeys | Shopee Global Insights",
        metaDesc:
            "A practical framework for finding and removing friction across the e-commerce journey, from discovery to post-purchase.",
        content: [
            {
                type: "p",
                text: "Ask a shopper why they abandoned a cart and they will rarely cite a dramatic failure. More often it is accumulation: a confusing category structure, a surprise shipping cost, a checkout that demands too much, a delivery update that never arrived. Improving the customer journey is the disciplined removal of these small frictions, one stage at a time.",
            },
            { type: "h2", text: "Walk the journey as a customer would" },
            {
                type: "p",
                text: "The most reliable audit tool costs nothing: attempt to buy from your own store, on a phone, without insider knowledge. Note every moment of hesitation. Then compare that experience against your analytics to see where hesitation becomes abandonment. The two views together are more honest than either alone.",
            },
            { type: "h2", text: "The five stages where friction hides" },
            {
                type: "ul",
                items: [
                    "Discovery: can a first-time visitor understand what you sell within seconds?",
                    "Evaluation: are product information, pricing, and delivery expectations complete and consistent?",
                    "Checkout: how many fields, steps, and surprises stand between intent and payment?",
                    "Fulfilment: do customers know what is happening after they pay, without asking?",
                    "Post-purchase: is there a reason—and an easy path—to return and buy again?",
                ],
            },
            { type: "h2", text: "Fix causes, not metrics" },
            {
                type: "p",
                text: "A falling conversion rate is a symptom. The cause might be slow pages, unclear delivery information, weak product photography, or traffic from the wrong audience. Resist the urge to treat the number directly. Diagnose the stage, form a hypothesis, change one thing, and measure the result.",
            },
            { type: "h2", text: "Make improvement a routine, not a project" },
            {
                type: "p",
                text: "The stores that improve fastest treat journey optimisation as an operating rhythm: a short monthly review of drop-off points, a small set of prioritised changes, and honest measurement of what happened. Small, continuous corrections compound into a meaningfully better experience within quarters, not years.",
            },
            { type: "h2", text: "Practical recommendations" },
            {
                type: "ul",
                items: [
                    "Run a full purchase test on mobile every month and write down every moment of friction.",
                    "Make delivery costs and timelines visible before the checkout, not inside it.",
                    "Reduce checkout to the minimum fields a fulfilment team genuinely needs.",
                    "Send proactive order and delivery updates—silence after payment erodes trust quickly.",
                ],
            },
            {
                type: "p",
                text: "Friction is rarely where you assume it is. The businesses that find it fastest are the ones willing to look at their own store with a customer's impatience.",
            },
        ],
    },
    {
        slug: "effective-tele-calling-lead-follow-up",
        title: "Building a Tele-calling and Lead Follow-up Process That Respects the Customer",
        excerpt:
            "Most leads are not lost to competitors—they are lost to silence. A respectful, structured follow-up process protects the value of every enquiry.",
        category: "Tele-sales",
        date: "2026-05-27",
        readingTime: "6 min read",
        author: "Shopee Global Editorial Team",
        featured: false,
        published: true,
        metaTitle: "Effective Tele-calling & Lead Follow-up | Shopee Global Insights",
        metaDesc:
            "How to design a professional tele-calling and lead follow-up process with scripts, cadence, and reporting that respects customers.",
        content: [
            {
                type: "p",
                text: "Behind every enquiry is a person who chose to raise their hand. Yet in many businesses, follow-up depends on memory, goodwill, and whoever has a spare hour. The result is predictable: slow first responses, inconsistent conversations, and leads that quietly go cold. A structured tele-calling process fixes this—not by making calls more aggressive, but by making them more dependable.",
            },
            { type: "h2", text: "Speed and consistency beat intensity" },
            {
                type: "p",
                text: "The two variables that most influence follow-up success are how quickly the first call happens and how reliably the next one is scheduled. A calm, well-prepared call made promptly outperforms a pushy call made late. Build the process around response-time standards and a defined follow-up cadence rather than around pressure.",
            },
            { type: "h2", text: "Scripts should guide conversations, not replace them" },
            {
                type: "p",
                text: "A good call-flow gives the caller a clear opening, the right qualification questions, and honest answers to common objections—then leaves room for a human conversation. Develop scripts collaboratively with the people who know the product best, and refine them from real call outcomes rather than in isolation.",
            },
            {
                type: "ul",
                items: [
                    "Define what a qualified lead actually means for your business, in writing.",
                    "Agree the maximum number of follow-up attempts and the spacing between them.",
                    "Give callers a respectful, clean way to close conversations that are going nowhere.",
                ],
            },
            { type: "h2", text: "Every call ends with a record and a next step" },
            {
                type: "p",
                text: "A conversation that is not documented did not happen, as far as the business is concerned. Each call should end with a short structured record—outcome, interest level, commitments made—and a scheduled next action. This single discipline transforms follow-up from a personal habit into an organisational capability.",
            },
            { type: "h2", text: "Measure quality as well as quantity" },
            {
                type: "p",
                text: "Call counts alone reward activity, not effectiveness. Pair volume metrics with outcome and quality measures: qualification accuracy, appointment show rates, customer feedback, and conversion through the pipeline. Report them honestly and regularly, and use what you learn to coach rather than to blame.",
            },
            { type: "h2", text: "Practical recommendations" },
            {
                type: "ul",
                items: [
                    "Set a first-response standard for new enquiries and track adherence weekly.",
                    "Review a sample of calls each month against professionalism, not just outcomes.",
                    "Keep one source of truth for lead status—spreadsheets in inboxes do not scale.",
                    "Treat opt-outs and disinterest as data, and honour them immediately.",
                ],
            },
            {
                type: "p",
                text: "Respectful persistence is a system, not a personality trait. When the process is sound, professionalism stops depending on who picks up the phone.",
            },
        ],
    },
];

export const getArticle = (slug) => articles.find((a) => a.slug === slug);

export const publishedArticles = articles.filter((a) => a.published);

export const relatedArticles = (article, count = 2) =>
    publishedArticles.filter((a) => a.slug !== article.slug).slice(0, count);
